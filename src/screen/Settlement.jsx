import React, { useState, useContext, useEffect } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { BASE_URL } from '../constants/Config';
import { SIZES } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay/lib";



const Settlement = ({ navigation }) => {



  const [settle, setSettle] = useState()
  const [error, setError] = useState()
  const { loading, userInfo } = useContext(AuthContext);
  // console.log(userInfo)
  const token = userInfo.data?.accessToken
  var myHeaders = new Headers();
  myHeaders.append("Authorization", token);

  var raw = "";

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const getData = () => {
    // loading(true);
    fetch(`${BASE_URL}/transaction/investor-transaction`, requestOptions)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong.')

      }).
      then(function (myJson) {
        let result = myJson
        //  console.log("cehdkjdlkfjdlfkjdlfkjdfldkjf", result)
        setSettle(result)

      })
      .catch(function (error) {
        console.warn('Request failed', error)
      })

  }

  useEffect(() => {
    getData()
  }, [])



  return (


    <>
      <View>
        <Text style={{ fontSize: SIZES.h2, padding: 7 }}> Settlement</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: SIZES.h4, padding: 7, color: 'orange' }}> Home /</Text>
          <Text style={{ fontSize: SIZES.h4, padding: 7 }}>Settlements</Text>
        </View>
      </View>
      <Spinner visible={loading} />

      {settle?.code === 500 ? Alert.alert('You have not funded an invoice yet, or the invoices you funded are not yet settled.') : (
        <ScrollView>
           <View style={styles.container}>
              <View style={styles.header}>
                <View style={{ width: '18%' }}>
                  <Text style={[styles.text, { height: 30, fontSize: 15 }]}>Invoice</Text>
                </View>
                <View style={{ width: '18%' }}>
                  <Text style={[styles.text, { height: 30, fontSize: 15 }]}>Type</Text>
                </View>
                <View style={{ width: '18%' }}>
                  <Text style={[styles.text, { height: 30, fontSize: 15 }]}>
                    Amount
                  </Text>
                </View>
                <View style={{ width: '18%' }}>
                  <Text style={[styles.text, { height: 30, fontSize: 15 }]}>
                    Status
                  </Text>
                </View>
                <View style={{ width: '18%' }}>
                  <Text style={[styles.text, { height: 30, fontSize: 15 }]}>
                    Date
                  </Text>
                </View>
              </View>

              </View>
        </ScrollView>
      )

      }

      
    </>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', padding: 10
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 25,
    backgroundColor: '#273A67'

  },
  text: {
    color: 'black',
    fontFamily: 'serif',
    fontWeight: 'bold'

  },
  content: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    marginTop: 8
  }
 
});



export default Settlement;