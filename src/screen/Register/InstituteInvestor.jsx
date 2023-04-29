import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const InstituteInvestor = ({navigation}) => {

  const [loading, setLoading] = useState(false)
  const [userFName, setUserFName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMobile, setUserMobile] = useState('')
  const [userPasswd, setUserPasswd] = useState('')
  const [company, setCompany] = useState('')
    const [tan, setTan] = useState('')
  const [referralCode, setReferralCode] = useState('')
  return (
    <SafeAreaView style={styles.main}>
    <ScrollView>
      <View style={styles.sectionContainer}>
        {/* <Image style={styles.img} source={require('../../../assets/platform.png')} /> */}
        <Text>Institute Investor</Text>
        <Spinner visible={loading} />
        <View style={styles.LogContainer}>
   
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
                            value={company}
                            placeholder='Company'
                            onChangeText={text => setCompany(text)}
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
        </View>
        <TouchableOpacity>
                        <Button style={styles.btn} title=' SAVE'
                            onPress={() => {
                                register(
                                    userFName, userMobile, userEmail, userPasswd, company,
                                    tan, referralCode)
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
      backgroundColor: 'white'
    },
    sectionContainer: {
  
      alignItems: 'center',
      marginTop: 150
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

export default InstituteInvestor