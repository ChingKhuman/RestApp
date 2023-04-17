import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Modal, StyleSheet, Alert } from 'react-native';
import { BASE_URL } from '../constants/Config';
import { SIZES } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const Tds = () => {



  const [tds, setTds] = useState()
  const [loading, setLaoding] = useState(false)

  const { userInfo } = useContext(AuthContext);
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
    setLaoding(true)
    fetch(`${BASE_URL}/transaction/investor-tds-transaction`, requestOptions)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong.')

      }).
      then(function (myJson) {
        let result = myJson

        setTds(result)
        setLaoding(false)
      })
      .catch(function (error) {
        console.warn('Request failed', error)
        setLaoding(falses)
      })

  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <View>
        <Text style={{ fontSize: SIZES.h2, padding: 7 }}> TDS Transactions</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: SIZES.h4, padding: 7, color: 'orange' }}> Home /</Text>
          <Text style={{ fontSize: SIZES.h4, padding: 7 }}>TDS Transactions</Text>
        </View>
      </View>
      <Spinner visible={loading}/>
      {tds?.code === 500 ? Alert.alert('There is no TDS record right now') : (
        <>
          <Text>All Transaction Here</Text>
        </>
      )

      }


      <View>






      </View>



    </>
  )
}

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
export default Tds;