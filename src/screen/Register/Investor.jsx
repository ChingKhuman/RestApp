import { View, Text, ScrollView, Image, Button,SafeAreaView,TextInput,TouchableOpacity,StyleSheet, } from 'react-native'
import React, {useContext,useState} from 'react'

import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../../context/AuthContext'
import { Picker } from '@react-native-picker/picker'
import { useRef } from 'react'

const Investor = ({ navigation }) => {

    const [loading, setLoading] = useState(false)
    const [userFName, setUserFName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userMobile, setUserMobile] = useState('')
    const [userPasswd, setUserPasswd] = useState('')
    const [userRole, setUserRole] = useState('')
    const [tan, setTan] = useState('')
    const [referralCode, setReferralCode] = useState('')
    const [aadharYesNo, setAdharYesNo] = useState()
    const [fieldName, setFieldName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [mandatory, setMandatory] = useState('')
    const [dataType, setDataType] = useState('')
    const [example, setExample] = useState('')


    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
      }
      
      function close() {
        pickerRef.current.blur();
      }


    const { register } = useContext(AuthContext)


    return (
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <Image style={styles.img} source={require('../../../assets/platform.png')} />
                    <Spinner visible={loading} />
                    <View style={styles.LogContainer}>
                        <TextInput style={styles.input}
                            value={userFName} placeholder='FirstName'
                            onChangeText={text => setUserFName(text)} />
                        <TextInput style={styles.input}
                            value={userEmail}
                            placeholder='Enter email'
                            onChangeText={text => setUserEmail(text)}
                        />

                        <TextInput style={styles.input}
                            value={userPasswd}
                            placeholder='Enter password'
                            onChangeText={text => setUserPasswd(text)}
                        //  secureTextEntry
                        />
                        <TextInput style={styles.input}
                            value={userMobile}
                            placeholder='Mobile/ Phone No.'
                            onChangeText={text => setUserMobile(text)}
                        />
                        <TextInput style={styles.input}
                            value={userRole}
                            placeholder='Role'
                            onChangeText={text => setUserRole(text)}
                        />
                        <TextInput style={styles.input}
                            value={tan}
                            placeholder='TAN Number'
                            onChangeText={text => setTan(text)}
                        />
                        <TextInput style={styles.input}
                            value={referralCode}
                            placeholder='Refferal Code'
                            onChangeText={text => setReferralCode(text)}
                        />
                       <Text style={{paddingHorizontal:10, color:'black', paddingTop: 10, }}>AAdhar linked with Mobile </Text>
                        <Picker
                        // ref={pickerRef}
  selectedValue={aadharYesNo}
  style={{ height: 50, width: 150, borderWidth:1,borderColor:'white' }}
  onValueChange={setAdharYesNo}>
    <Picker.Item label='Select' value='Select'/>
  <Picker.Item label="Yes" value='Yes'  />
  <Picker.Item label="No"  value='No'/>
</Picker>
                    </View>
                    <TouchableOpacity>
                        <Button style={styles.btn} title=' SAVE'
                            onPress={() => {
                                register(
                                    userFName, userMobile, userEmail, userPasswd, userRole,
                                    tan, referralCode, aadharYesNo, fieldName,
                                    displayName,mandatory,dataType,example)
                            }} />
                    </TouchableOpacity>

                </View>
                <View style={styles.containerRes}>

                    <TouchableOpacity >


                        <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Register')}>Go Back</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    sectionContainer: {

        alignItems: 'center',
        marginTop: 50
    },

    input: {
        height: 60,
        width: 290,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'black',
    },
    LogContainer: {
        paddingVertical: 50
    },
    btn: {
        color: 'red',
        width: 60,
        height: 30,

    },
    containerRes: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 30,
        alignItems: "center"
    },
    img: {
        width: 300,
        height: 150
    }

});


export default Investor