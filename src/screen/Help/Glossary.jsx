import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../../constants/Config";
import { SIZES } from "../../constants/theme";
import { AuthContext } from "../../context/AuthContext";



const Glossary = () => {

    
    const [loading, setLoading] = useState(false)
     const [glossary, setGlosary] = useState([])
     const [golssary0, setGlossary0] = useState( [])
     const {  userInfo } = useContext(AuthContext);
    // console.log(userInfo)
    const token = userInfo.data?.accessToken
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var raw = "";

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    const getData = () => {
        setLoading(true)
        fetch(`${BASE_URL}/account/glossary`, requestOptions)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong.')

            }).
            then(function (myJson) {
                let result = myJson.data
                setGlosary(result)
                              
            })
            .catch(function (error) {
                console.warn('Request failed', error)
            })

    }

    useEffect(() => {
        getData()
    }, [])

    
 const getData1 = () => {
        setLoading(true)
        fetch(`${BASE_URL}/account/glossary`, requestOptions)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong.')

            }).
            then(function (myJson) {
                let data = myJson.data[0].sectionData
                setGlossary0(data)                
            })
            .catch(function (error) {
                console.warn('Request failed', error)
            })

    }

    useEffect(() => {
        getData1()
    }, [])
    
    
  
   
    

    
    return (
        <ScrollView>
            <View>
            <View>
                <Text style={{ fontSize: SIZES.h2, padding: 7 }}> Glossary</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: SIZES.h4, padding: 7, color: 'orange' }}> Home /</Text>
                    <Text style={{ fontSize: SIZES.h4, padding: 7 }}>Glossary</Text>
                </View>
            </View>
            <View>

            </View>
            {/* <View style={{alignItems: 'center'}}>
                <View>
                <Text>
                    {title}</Text>
                </View>
                <Text>+</Text>
                <View><Text>{content}</Text></View>
            </View> */}
           <View>
           
          
            {/* <View style={{justifyContent: 'space-around'}}>
                {glossary.map(({section, }, index)=> (
                    <>
                    
                    <Accordion key={index.id} title={section} content={content}/>
                     {golssary0.map(({define, term}, index) => (
                <>
                <Accordion key={index}  title={term} content={define}/>
                </>
              ))} 
                    </>
                            
              )) }
            
            </View> */}
           </View>

        </View>
        </ScrollView>
    )
}

export default Glossary;