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
import {Formik} from 'formik'
import * as yup from 'yup'
import { BASE_URL } from "../constants/Config";
import { user_login } from "../components/User";




const LoginScreen = ({ navigation }) => {


  const [userEmail, setUserEmail] = useState('');
  const [userPasswd, setUserPasswd] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);


  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setUserEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    // const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    // if (!isContainsUppercase.test(value)) {
    //   return 'Password must have at least one Uppercase Character.';
    // }

    // const isContainsLowercase = /^(?=.*[a-z]).*$/;
    // if (!isContainsLowercase.test(value)) {
    //   return 'Password must have at least one Lowercase Character.';
    // }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }
    return null;
  }

  

  const handleLogin = () => {
    const checkPassowrd = checkPasswordValidity(userPasswd);
    if (!checkPassowrd) {
      user_login({
        userEmail: userEmail,
        userPasswd: userPasswd,
      })
        .then(result => {
          console.log('checkresponse',result)
       
             let userInfo = result
             AsyncStorage.setItem('AccessToken', result.data.token);
            
             navigation.replace('HomeScreen');
          
        })
        .catch(err => {
          console.error(err);
        });
    }
  };


 

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={userEmail}
          onChangeText={text => handleCheckEmail(text)}
        />
      </View>
      {checkValidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={userPasswd}
          secureTextEntry={seePassword}
          onChangeText={text => setUserPasswd(text)}
        />
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}>
          {/* <Image source={seePassword ? Eye : EyeActive} style={styles.icon} /> */}
        </TouchableOpacity>
      </View>
      {userEmail == '' || userPasswd == '' || checkValidEmail == true ? (
        <TouchableOpacity
          disabled
          style={styles.buttonDisable}
          onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      )}
    </View>

)
}

      {/* <ScrollView>
        <View style={styles.sectionContainer}>
          <Image style={styles.img} source={require('../../assets/platform.png')} />
          <Spinner visible={loading} />


          <View style={styles.LogContainer}>

            <TextInput style={styles.input} value={userEmail}
              placeholder='Enter email'
              onChangeText={text => setUserEmail(text)} />

            <TextInput style={styles.input} value={userPasswd}
              placeholder='Enter password'
              onChangeText={text => setUserPasswd(text)}
            //  secureTextEntry
            />
          </View>
          <TouchableOpacity>
            <Button style={styles.btn} title=' CLICK LOGIN'
              onPress={() => {
                login(
                  userEmail, userPasswd)
              }} />
          </TouchableOpacity>

        </View>
        <View style={styles.containerRes}>
          <Text style={{ color: 'black' }}>Forgot Password </Text>
          <TouchableOpacity  >


            <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Register')}>Register</Text>
          </TouchableOpacity>


        </View>
      </ScrollView> */}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  wrapperInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '100%',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 24,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 25,
  },
  buttonDisable: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },

});

export default LoginScreen;