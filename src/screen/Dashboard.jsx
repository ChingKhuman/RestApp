// import * as React from 'react';
// import { StyleSheet, Button, Text, View, ScrollView, Dimensions, SafeAreaView, RefreshControl } from 'react-native';

// import { BASE_URL } from '../constants/Config';
// import { AuthContext } from '../context/AuthContext';
// //  import { PieChart } from 'react-native-chart-kit';

// import Spinner from "react-native-loading-spinner-overlay/lib";
// import PieChart from 'react-native-pie-chart';
// import { COLORS } from '../constants/theme';
// // import PieChart from 'react-native-chart-kit';
// // import { BarChart, PieChart } from "react-native-gifted-charts";


// const Dashboard = () => {


//   const [pieCount, setPieCount] = React.useState([0, 0, 0, 0]);
//   const [pieAmount, setPieAmount] = React.useState([0, 0, 0, 0])
//   const [yieVal, setYieVal] = React.useState('')
//   const [loading, setLaoding] = React.useState(false);
//   const [refreshing, setRefreshing] = React.useState(false);



//   const screenWidth = Dimensions.get('window').width;

//   const { userInfo } = React.useContext(AuthContext);
//   // // console.log(userInfo)
//   const token = userInfo.data?.accessToken;
//   console.log('token....', token);

//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", token);

//   var raw = "";

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };


//   const getData = () => {
//     setLaoding(true)
//     fetch(`${BASE_URL}/dashboard/dashboardsummary`, requestOptions)
//       .then(function (response) {
//         return response.json();
//       }).
//       then(function (myJson) {
//         let cont = myJson?.data.count;
//         //  console.log('check the data...', cont)
//         setPieCount(cont);
//         setLaoding(false)

//       }).catch(function (error) {
//         console.log(error)
//         setLaoding(false)
//       })

//   }
//   React.useEffect(() => {
//     getData()
//   }, []);

//   const getData1 = () => {
//     fetch(`${BASE_URL}/dashboard/dashboardsummary`, requestOptions)
//       .then(function (response) {
//         return response.json();
//       }).
//       then(function (myJson) {
//         let cont = myJson?.data.amount;
//         //  console.log('check the data...', cont)
//         setPieAmount(cont);

//       }).catch(function (error) {
//         console.log(error)
//       })

//   }
//   React.useEffect(() => {
//     getData1()
//   }, []);

//   const getDataYield = () => {
//     fetch(`${BASE_URL}/dashboard/dashboardsummary`, requestOptions)
//       .then(function (response) {
//         return response.json();
//       }).
//       then(function (myJson) {
//         let Yield = myJson?.data.yield;
//           // console.log('check the data...', Yield)
//         setYieVal(Yield);

//       }).catch(function (error) {
//         console.log(error)
//       })

//   }
//   React.useEffect(() => {
//     getDataYield()
//   }, []);

 

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   }, []);


//   const widthAndHeight = 220
//   const series1 = pieCount.map((item, index1) => <><View style={{ flexDirection: 'row' }} key={index1}>
//     <Text key={index1}>{item.allOfferCount}</Text>
//   </View>
//   </>)
//   const series = Object.keys(series1);
//   const sliceColor = ['red', 'blue', 'green', '#92CDE2']





//   const widthAndHeight1 = 180
//   const SeriesA = pieAmount.map((i, index) => <View style={{ flexDirection: 'row' }} key={index}>
//         <Text key={index}>{i.totalOfferedAmount}</Text>
//   </View>)
//   const seriesA = Object.keys(SeriesA)
//   const sliceColor1 = ['red', 'blue', 'green', '#2C5AA2']


//   return (

//     <>
//       <SafeAreaView style={{ flex: 1, backgroundColor: '#05375a' }}>
//         <ScrollView 
//          contentContainerStyle={styles.scrollView}
//          refreshControl={
//            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
//           <View>
//             <View>
//               <View style={styles.View1}>
//                 <View style={{ flexDirection: 'row' }}>
//                   <Text style={styles.Text1}>Home/ </Text>
//                   <Text style={{ color: 'white', fontSize: 20 }}>Dashboard</Text>

//                 </View>
//               </View>
//               <Spinner visible={loading} />

//               <View style={styles.View2}>
//               {/*   <View style={styles.View3}>
//                   <Text style={{ color: 'white', fontSize: 20 }}> Yield</Text>
//                 </View> */}
//         {/* <BarChart data = {series1} horizontal /> */}
//               {/* <PieChart data = {series1} donut /> */}
//               {/* <View style={styles.View4}>
//                   <Text style={styles.Text2}> Total Yield: {yieVal.totalYield}</Text>
//                 </View>          
//            </View>
//               <View style={styles.View5}>
//               </View>
//               <View >
//                 <Text style={styles.Text4}>Offer Counts Details</Text>
//               </View> */}
//               </View>

