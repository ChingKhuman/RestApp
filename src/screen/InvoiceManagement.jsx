import * as React from 'react'
import { View, Text, Alert, Pressable, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native'
import { BASE_URL } from '../constants/Config';
import { COLORS, FONTWIEGHT, SIZES } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay/lib";

const InvoiceMangement = () => {


    const [invoice, setInvoice] = React.useState([])
    const [modal, setModal] = React.useState(false)
    const [add, setAdd] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const { userInfo, Invoice } = React.useContext(AuthContext);

    const token = userInfo.data?.accessToken
    // console.log(token)
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
        fetch(`${BASE_URL}/invoicediscounting/invoice`, requestOptions)
            .then(function (response) {
                return response.json();
            }).
            then(function (myJson) {
                let cont = myJson.data;
                // console.log("check Invoice", cont)
                if (myJson.data === null) {
                    Alert.alert('Thank you for interest Right now we found nothing data , Will notify you ,.')
                }
                else { setInvoice(cont) }
                setLoading(false)

            }).catch(function (error) {
                console.log(error)
                setLoading(false)
            })

    }
    React.useEffect(() => {
        getData()
    }, [])

    // let convert = invoice[0].fundingGoal
    // console.log('checekjdfkdflkdflk........', convert)


    //  let convert1 = invoice[0].UnfundedValue
    //  console.log('Check funding', convert1)

    //  let result = convert - convert1 
    //  console.log(result)



    //     let value = convert
    //      console.log('calculate....', value)
    //     let value1 = Math.abs(convert1 / 100000).toFixed(2) + 'L'

    //  for (let i = 0; i < invoice.length; i++) {
    //     const element = invoice[i];
    //     console.log(element)

    //  }







    return (

        <View style={{ flex: 1 }}>
            <ScrollView>
                <Text style={styles.text0}>Invoices</Text>
                <Spinner visible={loading} />
               

                    {invoice.map((item, index) =>
                        <>
                           
                                <View style={styles.view1} key={index} >
                                    <View style={{
                                        backgroundColor: COLORS.green,
                                        alignItems: 'center', paddingVertical: 20
                                    }} >
                                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'serif' }}>RECOURSE ON:</Text>
                                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'san' }}>Granite America Test_</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', }} >
                                        <Text style={styles.bol}>{item.discountRate} %</Text>
                                        <Text style={{ color: 'black' }}>NET ANNUAL YIELD</Text>
                                        <Text style={styles.bol}> {item.invoiceTenure} D</Text>
                                        <Text style={{ color: 'black' }}> TENURE</Text>

                                        <View style={{
                                            paddingVertical: 20, alignItems: 'center'
                                        }}>
                                            <Text style={styles.bol}>INR  {item.fundingGoal}</Text>
                                            <Text>FUDING GOAL</Text>
                                            <Text style={styles.bol}>INR   {item.UnfundedValue}</Text>
                                            <Text> UNFUNDED VALUE</Text>
                                        </View>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between'
                                        , padding: 20
                                    }}>
                                        <Text style={styles.text}>Investment</Text>
                                        {/* <Text style={styles.text1}>Rs {value} </Text> */}

                                    </View>
                                    <View style={{ alignItems: 'flex-start', paddingStart: 20 }}>
                                        {/* < Progress.Bar progress={0.5} width={100} /> */}
                                    </View>
                                    {/* <View onLayout={onLayout} />
                            */}
                                    <View style={{ alignItems: 'center', paddingTop: 30 }}>
                                        <View>
                                            <TouchableOpacity style={styles.touchable1}>
                                                <Text style={styles.text3} >
                                                    Details
                                                </Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ paddingVertical: 5, }}>
                                            <TouchableOpacity onPress={() => setModal(true)} style={styles.touchable1}>
                                                <Text style={styles.text3} >
                                                    Fund
                                                </Text>
                                            </TouchableOpacity>

                                        </View>
                                        <Modal
                                            backdropOpacity={0.3}

                                            animationType="fade"
                                            transparent
                                            visible={modal}
                                            onRequestClose={() => {
                                                Alert.alert('Modal has been closed.');
                                                setModal(!modal);
                                            }}>
                                            <View style={styles.centeredView}>

                                                <View style={styles.modalView}>
                                                    <Text style={styles.modalText}>Funding</Text>



                                                    <Text style={{ color: 'black', paddingBottom: 10, fontSize: 20, fontFamily: 'serif' }}>Wallet Net Balance: </Text>
                                                    <View>


                                                        <View >


                                                            <View>
                                                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, fontFamily: 'system-ui' }}>Enter Funding Amount:</Text>
                                                                <TextInput style={styles.input} value={add} type='number'
                                                                    placeholder='Enter the Number '
                                                                    onChangeText={number => setAdd(number)} />
                                                            </View>
                                                            <View style={styles.touch}>
                                                                <TouchableOpacity>
                                                                    <Pressable
                                                                        onPress={() => setModal(!modal)}>
                                                                        <Text style={styles.textStyle}>Close</Text>
                                                                    </Pressable>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity>

                                                                    <Pressable
                                                                        onPress={Invoice}>
                                                                        <Text style={styles.textStyle1}>Add Funding</Text>
                                                                    </Pressable>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>

                                                </View>
                                            </View>
                                        </Modal>

                                    </View>


                                </View>


                           


                        </>
                    )}
               
                <View style={{ flex: 3, marginVertical: 20, backgroundColor: 'white', height: 40 }} >
                    <Text style={{ textAlign: 'center', paddingTop: 10, fontFamily: 'Georgia' }}>Copyright @ 2021-2022<Text style={{ color: 'blue' }}>UpCap.</Text>All right Reserved.</Text>

                </View>
            </ScrollView>
        </View>


        // <View>
        //     <Text>Invest</Text>
        // </View>
    )
}
export default InvoiceMangement;


