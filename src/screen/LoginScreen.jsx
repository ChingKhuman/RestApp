import React, { useContext, useState } from "react";
import {  
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    Image,
    ScrollView,
  } from 'react-native';
import Spinner from "react-native-loading-spinner-overlay/lib";
import { AuthContext } from "../context/AuthContext";


  

const LoginScreen = ({navigation}) => {

  const [userEmail, setUserEmail] = useState('');
    const [userPasswd, setUserPasswd] = useState('');
    const {loading, login} = useContext(AuthContext)
    
    return (
        <SafeAreaView style={styles.main}>
          <ScrollView>
        <View style={styles.sectionContainer}>
        <Image style={styles.img} source={require('../../assets/platform.png')} />
        <Spinner visible={loading}/>
        
       
       <View style={styles.LogContainer}>

            <TextInput style={styles.input} value={userEmail}
             placeholder='Enter email'
             onChangeText={text => setUserEmail(text)}/>

            <TextInput style={styles.input} value={userPasswd}
             placeholder='Enter password'
             onChangeText={text=> setUserPasswd(text)}
            //  secureTextEntry
             />
       </View>
       <TouchableOpacity>
       <Button style={styles.btn} title=' CLICK LOGIN'
       onPress={() => {login(
        userEmail,userPasswd)}}/>
       </TouchableOpacity>
      
      </View>
      <View style={styles.containerRes}>
      <Text style={{color: 'black'}}>Forgot Password </Text>
      <TouchableOpacity  >
        
       
                <Text style={{color: 'blue'}} onPress={()=> navigation.navigate('Register')}>Register</Text>
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
    LogContainer:{
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

export default LoginScreen;