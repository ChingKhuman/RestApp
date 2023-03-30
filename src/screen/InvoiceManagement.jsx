import * as React from 'react'
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BASE_URL } from '../Config';
import { COLORS, FONTWIEGHT, SIZES } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
 
const InvoiceMangement = () => {


       const [invoice, setInvoice] = React.useState([]) 
    const { loading, userInfo } = React.useContext(AuthContext);
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
        fetch(`${BASE_URL}/invoicediscounting/invoice`, requestOptions)
            .then(function (response) {
                return response.json();
            }).
            then(function (myJson) {
                let cont = myJson.data;              
                setInvoice(cont)
           
            }).catch(function (error) {
                console.log(error)
            })

    }
    React.useEffect(() => {
        getData()
    }, [])



    return (
       <ScrollView>
        <Text style={{padding:3,fontWeight:FONTWIEGHT.bold, fontSize: SIZES.h1}}>Invoices</Text>
     {invoice.map((item, index)=> 
     <>
      <View style={styles.view1}  key={index.id}>
        <View style={{backgroundColor: COLORS.green,
        alignItems: 'center', paddingVertical: 20}} >
            <Text style={styles.text1}>RECOURSE ON:</Text>
            <Text style={styles.text1}>Granite America Test_</Text>
        </View>
        <View style={{alignItems: 'center',}} >
            <Text style={styles.bol}>{item.discountRate}</Text>
            <Text>NET ANNUAL YIELD</Text>
            <Text style={styles.bol}> {item.invoiceTenure}</Text>
            <Text> TENURE</Text>

            <View style={{paddingVertical: 20, alignItems: 'center'
         }}>
                <Text style={styles.bol}>{item.fundingGoal}</Text>
                <Text>FUDING GOAL</Text>
                <Text style={styles.bol}> {item.UnfundedValue}</Text>
                <Text> UNFUNDED VALUE</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around'
    ,paddingTop: 20}}>
            <Text>Investment</Text>
            <Text> Rs 0.00L/0.85L 0%</Text>
        </View>

        <View style={{alignItems: 'center',paddingTop: 30 }}>
        <View>
        <TouchableOpacity style={styles.touchable1}>
                <Text style={styles.text3} >
                    Details
                </Text>
            </TouchableOpacity>
        </View>

            <View style={{paddingVertical: 5}}>
            <TouchableOpacity style={styles.touchable1}>
                <Text style={styles.text3} >
                    Fund
                </Text>
            </TouchableOpacity>
            </View>
            
        </View>

       
        </View>
     </>
     )}
    
       </ScrollView>
    )
}
export default InvoiceMangement;


const styles = StyleSheet.create({
    view1: {
        margin: 20,
        paddingBottom: 10,
        borderColor: 'grey',
        
    },
   title: {
    backgroundColor: COLORS.green,
    alignItems: 'center'
   },
     text1: {
        color: 'white',
        fontSize: SIZES.h1,
        fontWeight: FONTWIEGHT.weight100,
        
     },
     bol: {
        fontFamily: FONTWIEGHT.bold,
        color:COLORS.black,
        fontSize: SIZES.h3
     },
     btn1: {
        borderRadius: 1,
        borderColor: COLORS.green,

     },
     touchable1: {
        borderWidth:1, borderColor: 'green',
         width:370,height: 40, alignItems: 'center',
         
        },
        text3: { color: 'green', paddingTop: 7, }
     
})