import React from 'react'
import {StyleSheet,Button, Text,View, ScrollView, Dimensions} from
 'react-native';
 import {  PieChart} from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

const Dashboard = () => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2 // optional, default 3
  }

  const data = [
    { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ]
    return (
       
       <ScrollView>
<View style={{paddingHorizontal: 10}}>
<Text style={{color: 'black', fontSize:25, }}> Dashboard</Text>
<View style={{flexDirection: 'row'}}>
<Text style={{color: 'orange', fontSize: 15, paddingHorizontal: 8}}>Home/ </Text>
<Text>Dashboard</Text>

</View>
</View>

    <View style={styles.main}>
      <View style={{margin: 10, paddingTop: 30}}>
      <View style={{borderWidth: 1, borderRadius: 2, borderColor: 'grey'}}>
<Text> Yield</Text>

        </View> 
        <View style={{borderWidth: 1, borderRadius: 2, borderColor: 'grey', height: 50, alignItems: 'center'}}>
          <Text style={{color: 'black', marginVertical: 8}}> Total Yield: </Text>
        </View>
 
        </View>
    <View style={{alignItems: 'center'}}>
   
   <View style={{borderWidth: 1, borderColor: 'grey'}}>
    <Text style={{padding: 10}}>Offer Counts</Text>
   </View>
  </View>
 
  </View>
  <PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
  absolute
/>

<PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
  absolute
/>
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