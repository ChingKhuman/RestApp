import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { BASE_URL } from './constants/Config';
import { COLORS, FONTWIEGHT } from './constants/theme';
import { AuthContext } from './context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay/lib";

const Funding = () => {

    const [fund, setFund] = useState([]);
    const {  userInfo } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    // console.log(userInfo)
    const token = userInfo.data?.accessToken;
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
        fetch(`${BASE_URL}/invoicediscounting/listfundings`, requestOptions)
            .then(function (response) {
                return response.json();
            }).
            then(function (myJson) {
                let cont = myJson.data;
                //  console.log('fund check....', cont);
                setFund(cont)
                setLoading(false)
            }).catch(function (error) {
                console.log(error);
                setLoading(false)
            })

    }
   useEffect(() => {
        getData()
    }, [])
    return (
        <ScrollView>
            <View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ color: 'black', fontSize: 25, }}> Funding</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'orange', fontSize: 15, paddingHorizontal: 8 }}>Home/ </Text>
                        <Text>Funding</Text>
                    </View>
                </View>

                <Spinner visible={loading}/>
                
                   
                    {fund.map((item, index) =>
                   <View style={{ paddingTop: 50, margin: 20, borderRadius: 5  }} key={index}>
                     <View style={{
                        alignItems: 'flex-start', height: 130,
                        backgroundColor: COLORS.green, position: 'relative',
                        paddingLeft: 50, borderRadius: 10
                    }}>
                        <Text style={{ color: 'white', paddingVertical: 10, fontSize: 30, fontFamily: 'serif' }}>
                            Invested In:
                        </Text>
                        <Text style={{ color: 'white', fontSize: 25 ,fontFamily: 'serif'}}>
                            Granite America Test
                        </Text>

                    </View>
                    <View style={{
                            backgroundColor: 'white', borderBottomLeftRadius:5, borderBottomRightRadius: 5
                        }} key={index.id}>
                            <View style={{ alignItems: 'center', paddingVertical: 30 }}>
                                <Text style={{ fontFamily: 'sans-serif', fontSize: 18 }}>{item.fundingRate}</Text>

                                <Text style={{ fontFamily: 'serif', fontSize: 13,color:'black' }}>NET ANNUAL YIELD</Text>
                                <Text style={{ fontFamily: 'sans-serif', fontSize: 18,color:'black' }}>{item.investorFundedAmount}</Text>
                                <Text style={{ fontFamily: 'serif', fontSize: 13,color:'black' }}>YOUR INVESTMENT</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingVertical: 13 }}>
                                <Text style={{ fontFamily: 'sans-serif', fontSize: 18,color:'black' }}>{item.invoicePaymentDue}</Text>

                                <Text style={{ fontFamily: 'serif', fontSize: 13,color:'black' }}>EXPECTED REPAYMENT DATE</Text>
                                <Text style={{ fontFamily: 'sans-serif', fontSize: 18,color:'black' }}    >{item.expectedRepaymentAmount}</Text>
                                <Text style={{ fontFamily: 'serif', fontSize: 13,color:'black' }}>EXPECTED REPAYMENT AMOUNT</Text>
                            </View>
                            <View style={{ alignItems: 'center', paddingVertical: 30 }}>
                                <TouchableOpacity    style={{ borderWidth: 1, borderColor: COLORS.green, width: 320, height: 50, alignItems: 'center' }}
                                >
                                    <Text style={{  position: 'relative', color:COLORS.green, paddingTop: 10, fontFamily: 'serif',fontSize:20 }} >
                                        Invoice Details
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                       
                      )} 
              
            </View>
        </ScrollView>
    )
}
export default Funding;