const styles = StyleSheet.create({
    view1: {
        flex:2,
        margin: 20,
        paddingBottom: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 3

    },
    title: {
        backgroundColor: COLORS.green,
        alignItems: 'center'
    },
    // text1: {
    //     color: 'white',
    //     fontSize: SIZES.h1,
    //     fontWeight: FONTWIEGHT.weight100,

    // },
    input: {
        borderWidth: 1,
        borderColor: 'grey'
    },
    bol: {
        fontFamily: FONTWIEGHT.bold,
        color: COLORS.black,
        fontSize: SIZES.h3
    },
    btn1: {
        borderRadius: 1,
        borderColor: COLORS.green,

    },
    text0: { paddingTop: 20, paddingHorizontal: 20, fontWeight: FONTWIEGHT.bold, fontSize: SIZES.h1, },
    text: {
        fontFamily: 'system-ui',
        fontSize: 16,

    },
    text1: {
        fontFamily: 'system-ui',
        fontSize: 16,
        marginHorizontal: 10

    },
    touchable1: {
        borderWidth: 1, borderColor: 'green',
        width: 320, height: 40, alignItems: 'center',

    },
    text3: { color: 'green', paddingTop: 7, },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: 350,

        shadowColor: '#000',
        shadowOffset: {
            width: 50,
            height: 2,
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
    },
    textStyle: {
        fontSize: 17,
        color: 'black',
        backgroundColor: 'orange',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        paddingVertical: 17,
        borderRadius: 5

    },
    textStyle1: {
        fontSize: 17,
        fontFamily: "sans-serif",
        backgroundColor: COLORS.green,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 14,
        marginTop: 20,
        paddingVertical: 17,
        borderRadius: 5

    },
    modalText: {
        fontFamily: ' sans',
        color: 'black',
        textAlign: 'left',
        marginBottom: 15,
        fontSize: 25,

    },
    touch: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between'
    },

})

const Seperator = () => <View style={{
    height: 1,
    width: '100%',
    color: 'black',
    backgroundColor: 'black',

}} />
