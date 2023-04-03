import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../Config";
import { SIZES } from "../constants/theme";
import { AuthContext } from "../context/AuthContext";



const Glossary = ({ navigation }) => {

    const [isActive, setIsActive] = useState(false)
    const { loading, userInfo } = useContext(AuthContext);
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
        fetch(`${BASE_URL}/account/glossary`, requestOptions)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong.')

            }).
            then(function (myJson) {
                let result = myJson
                console.log('Request Successfull.....', result)
            })
            .catch(function (error) {
                console.warn('Request failed', error)
            })

    }

    useEffect(() => {
        getData()
    }, [])

    const sportsData = [
        { title: 'game1', content: 'Badminton' },
        { title: 'game2', content: 'Football' },
        { title: 'game3', content: 'Tennis' }
    ];
    // const sportsData =
    //     { title: 'game1', content: 'Badminton' }

    const { title, content } = sportsData;

    const Accordion = ({ title, content }) => {
        const [isActive, setIsActive] = useState(false);

        return (
            <View style={{ alignItems:"flex-start",  }}>
                <View style={{borderWidth:1, borderColor: 'black', justifyContent:'space-between', 
                  width:390, margin: 10}} >
                    <TouchableOpacity style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around' }} onPress={() => setIsActive(!isActive)}>

                        <Text style={{  fontSize:SIZES.h1, 
                         }}>{title}</Text>

                        <Text style={{  }}>{isActive ? '-' : '+'}</Text>
                    </TouchableOpacity>
                </View>
                {isActive && <Text style={{paddingHorizontal: 10}}>{content}</Text>}
            </View>
        );
    };
    return (
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
           
            <View style={{justifyContent: 'space-around'}}>
                {sportsData.map(({title,content}, index)=> (
                    <>
                    <Accordion key={index.id} title={title} content={content}/></>
                ))}
            </View>
           </View>

        </View>
    )
}

export default Glossary;