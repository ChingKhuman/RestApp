import * as React from 'react';
import { StyleSheet, Button, Text, View, ScrollView, Dimensions, SafeAreaView, RefreshControl, TouchableOpacity } from 'react-native';

import { BASE_URL } from '../constants/Config';
import { AuthContext } from '../context/AuthContext';
//  import { PieChart } from 'react-native-chart-kit';

import Spinner from "react-native-loading-spinner-overlay/lib";
import PieChart from 'react-native-pie-chart';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Card } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconTransaction from 'react-native-vector-icons/MaterialCommunityIcons'
import Pie from 'react-native-pie'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';



// import PieChart from 'react-native-chart-kit';
// import { BarChart, PieChart } from "react-native-gifted-charts";


const Dashboard = ({ navigation }) => {


 
  const [pieCount, setPieCount] = React.useState([0, 0, 0, 0]);
  const [pieAmount, setPieAmount] = React.useState([0, 0, 0, 0])
  const [yieVal, setYieVal] = React.useState('')
  const [loading, setLaoding] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [red, setRed] = useState("")
  const [green, setGreen] = useState("")
  const [white, setWite] = useState("")
  const [blue, setBlue] = useState("")

 


  const screenWidth = Dimensions.get('window').width;

  const { userInfo } = React.useContext(AuthContext);
  // // console.log(userInfo)
  const token = userInfo.data?.accessToken;
  // console.log('token....', token);

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
    fetch(`${BASE_URL}/dashboard/dashboardsummary`, requestOptions)
      .then(function (response) {
        return response.json();
      }).
      then(function (myJson) {
        let cont = myJson?.data.count;
          // console.log('check the data...', cont)
        setPieCount(cont);
        setLaoding(false)

      }).catch(function (error) {
        console.log(error)
        setLaoding(false)
      })

  }
  React.useEffect(() => {
    getData()
  }, []);

  const getData1 = () => {
    fetch(`${BASE_URL}/dashboard/dashboardsummary`, requestOptions)
      .then(function (response) {
        return response.json();
      }).
      then(function (myJson) {
        let cont = myJson?.data.amount;
          // console.log('check the data...', cont)
        
        setPieAmount(cont);

      }).catch(function (error) {
        console.log(error)
      })

  }
  React.useEffect(() => {
    getData1()
  }, []);

  const getDataYield = () => {
    fetch(`${BASE_URL}/dashboard/dashboardsummary`, requestOptions)
      .then(function (response) {
        return response.json();
      }).
      then(function (myJson) {
        let Yield = myJson?.data.yield;
        // console.log('check the data...', Yield)
        setYieVal(Yield);

      }).catch(function (error) {
        console.log(error)
      })

  }
  React.useEffect(() => {
    getDataYield()
  }, []);



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  const widthAndHeight = 200
  const series1 = pieCount.map(item =>
   item.allOfferCount  
)
// var countArray =[];
// length = series1.length;
// for(var i = 0; i < length; i++)
// countArray.push(parseInt(series1[i]));
// var countArray = series1.map(Number)

 var countArray = [];
