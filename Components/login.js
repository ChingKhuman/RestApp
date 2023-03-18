import React, { useContext, useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../src/context/AuthContext";

const Login = (navigation) => {

    const [userEmail, setUserEmail] = useState(null);
    const [userPasswd, setUserPasswd] = useState(null);
    const {loading, login} = useContext(AuthContext)
    return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TextInput style={styles.input} value={userEmail}
             placeholder='Enter email'
             onChangeText={text => setUserEmail(text)}/>
            <TextInput style={styles.input} value={userPasswd}
             placeholder='Enter password'
             onChangeText={text=> setUserPasswd(text)}/>
             
            <Button title='Login' onPress={() => {login(
        userEmail,userPasswd)}}/>

            <View style={{flexDirection: 'row', marginTop:20}}>
                <Text> Dont have an account</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                <Text>Register</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      alignItems: 'center',
      marginTop: 150
    },
    text1: {
  fontSize: 30,
  fontFamily: 'Arial'
    },
    input: {
      height: 40,
      width: 250,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  
  });

export default Login;