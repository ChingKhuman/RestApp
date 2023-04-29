import * as React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';  
import { BASE_URL } from '../constants/Config';
import { COLORS, FONTWIEGHT, SIZES } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons'
import Spinner from "react-native-loading-spinner-overlay/lib";
import Icon1 from 'react-native-vector-icons/MaterialIcons'



const WalletScreen = ({ navigation }) => {

    const [wallet, setWallet] = React.useState({})
    const [loading, setLoading] = React.useState(false)

    const { userInfo } = React.useContext(AuthContext);
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
        fetch(`${BASE_URL}/wallet/wallet-balance`, requestOptions)
            .then(function (response) {
                return response.json();
            }).
            then(function (myJson) {
                let cont = myJson.data.finvridhhiWallet;
                   console.log('fungcheck', cont)
                setWallet(cont)
                setLoading(false)
            }).catch(function (error) {
                console.log(error)
                setLoading(false)
            })

    }
    React.useEffect(() => {
        getData()
    }, [])




    return (
        <>
            <ScrollView>
                <View style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:25, paddingVertical: 15  }}>
            <View style={{ flexDirection: 'row'}}>
    {/* <Text style={styles.Text0}>Home/ </Text> */}
    <Icon4 name="wallet" 
        size={20}
        color='black'
         /> 
    <Text style={styles.Text0}>Wallet</Text>
  </View>

<Icon1 name="notifications-on" 
        size={25}
        color='orange'
         /> 
         {/* <Text style={{borderWidth:1, borderRadius:50, borderColor: 'red'}}>0</Text> */}

  </View>
            <Spinner visible={loading}/>
                <View style={styles.View1}>
                    <View style={styles.View2}>
                        <View style={styles.View3}>
                            <Text style={styles.Text1}>
                                YOUR WALLET SUMMARY
                            </Text>
                        </View>

                        <View style={styles.View4} >
                            <Text style={styles.Text2}>
                                Rs {wallet.balance}
                            </Text>
                            <Text style={styles.Text3}>
                                WALLET BALANCE
                            </Text>
                        </View>



                        <View style={styles.View5}>
                            <TouchableOpacity style={styles.touchable1}
                                onPress={() => navigation.navigate('')}>
                                <Text style={styles.Text4} >
                                    My Investment
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={styles.View1}>
                    <View style={styles.View2}>
                        <View style={styles.View3}>
                            <Text style={styles.Text1}>
                                Adding Funds to Your UpCap Wallet
                            </Text>
                        </View>

                        <View style={styles.View4} >
                            <Text style={styles.Text3}>
                                Your UpCap Wallet account details are mentioned on your Dashboard and Profile pages. Please add it as a beneficiary in your bank account.
                                Once you validate the beneficiary in your bank, you can transfer funds to your UpCap Wallet.
                                Funds transferred typically reflect in your UpCap Wallet within an hour (IMPS) or two (NEFT/ RTGS). You will also receive a confirmation email from no-reply@castler.com.
                                You are now set to commence your UpCap Investment journey!
                            </Text>

                        </View>





                    </View>
                </View>

                <View style={styles.View1}>
                    <View style={styles.View2}>
                        <View style={styles.View3}>
                            <Text style={styles.Text1}>
                                Adding Funds to Your UpCap Wallet
                            </Text>
                        </View>

                        <View style={styles.View4} >
                            <Text style={styles.Text3}>
                                All maturing investments are credited to your UpCap Wallet. This would allow you to reinvest easily in newly available instruments and thereby exploit the power of compounding.
                                If, for any reason, you would like to transfer your UpCap Wallet funds back to your bank account, the UpCap platform provides a simple withdrawal option.
                                Click on the Withdraw Funds button, enter the amount you wish to withdraw and click on Withdraw. The funds will be credited to your bank account latest by the next business day. You will receive an email confirmation from no-reply@castler.com when the transfer is initiated.!
                            </Text>

                        </View>





                    </View>
                </View>
                <View style={{ marginVertical: 20, backgroundColor: 'white', height: 40 }} >
                                    <Text style={{ textAlign: 'center', paddingTop: 10, fontFamily: 'Georgia' }}>Copyright @ 2021-2022<Text style={{ color: 'blue' }}>UpCap.</Text>All right Reserved.</Text>

                                </View>
            </ScrollView>
        </>
    )
}



const styles = StyleSheet.create({
    btn: {
        justifyContent: 'space-between'
    },
    View1: { marginVertical: 30 },
    View2: {
        paddingTop: 0, margin: 10, borderWidth: 1,
        borderColor: COLORS.lightGrey, borderRadius: 8
    },
    View3: { alignItems: 'center', height: 80, backgroundColor: COLORS.green },
    Text1: { color: 'white', paddingVertical: 20, fontSize: 20 },
    View4: {
        alignItems: 'center', paddingTop: 20,
    },
    View0: {
        paddingHorizontal: 10, paddingTop: 20
      },
      Text0: { color: 'orange', fontSize: 15, paddingHorizontal: 8 },
    Text2: {
        fontFamily: FONTWIEGHT.bold, color: 'black',
        fontSize: SIZES.h2,
        textAlign: 'center'
    },
    Text3: { paddingTop: 10 },
    View5: { alignItems: 'center', paddingTop: 40, paddingBottom: 30 },
    touchable1: { borderWidth: 1, borderColor: COLORS.green, width: 320, height: 50, alignItems: 'center' },
    Text4: { position: 'relative', color: 'green', paddingTop: 10, fontFamily: FONTWIEGHT.bold },



})
export default WalletScreen;