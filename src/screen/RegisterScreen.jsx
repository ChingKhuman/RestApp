import React, {useContext, useState} from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";

const RegisterScreen = ({navigation}) => {

  const [name, setName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {register,loading }= useContext(AuthContext);

        return (
         <ScrollView>
             <SafeAreaView>
            <View style={styles.sectionContainer}>
              <Spinner visible={loading}/>
              <Image style={styles.img} source={require('../../assets/platform.png')} />
   
            <Text style= {styles.text1}>Please click on the profile that best 
            describes you -</Text>
<View >
<View style={styles.box}>
<Text style={styles.text2}>Individual Investor</Text>
<Text style={styles.text3}>An Individual who wants to Invest in Invoices</Text>
<Text style={styles.text4}> Continue</Text>
            </View>

            
</View>
       
            
            
           {/* <View style={styles.LogContainer}>

           <TextInput  style={styles.input}
           value={name}
                  placeholder="FullName" 
                  onChangeText={text => setName(text)}/>
                <TextInput  
                value={mobile}           
                  style={styles.input}                  
                  placeholder="Mobile"
                  onChangeText={text => setMobile(text)}
                />

           <TextInput  style={styles.input}
                 value={email}
                 placeholder='Enter email'
                 onChangeText={text => setEmail(text)} />
                <TextInput
                style={styles.input}
                value={password}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={text => setPassword(text)}
                />
           </View> 
           <TouchableOpacity>
           <Button style={styles.btn} title='Register'
           onPress={()=> {register(name, email, password)}}/>
           </TouchableOpacity>
           
          </View>
          <View style={styles.containerRes}>
            <Text>Already have an account.  </Text>
            <TouchableOpacity  onPress={()=> navigation.navigate('Login')}>
                    <Text style={{color: 'blue'}}>Login</Text>
                    </TouchableOpacity>
           
            */}
          </View>
        
           
            </SafeAreaView>
         </ScrollView>
        )
    
}
const styles = StyleSheet.create({
    sectionContainer: {
      alignItems: 'center',
      marginTop: 80
    },
    text1: {
      paddingTop: 50,
      marginHorizontal: 5,
  fontSize: 20,
  fontFamily: 'Normal'
    },
    input: {
      height: 50,
      width: 290,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    LogContainer:{
      paddingVertical: 50
    },
    btn: {
      color: 'red',
      width: 50,
    },
    containerRes: {
        flexDirection: 'row',
      justifyContent: "center",
      marginTop: 30,
      alignItems: "center"
    },
    img: { width: 300,
      height: 150
    },
    box: {
      backgroundColor: 'green',
      height: 160,
      width: '90%',
    alignItems: "center",
    
    
    },
    text2: {
      color: 'white',
      fontSize: 30,
    },
    text3: {
      color: 'white',
      fontSize: 10,
      paddingBottom: 60
    },
    text4: {
      color:'white',
      fontSize: 20,
    },
   
  
  });

export default RegisterScreen;