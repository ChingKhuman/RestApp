import axios from 'axios';
import * as React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { BASE_URL } from './constants/Config';
import { COLORS, FONTWIEGHT, SIZES } from './constants/theme';
import { AuthContext } from './context/AuthContext';


const WalletScreen = () => {

    const [wallet, setWallet] = React.useState({})

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
        fetch(`${BASE_URL}/wallet/wallet-balance`, requestOptions)
            .then(function (response) {
                return response.json();
            }).
            then(function (myJson) {
                  let cont = myJson.data.finvridhhiWallet;
              console.log('fungcheck', cont)
                  setWallet(cont)
            }).catch(function (error) {
                console.log(error)
            })

    }
    React.useEffect(() => {
        getData()
    }, [])




    return (
        <>
            <View style={{marginVertical:30}}>
            <View style={{ paddingTop: 0, margin:10, borderWidth:1,
            borderColor: COLORS.lightGrey,borderRadius:8 }}>
                <View style={{ alignItems: 'center', height: 80, backgroundColor: COLORS.green }}>
                    <Text style={{ color: 'white', paddingVertical: 20, fontSize: 20 }}>
                        YOUR WALLET SUMMARY
                    </Text>
                </View>
               
                <View style={{ alignItems: 'center', paddingTop:20, 
             }} >
                <Text style={{fontFamily:FONTWIEGHT.bold, color:'black',
            fontSize: SIZES.h2}}>
                    Rs {wallet.balance}
                </Text>
                <Text style={{paddingTop: 10}}>
                    WALLET BALANCE
                </Text>
            </View>
            
                

                <View style={{ alignItems: 'center', paddingTop: 40,paddingBottom:30 }}>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: COLORS.green, width: 320, height: 50, alignItems: 'center' }}>
                        <Text style={{ position: 'relative', color: 'green', paddingTop: 10, fontFamily: FONTWIEGHT.bold }} >
                            My Investment
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            </View>

        </>
    )
}

export default WalletScreen;

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'space-between'
    }
})