import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Modal, StyleSheet, Alert, FlatList, SectionList } from 'react-native';
import { BASE_URL } from '../constants/Config';
import { FONTWIEGHT, SIZES } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';

const Tds = () => {



  const [tds, setTds] = useState()
  const [tdsData, setTdsData] = useState([])
  const [loading, setLaoding] = useState(false)
  const [current, setCurrent ] = useState(1)


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
        return response.json()
        // if (response.ok) {
        //   return response.json();
        // }
        // throw new Error('Something went wrong.')

      }).
      then(function (myJson) {
        let result = myJson

        setTds(result)
        setLaoding(false)

      })
      .catch(function (error) {
        console.warn('Request failed', error)
        setLaoding(false)
      })

  }

  useEffect(() => {
    getData()
  }, [])

  const getData1 = () => {
    setLaoding(true)
    fetch(`${BASE_URL}/transaction/investor-tds-transaction`, requestOptions)
      .then(function (response) {
        // return response.json()
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong.')

      }).
      then(function (myJson) {
        let result1 = myJson?.data
        //  console.log('check transaction....', result1)
        setTdsData(result1)
        setLaoding(false)

      })
      .catch(function (error) {
        console.warn('Request failed', error)
        setLaoding(false)
      })

  }

  useEffect(() => {
    getData1()
  }, [current])


  const loadMoreItem =() => {
  setCurrent(current + 1 )
  }

  return (

    <>
      <ScrollView>
        <View >
          <Text style={{ fontSize: SIZES.h2, padding: 7 }}> TDS Transactions</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: SIZES.h4, padding: 7, color: 'orange' }}> Home /</Text>
            <Text style={{ fontSize: SIZES.h4, padding: 7 }}>TDS Transactions</Text>
          </View>
        </View>
        <Spinner visible={loading} />
        {tds?.code === 500 ? Alert.alert('There is no TDS record right now') : (
          <>
          
              {tdsData.map((item, index) => 
                <View key={index}>
                 
                <Card >
                  <Card.Content>
                  {/* <IconAnt name="wallet" size={50} color= 'green' /> */}
                 
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Invoice: {item.invoiceRefID}</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Counter{item.counterParty}</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Amount{item.transactionAmount}</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Date: {item.transactionDate}</Text>
                  </Card.Content>
                </Card>
                </View>
              )}
              {/* {tdsData?.map((item, index) =>
                <>
                  <View style={styles.content} key={index}>
                    <View style={{ width: '25%' }}>

                      <Text style={[styles.text, { height: 50, color: 'black', fontSize: 17 }]}>{item.invoiceRefID}</Text>
                    </View>
                    <View style={{ width: '25%' }}>
                      <Text style={[styles.text1, { height: 30, fontSize: 14 }]}>{item.counterParty}</Text>
                    </View>
                    <View style={{ width: '25%' }}>
                      <Text style={[styles.text, { height: 30, fontSize: 17 }]}>{item.transactionAmount}</Text>
                    </View>
                    <View style={{ width: '25%' }}>
                      <Text style={[styles.text, { height: 30, fontSize: 17 }]}>{item.transactionDate}</Text>
                    </View>

                  </View></>)} */}
             
           
          </>
        )
        }

        <View>
        </View>
        <View style={{ marginVertical: 20, backgroundColor: 'white', height: 40 }} >
              <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', paddingTop: 10, fontFamily: 'Georgia' }}>Copyright @ 2021-2022<Text style={{ color: 'blue' }}>UpCap.</Text>All right Reserved.</Text>

            </View>
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
 
    // backgroundColor: 'white', padding: 10
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
    height: '20%',
    flexDirection: 'row',
    padding: 10,
    marginTop: 8,
    backgroundColor:'grey'
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center'
  }


});
export default Tds;