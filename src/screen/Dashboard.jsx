import React, { useContext, useEffect, useState, } from 'react';
import { StyleSheet, Button, Text, View, ScrollView, Dimensions, SafeAreaView } from
  'react-native';

import { BASE_URL } from '../constants/Config';
import { AuthContext } from '../context/AuthContext';
import PieChart from 'react-native-pie-chart';


const Dashboard = () => {

  // const [pieData, setPieData ] = useState();
  // const [count, setCount] = useState([]);
  const [pieCount, setPieCount] = useState([0, 0, 0, 0]);
  const [pieAmount, setPieAmount] = useState([0, 0, 0, 0])



  const screenWidth = Dimensions.get('window').width;

  const { loading, userInfo } = useContext(AuthContext);
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
    fetch(`${BASE_URL}/dashboard/dashboardsummary`, requestOptions)
      .then(function (response) {
        return response.json();
      }).
      then(function (myJson) {
        let cont = myJson?.data.count;
        // console.log('check the data...', cont)
        setPieCount(cont);

      }).catch(function (error) {
        console.log(error)
      })

  }
  useEffect(() => {
    getData()
  }, []);

  const getData1 = () => {
    fetch(`${BASE_URL}/dashboard/dashboardsummary`, requestOptions)
      .then(function (response) {
        return response.json();
      }).
      then(function (myJson) {
        let cont = myJson?.data.amount;
         console.log('check the data...', cont)
        setPieAmount(cont);

      }).catch(function (error) {
        console.log(error)
      })

  }
  useEffect(() => {
    getData1()
  }, []);


  const widthAndHeight = 200

  const series1 = pieCount.map(index => <><View style={{ flexDirection: 'row' }}>
    <Text>{index.allOfferCount}</Text>
   
  </View>
  </>)
  const series = Object.keys(series1);
  const sliceColor = ['red', 'blue', 'green', '#92CDE2']


  const widthAndHeight1 = 180
  const SeriesA = pieAmount.map(i => <View style={{ flexDirection: 'row' }}>
    
    <Text>{i.totalOfferedAmount}</Text>
    
  </View>)

  const seriesA = Object.keys(SeriesA)
  const sliceColor1 = ['red', 'blue', 'green', '#2C5AA2']


  return (

    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
    <View>
        <View style={styles.View1}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.Text1}>Home/ </Text>
                <Text>Dashboard</Text>

            </View>
        </View>

        <View style={styles.View2}>
            <View style={styles.View3}>
                <Text> Yield</Text>
            </View>

            <View style={styles.View4}>
                <Text style={styles.Text2}> Total Yield: </Text>
            </View>
        </View>

        <View style={styles.View5}>
        </View>
       



        <View style={styles.View7}>
            <Text style={styles.Text4}>Offer Counts Details</Text>

        </View>
      {pieCount.map((item, index) =>
          <><View style={styles.View11} key={index}>
            
            <View style={styles.View8} >
                <Text style={styles.Text5}>{item.name}:</Text>
               
                <Text style={styles.Text7}> {item.allOfferCount}</Text>
            </View>
          </View>

</>
             
             )}

    
        <><View style={styles.View10}>
            
        <PieChart
             widthAndHeight={widthAndHeight}
             series={series}
             sliceColor={sliceColor} 
             doughnut={true}
    coverRadius={0.45}
    coverFill={'#FFF'}/></View></>      

<View style={styles.View9}>
            <Text style={styles.Text6}>Offer Amount Details</Text>


        </View>
      
        {pieAmount.map((item, index) =>
          <><View style={styles.View11} key={index.id}>
            
            <View style={styles.View8} >
                <Text style={styles.Text5}>{item.name}:</Text>
               
                <Text style={styles.Text7}> {item.totalOfferedAmount}</Text>
            </View>
          </View>

</>
              
             )}

<><View style={styles.View13}>
      
            
        <PieChart
             widthAndHeight={widthAndHeight1}
             series={seriesA}
             sliceColor={sliceColor1}
             doughnut={true}
    coverRadius={0.45}
    coverFill={'#FFF'} /></View></>  

    </View>
    <View style={styles.View12}>
        <Text></Text>
    </View>

    <View style={{marginVertical: 20, backgroundColor:'white', height: 40}} >
               <Text style={{textAlign:'center',paddingTop:10, fontFamily:'Georgia'}}>Copyright @ 2021-2022<Text style={{color:'blue'}}>UpCap.</Text>All right Reserved.</Text>

               </View>
    </ScrollView>
</SafeAreaView>
 

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
  View2: { margin: 10, paddingTop: 30 },
  View3: { borderWidth: 1, borderRadius: 2, borderColor: 'grey' },
  View4: { borderWidth: 1, borderRadius: 2, borderColor: 'grey', height: 50, alignItems: 'center' },
  View5: { alignItems: 'center' },
  View6: { borderWidth: 1, borderColor: 'grey' },
  View7: { borderWidth: 1, borderColor: 'grey' },
  View8: {  alignItems: 'flex-end',flexDirection: 'row',
paddingHorizontal: 10 , marginRight: 10},
  View9: { borderWidth: 1, borderColor: 'grey', marginTop: 120 },
  View10: {alignItems: 'flex-start', paddingHorizontal: 10, position:'absolute', marginVertical: 225},
  View13: {alignItems: 'flex-start', paddingHorizontal: 10,position:'absolute', marginVertical: '150%' },  
  View11: {alignItems: 'flex-end', padding: 10, paddingTop: 15,marginBottom: 0},
  View12: {padding: 20},
  Text1: { color: 'orange', fontSize: 15, paddingHorizontal: 8 },
  Text2: { color: 'black', marginVertical: 8 },
  Text3: { padding: 10, textAlign: 'center' },
  Text4: { padding: 10, textAlign: 'center' },
  Text5:{ textAlign: 'center' },
  Text7: {color: 'black'},
  Text6: { padding: 10, textAlign: 'center' },

});

export default Dashboard;