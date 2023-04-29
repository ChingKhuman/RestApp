import React, { useContext, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { BASE_URL } from "../constants/Config";
import { Card } from "react-native-paper";

const RegisterScreen = ({ navigation }) => {

  const [loading, setLoading] = useState(false)
  const [register, setRegister] = useState([])
  const [role, setRole] = useState([])



  var raw = "";
  var requestOptions = {
    method: 'GET',
    body: raw,
    redirect: 'follow'
  };

  // const getDataRole = () => {
  //   setLoading(true)
  //   fetch(`${BASE_URL}/config/get-role`, requestOptions)
  //     .then(function (response) {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error('Something went wrong.')

  //     }).
  //     then(function (myJson) {
  //       let result = myJson.data
  //       setRole(result)
  //       // console.log('check...result..', result)
  //       setLoading(false)

  //     })
  //     .catch(function (error) {
  //       console.warn('Request failed', error)
  //       setLoading(false)
  //     })

  // }

  // useEffect(() => {
  //   getDataRole()
  // }, [])


  const roleIDInvestor = role[1]
  // console.log('check role',roleID)
  const roleIDEnterprise = role[0]
  // console.log('check', roleIDVendor)

  const roleIDVendor  = role[3]
  // console.log('check', roleIDVendor)
  const roleInsInvestor = role[2]

  return (



    <SafeAreaView >

      

         <View style={{flexDirection: 'row',justifyContent: 'space-around',  marginTop:60, paddingRight: 60
        }}>
        
        
          <TouchableOpacity onPress={() => navigation.navigate('Investor')}>
        <Card style={{width: '140%', height: '50%' , backgroundColor: 'green'}}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Text style={{textAlign: 'center', paddingTop: 50, fontSize: 20}}>Investor</Text>
          </Card.Content>
          </Card>
        </TouchableOpacity>   
               


          
          <><TouchableOpacity onPress={()=> navigation.navigate('Vendor')
            
          }>
            
              <Card style={{ width: '130%', height: '50%', backgroundColor: 'orange' }}>
                <Card.Content style={{ alignItems: 'center' }}>
                  <Text style={{ textAlign: 'center', paddingTop: 50, fontSize: 20 }}>Vendor</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity></>

         </View>
      
        
   <View style={{flexDirection: 'row',justifyContent: 'space-around',  marginTop:10, paddingRight: 60
       }}>
         {/* {roleIDEnterprise &&  */}
         <TouchableOpacity onPress={()=> navigation.navigate('Enterprise')
            
          }>
          <Card style={{width: '120%', height: '50%', backgroundColor: 'grey'}}>
            <Card.Content style={{ alignItems: 'center' }}>
              <Text style={{textAlign: 'center', paddingTop: 50, fontSize: 20}}>Enterprise</Text>
            </Card.Content>
            </Card>
          </TouchableOpacity>
         {/* }
         */}
     
         <TouchableOpacity onPress={()=>  navigation.navigate('InstituteInvestor')
            
          }>
          <Card style={{width: '120%', height: '50%', backgroundColor: 'green'}}>
            <Card.Content style={{ alignItems: 'center' }}>
              <Text style={{textAlign: 'center', paddingTop: 50, fontSize: 20}}>InsInvestor</Text>
            </Card.Content>
            </Card>
          </TouchableOpacity>

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


    </SafeAreaView>

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
  LogContainer: {
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
  img: {
    width: 300,
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
    color: 'white',
    fontSize: 20,
  },


});

export default RegisterScreen;