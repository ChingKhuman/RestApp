import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Modal, StyleSheet, Alert, FlatList } from 'react-native';
import { BASE_URL } from '../constants/Config';
import { FONTWIEGHT, SIZES } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native';

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
        setLaoding(falses)
      })

  }

  useEffect(() => {
    getData()
  }, [])

  const getData1 = () => {
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
        let result1 = myJson?.data
        // console.log('check transaction....', result)
        setTdsData(result1)
        setLaoding(false)

      })
      .catch(function (error) {
        console.warn('Request failed', error)
        setLaoding(falses)
      })

  }

  useEffect(() => {
    getData1()
  }, [current])

  const renderItem=({item}) => {
    return (
      <View style={{padding: 10, borderBottomWidth: 1, borderColor: 'grey'}}>
    

<Text style={[styles.text, { height: 30, color: 'black', fontSize: 17 }]}>InvoiceID: {item.invoiceRefID}</Text>


<Text style={[styles.text, { height: 30, fontSize: 17 }]}>Holder: {item.counterParty}</Text>


<Text style={[styles.text, { height: 30, fontSize: 17 }]}>Amount: {item.transactionAmount}</Text>


<Text style={[styles.text, { height: 30, fontSize: 17 }]}>Date: {item.transactionDate}</Text>

      </View>
    )
  }

  const renderLoader =() => {
    return (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size='large' color='red'/>
      </View>
    )
  }
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
            <View style={styles.container}>
              <FlatList data={tdsData} renderItem={renderItem}
              keyExtractor={item => item.counterParty}
              ListFooterComponent={renderLoader}
              onEndReached={loadMoreItem}
              onEndReachedThreshold={0}/>
              {/* <View style={styles.header}>
                <View style={{ width: '25%' }}>
                  <Text style={[styles.text, { height: 30, fontSize: 17 }]}>InvoiceID</Text>
                </View>
                <View style={{ width: '25%' }}>
                  <Text style={[styles.text, { height: 30, fontSize: 17 }]}>Holder</Text>
                </View>
                <View style={{ width: '25%' }}>
                  <Text style={[styles.text, { height: 30, fontSize: 17 }]}>
                    Amount
                  </Text>
                </View>
                <View style={{ width: '25%' }}>
                  <Text style={[styles.text, { height: 30, fontSize: 17 }]}>
                    Date
                  </Text>
                </View>
                </View> */}
             
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
                  </View>
           
          </>
        )
        }

        <View>
        </View>
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  text1: {
    fontFamily: 'sans',
    color: 'black'
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