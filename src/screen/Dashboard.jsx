import React, { useContext, useEffect, useState, } from 'react';
import {StyleSheet,Button, Text,View, ScrollView, Dimensions} from
 'react-native';
 import {  PieChart} from 'react-native-chart-kit';
import { BASE_URL } from '../constants/Config';
import { AuthContext } from '../context/AuthContext';
import Pie from 'react-native-pie'


const Dashboard = () => {

  // const [pieData, setPieData ] = useState();
  // const [count, setCount] = useState([]);

 

  const screenWidth = Dimensions.get('window').width;

  // const {loading, userInfo} = useContext(AuthContext);
  // // console.log(userInfo)
  // const token = userInfo.data?.accessToken;
  // console.log('token....', token);




// var myHeaders = new Headers();
// myHeaders.append("Authorization", token);

// var raw = "";

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };


// const getData= () => {
//   fetch(`${BASE_URL}/dashboard/dashboardsummary`,requestOptions)
//   .then(function(response){
//     return response.json();
//   }).
//   then(function(myJson) {
//     let cont = myJson?.data.count;
//     // console.log('check the data...', cont)
//     setCount(cont);
  
//     }).catch(function(error){
//       console.log(error)
//     })   

//   }
//     useEffect(()=>{
//       getData()
//     },[]);

//  const chartConfig = {
//     backgroundGradientFrom: "#1E2923",
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: "#08130D",
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.5,
//     useShadowColorFromDataset: false // optional
    
//   }


  const data = [
    { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Moscow', population: 10920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ]
    return (
  <ScrollView>
      <>
<View>
<View style={{paddingHorizontal: 10, paddingTop: 20}}>
<View style={{flexDirection: 'row'}}>
<Text style={{color: 'orange', fontSize: 15, paddingHorizontal: 8}}>Home/ </Text>
<Text>Dashboard</Text>

</View>
</View>

      <View style={{margin: 10, paddingTop: 30}}>
          <View style={{borderWidth: 1, borderRadius: 2, borderColor: 'grey'}}>
           <Text> Yield</Text>
        </View> 
      
        <View style={{borderWidth: 1, borderRadius: 2, borderColor: 'grey', height: 50, alignItems: 'center'}}>
          <Text style={{color: 'black', marginVertical: 8}}> Total Yield: </Text>
        </View> 
        </View>
        <View style={{alignItems: 'center'}}>
   
   
  
  
  </View>
  <View style={{borderWidth: 1, borderColor: 'grey'}}>
    <Text style={{padding: 10, textAlign: 'center'}}>Offer Amount Details</Text>
   
{/* <PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
  
/> */}


</View>

<View style={{borderWidth: 1, borderColor: 'grey'}}>
    <Text style={{padding: 10, textAlign:'center'}}>Offer Counts Details</Text>

   </View>
  {/* {count.map((item, index)=> 
  <View style={{justifyContent:'space-between', display:'flex'}} key={index}>
<Text style={{textAlign:'center'}}>{item.name}</Text>
  </View>
 ) } */}

{/* <PieChart
  data={count}
  color="red"
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="allOfferCount"
  backgroundColor="transparent"
  paddingLeft="15"
  absolute
/> */}

<View style={{borderWidth: 1, borderColor: 'grey'}}>
    <Text style={{padding: 10, textAlign: 'center'}}>Offer Amount Details</Text>
   
{/* <PieChart
  data={pieData}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
  
/> */}


{/* <Pie/> */}
</View>

</View>
       
      
</>
  </ScrollView>
      
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
    img: { width: 300,
      height: 150
    },
    btns: {
      paddingVertical: 50  
      
    }
  });

export default Dashboard;