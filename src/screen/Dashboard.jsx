import React, { useContext, useEffect, useState } from 'react'
import {StyleSheet,Button, Text,View, ScrollView, Dimensions} from
 'react-native';
 import {  PieChart} from 'react-native-chart-kit'
import { BASE_URL } from '../Config';
import { AuthContext } from '../context/AuthContext';


const Dashboard = () => {

  const [pieData, setPieData ] = useState([])
  const [count, setCount] = useState([])

 

  const screenWidth = Dimensions.get('window').width

  const {loading, userInfo} = useContext(AuthContext);
  // console.log(userInfo)
  const token = userInfo.data?.accessToken
  console.log('token....', token)




var myHeaders = new Headers();
myHeaders.append("Authorization", token);

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};



// const pie = () => {
//   fetch("http://192.168.0.154:9902/dashboard/dashboardsummary",requestOptions)
//   .then(response => response.json())
//   .then((result) => {  
//    let pie= result.data?.amount  
//   //  console.log('pie.....', pie)  
//     setPieData(pie)  })
//       .catch(error => {
//         console.log(error)
//       }) 
// }
// useEffect(()=> {
// pie()

// }, [])

const getData= () => {
  fetch(`${BASE_URL}/dashboard/dashboardsummary`,requestOptions)
  .then(function(response){
    return response.json();
  }).
  then(function(myJson) {
    let cont = myJson.data.count;
    setCount(cont)
    }).catch(function(error){
      console.log(error)
    })   

  }
    useEffect(()=>{
      getData()
    },[])


    useEffect(() => {
      // declare the data fetching function
      const fetchData = async () => {
        const data = await fetch('http://192.168.0.154:9902/dashboard/dashboardsummary');
      }
    
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, [])
  
  
  


  
  const chartConfig = {
    backgroundGradientFrom: '#E12B04',
    backgroundGradientTo: 'blue',
    color: (opacity = 1) => `rgba(225, 43, 4 , ${opacity})`,
    strokeWidth: 2 // optional, default 3
    
  }


  const data = [
    { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Moscow', population: 10920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ]
  // const data = [
  //   { name: 'Seoul', population: 20000000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'Beijing', population: 527612, color: 'red', },
  //   { name: 'New York', population: 8538000, color: '#ffffff', },
  //   { name: 'Moscow', population: 10920000, color: 'rgb(0, 0, 255)', }
  // ]
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
   
<PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
  
/>


</View>

<View style={{borderWidth: 1, borderColor: 'grey'}}>
    <Text style={{padding: 10, textAlign:'center'}}>Offer Counts Details</Text>

   </View>
  {count.map((item, index)=> 
  <View style={{justifyContent:'space-between', display:'flex'}} key={index}>
<Text style={{textAlign:'center'}}>{item.name}</Text>
  </View>
 ) }

<PieChart
  data={count}
  color="#E12B04"
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="allOfferCount"
  backgroundColor="transparent"
  paddingLeft="15"
  absolute
/>

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