series1.forEach( ele => countArray.push(+ele))
console.log(countArray)
 
  const sliceColor = ['green', 'blue', 'white', '#92CDE2']

  const widthAndHeight1 = 180
  const SeriesA = pieAmount.map(i =>
    i.totalOfferedAmount
  )
  var numberArray = SeriesA.map(Number);
  // console.log(numberArray)

  // var numberArray = [];
  // length = SeriesA.length;
  // for (var i = 0; i < length; i++)
  // numberArray.push(parseInt(SeriesA[i]));
  
  const sliceColor1 = ['red', 'blue', 'green', '#2C5AA2']

  return (

    <>

      <SafeAreaView style={{ flex: 1, backgroundColor: '#05375a' }}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          <View>
            <View>

              <View style={{ flexDirection: 'row', padding: 10,justifyContent:'space-between' }}>
                <Text style={styles.Text1}>Home/ </Text>
                <Text style={{ color: 'white', fontSize: 20 }}></Text>

                <View style={{ justifyContent: 'flex-end', paddingRight:20}}>
                  <Icon name="notifications-on" size={20} color='orange' />
                </View>

              </View>

              <Spinner visible={loading} />



              <>
                <View style={{ flexDirection: 'row', width: windowWidth, justifyContent: 'center' }}>
                  {pieCount.map((item, index) => (
                    <>
 <ScrollView horizontal={true}>
                      <View style={styles.View8} key={index} >
                    
                        <Text style={styles.Text5}>{item.name}: </Text>
                        <Text style={styles.Text7}>  {item.allOfferCount}</Text>
                      </View>
                      </ScrollView>
                    </>
                  ))}

                </View>

                <View >
                  <Text style={styles.Text4}>Offer Counts Details</Text>
                </View>
                <View style={styles.View10}>

                  {/* <PieChart
                    widthAndHeight={widthAndHeight}
                    series={countArray}
                    sliceColor={sliceColor}
                    doughnut={false}
                    coverRadius={0.45}
                    coverFill={'#FFF'} /> */}
                    {/* <Pie
  radius={70}
  //completly filled pie chart with radius 70
  series={[10, 20, 30, 40]}
  //values to show and color sequentially
  colors={['#f00', '#0f0', '#00f', '#ff0']}
/> */}



                </View>
                <View style={styles.View4}>
                  <Text style={styles.Text2}> Total Yield: {yieVal.totalYield}</Text>
                </View>
              </>

              <ScrollView horizontal={true}>
                <View style={{
                  borderTopWidth: 1, borderColor: 'white', paddingVertical: 10,paddingBottom:20,
                  marginVertical: 10,
                  paddingHorizontal: 10
                }}>
                  <Text style={{ color: 'orange' }}>Quick Links</Text>

                  <View style={{
                    flexDirection: 'row',
                    marginTop: 10, marginBottom: 10,
                    paddingHorizontal: 10
                  }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Invoice Management')}>
                      <Card style={{ borderWidth: 1, borderColor: 'black', height: 80, width: 90, 
                      marginHorizontal: 10 }}>
                        <Card.Content style={{alignItems: 'center'}}>
                          <Icon1 name="file-invoice" size={45} color='green' />
                          <Text style={{ paddingVertical: 20, color: 'white' }}>Invoice</Text>

                        </Card.Content>
                      </Card>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Wallet Management')}>
                      <Card style={{ borderWidth: 1, borderColor: 'black', height: 80, width: 90, marginHorizontal: 10 }}>
                      <Card.Content style={{alignItems: 'center'}}>
                          <IconAnt name="wallet" size={50} color='green' />
                          <Text style={{ paddingVertical: 20, color: 'white' }}>Wallet</Text>

                        </Card.Content>
                      </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('My Funding')}>
                      <Card style={{ borderWidth: 1, borderColor: 'black', height: 80, width: 90, marginHorizontal: 10 }}>
                      <Card.Content style={{alignItems: 'center'}}>
                          <IconTransaction name="bank-transfer" size={50} color='green' />
                          <Text style={{ paddingVertical: 20, color: 'white' }}>Funding</Text>

                        </Card.Content>
                      </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Card style={{ borderWidth: 1, borderColor: 'black', height: 80, width: 90, marginHorizontal: 10 }}>
                      <Card.Content style={{alignItems: 'center'}}>
                          <Icon1 name="file-invoice" size={50} color='green' />
                          <Text style={{ paddingVertical: 20, color: 'white' }}>Others</Text>

                        </Card.Content>
                      </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Card style={{ borderWidth: 1, borderColor: 'black', marginHorizontal: 10, height: 80, width: 90 }}>
                      <Card.Content style={{alignItems: 'center'}}>
                          <Icon1 name="file-invoice" size={50} color='green' />
                          <Text style={{ paddingVertical: 20, color: 'white' }}>Others</Text>

                        </Card.Content>
                      </Card>
                    </TouchableOpacity>

                  </View>
                </View>

              </ScrollView>

              <View style={styles.View9}>
                <Text style={styles.Text6}>Offer Amount Details</Text>


              </View>


              <><View style={styles.View13}>


               {/* <PieChart
                  widthAndHeight={widthAndHeight1}
                  series={numberArray}
                  sliceColor={sliceColor1}
                  doughnut={true}
                  coverRadius={0.45}
                  coverFill={'#FFF'} />  */}

</View></>

              {pieAmount.map((item, index) =>


                <View style={styles.View8} key={index.id}>
                  <Text style={styles.Text5} key={index}>{item.name}:</Text>
                  <Text style={styles.Text7} > {item.totalOfferedAmount}</Text>
                </View>





              )}


            </View>
            <View style={styles.View12}>
              <Text></Text>
            </View>

            <View style={{ marginVertical: 20, backgroundColor: 'white', height: 40 }} >
              <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', paddingTop: 10, fontFamily: 'Georgia' }}>Copyright @ 2021-2022<Text style={{ color: 'blue' }}>UpCap.</Text>All right Reserved.</Text>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>


  )
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },

  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 22,
  },
  img: {
    width: 300,
    height: 150
  },
  btns: {
    paddingVertical: 50

  },
  View1: {
    paddingHorizontal: 10, paddingTop: 20
  },
  View2: { margin: 10, paddingTop: 17, },
  View3: { borderWidth: 1, borderRadius: 2, borderColor: 'white' },
  View4: { borderRadius: 2, borderColor: 'white', paddingTop: 15, alignItems: 'center' },
  View5: { alignItems: 'center' },
  View6: { borderWidth: 1, borderColor: 'white' },
  View7: { borderWidth: .7, borderColor: 'white', marginHorizontal: 15 },
  View8: {
    paddingLeft: 10, justifyContent: 'center', flexDirection: 'row',
    paddingTop: 15



  },
  View9: { marginTop: 30, borderTopWidth: 1, borderColor: "green" },
  View10: {
    alignItems: 'center', paddingTop: 10, paddingLeft: 20, justifyContent: 'center'

  },
  View13: {
    alignItems: 'center', paddingTop: 20
  },

  View12: { padding: 20 },
  Text1: { color: 'orange', fontSize: 20, paddingHorizontal: 8, },
  Text2: { marginTop: 8, color: 'white' },
  Text3: { padding: 10, textAlign: 'center', color: 'white' },
  Text4: { padding: 10, textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'serif' },

  Text5: { textAlign: 'center', color: 'white', fontSize: 15 },
  Text7: { flexDirection: 'row', color: 'white', textAlign: 'center' },
  Text6: { padding: 10, textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'serif' },

});

export default Dashboard;

