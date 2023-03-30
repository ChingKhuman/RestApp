import React, {useState, useContext, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { BASE_URL } from '../Config';
import { FONTWIEGHT, SIZES } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
 
const Notification = () => {

        const [notification, setNotification] = useState()
    const { loading, userInfo } = useContext(AuthContext);
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
      fetch(`${BASE_URL}/transaction/investor-tds-transaction`, requestOptions)
          .then(function (response) {
            if(response.ok){
              return response.json();
            }
            throw new Error('Something went wrong.')
              
          }).
          then(function (myJson) {
            let result = myJson 
  
            setNotification(result)
             console.log('Request Successfull.....',result)
          })  
          .catch(function(error) {
            console.warn('Request failed', error)
          })      
  
  }
  
  useEffect(() => {
      getData()
  }, [])
    
    return (
        <View>
               {notification?.code === 500? ( <>
       <View style={{alignItems: 'center', paddingVertical:300}}>
        <Text style={{fontFamily:'serif', color: 'black'}}>There is Nothing Notification</Text>
       </View>
       </>
       ) : (
        <>
         <View>
       <Text style={{fontSize:SIZES.h2,padding: 7}}> Historical Notifications</Text>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize:SIZES.h4,padding: 7, color: 'orange'}}> Home /</Text>
       <Text style={{fontSize:SIZES.h4,padding: 7}}>Notifications</Text>
      </View>
       </View>
       <View>
       <View style={{alignItems:'center', paddingVertical:10}}>
        <Text>Show</Text>
        <Text>
Search: 
        </Text>
        </View>
      <View style={{flexDirection:'row', paddingHorizontal: 10,
    justifyContent:'space-around'}}>
        <Text style={styles.text1}>
            SL No.
        </Text>
        <Text  style={styles.text1}>Message</Text>
        <Text  style={styles.text1}> Date</Text>
      </View>
       </View>
        </>
       )
       
       }
          

        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        fontFamily: FONTWIEGHT.bold
    }
})

export default Notification;