//               <>
//             <View style={{justifyContent: 'space-between', flexDirection: 'row'}}> 
//               {pieCount.map((item, index) => (
//                 <>

//                   <View style={styles.View8}  key={index} >
//                     <Text style={styles.Text5}>{item.name}: </Text>
//                     <Text style={styles.Text7}>  Heres{item.allOfferCount}</Text>                    
//                   </View>
                
//                 </>                     
//                  ))}
                        
//            </View>
//               <View style={styles.View5}>
//               </View>
//               <View >
//                 <Text style={styles.Text4}>Offer Counts Details</Text>
//               </View>
//               <View style={styles.View10}>

//                 <PieChart
//                   widthAndHeight={widthAndHeight}
//                   series={series}
//                   sliceColor={sliceColor}
//                   doughnut={false}
//                   coverRadius={0.45}
//                   coverFill={'#FFF'} />
                   

             
//                  </View>
//                  <View style={styles.View4}>
//                   <Text style={styles.Text2}> Total Yield: {yieVal.totalYield}</Text>
//                 </View>  
//  </>

//               <View style={styles.View9}>
//                 <Text style={styles.Text6}>Offer Amount Details</Text>


//               </View>


//               <><View style={styles.View13}>


//                 <PieChart
//                   widthAndHeight={widthAndHeight1}
//                   series={seriesA}
//                   sliceColor={sliceColor1}
//                   doughnut={true}
//                   coverRadius={0.45}
//                   coverFill={'#FFF'} /></View></>



//               {pieAmount.map((item, index) =>
//                 <View style={styles.View11} key={index}>

//                   <View style={styles.View8} >
//                     <Text style={styles.Text5} key={index}>{item.name}:</Text>
//                     <Text style={styles.Text7} > {item.totalOfferedAmount}</Text>
//                   </View>
//                   <View>


//                   </View>
//                 </View>



//               )}


//             </View>
//             <View style={styles.View12}>
//               <Text></Text>
//             </View>

//             <View style={{ marginVertical: 20, backgroundColor: 'white', height: 40 }} >
//               <Text style={{color: 'black', textAlign: 'center',fontWeight:'bold', paddingTop: 10, fontFamily: 'Georgia' }}>Copyright @ 2021-2022<Text style={{ color: 'blue' }}>UpCap.</Text>All right Reserved.</Text>

//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>


//   )
// }
// const styles = StyleSheet.create({
//   screen: {
//     backgroundColor: 'white',
//   },

//   centeredView: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 22,
//   },
//   img: {
//     width: 300,
//     height: 150
//   },
//   btns: {
//     paddingVertical: 50

//   },
//   View1: {
//     paddingHorizontal: 10, paddingTop: 20
//   },
//   View2: { margin: 10, paddingTop: 30, },
//   View3: { borderWidth: 1, borderRadius: 2, borderColor: 'white' },
//   View4: { borderRadius: 2, borderColor: 'white', alignItems: 'center' },
//   View5: { alignItems: 'center' },
//   View6: { borderWidth: 1, borderColor: 'white' },
//   View7: { borderWidth: .7, borderColor: 'white', marginHorizontal: 15 },
//   View8: {
//       paddingLeft: 20, paddingRight:20, justifyContent: 'center'
   
    
//   },
//   View9: {  marginTop: 60 },
//   View10: {
//     alignItems: 'center',  paddingTop: 10,paddingLeft: 20,
   
//   },
//   View13: {
//     alignItems: 'center', paddingTop: 20
//   },
//   View11: { padding: 10, paddingTop: 15, marginBottom: 0 },
//   View12: { padding: 20 },
//   Text1: { color: 'orange', fontSize: 20, paddingHorizontal: 8, fontWeight: 'bold' },
//   Text2: { marginTop: 8, color: 'white' },
//   Text3: { padding: 10, textAlign: 'center', color: 'white' },
//   Text4: { padding: 10, textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'serif' },

//   Text5: { textAlign: 'center', color: 'white', fontSize: 20},
//   Text7: { flexDirection: 'row' , color: 'white'},
//   Text6: { padding: 10, textAlign: 'center', color: 'white',fontSize: 20, fontFamily: 'serif' },

// });

// export default Dashboard;


import { View, Text } from 'react-native'
import React from 'react'

export default function Dashboard() {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}