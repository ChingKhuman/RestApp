import React, { useState, useContext , useEffect} from 'react';
import {Modal, Pressable, StyleSheet, Text,View, Alert} from 'react-native';
import { BASE_URL } from '../constants/Config';
import { SIZES } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';



const Settlement = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);

  const [settle, setSettle] = useState()
  const [error, setError] = useState()
  const { loading, userInfo } = useContext(AuthContext);
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
    fetch(`${BASE_URL}/transaction/investor-tds-transaction`, requestOptions)
        .then(function (response) {
          if(response.ok){
            return response.json();
          }
          throw new Error('Something went wrong.')
            
        }).
        then(function (myJson) {
          let result = myJson 
          setSettle(result)
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
<View>
 <Text style={{fontSize:SIZES.h2,padding: 7}}> Settlement</Text>
<View style={{flexDirection: 'row'}}>
<Text style={{fontSize:SIZES.h4,padding: 7, color: 'orange'}}> Home /</Text>
 <Text style={{fontSize:SIZES.h4,padding: 7}}>Settlements</Text>
</View>
 </View>
  
       {settle?.code === 500? ( <>
       <View style={{alignItems: 'center', paddingVertical:300}}>
        <Text style={{fontFamily:'serif', color: 'black'}}>No Data Found</Text>
       </View>
       </>
       ) : (
        <>
      <Text>All Settlement</Text>
        </>
       )
       
       }
 
 {/* <>
      <Modal
 animationType="slide"
 transparent={true}
 visible={setModalVisible}
 onRequestClose={() => {
   Alert.alert('Modal has been closed.');
   setModalVisible(!modalVisible);
 }}>
 <View style={styles.centeredView}>
   <View style={styles.modalView}>
     <Text style={styles.modalText}>You have not funded an invoice yet,
     or the invoices you funded are not yet settled.</Text>
     <Pressable
       style={[styles.button, styles.buttonClose]}
       onPress={() => setModalVisible(!modalVisible)}>
       <Text style={styles.textStyle}>OK</Text>
     </Pressable>
   </View>
 </View>
</Modal>
{/* <Pressable
 style={[styles.button, styles.buttonOpen]}
 onPress={() => setModalVisible(true)}>
 <Text style={styles.textStyle}>Show Modal</Text>
</Pressable> */}
     
      </View>
       

     );
    };

    const styles = StyleSheet.create({
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    });
    
   

    export default Settlement;