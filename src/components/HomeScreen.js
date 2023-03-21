

import React from 'react';
import {StyleSheet} from 'react-native';
import WalletScreen from '../WalletScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Logout from '../screen/Logout';
import Dashboard from './Dashboard';






const HomeScreen = () => {

  const Drawer = createDrawerNavigator();

  return (

      <Drawer.Navigator initialRouteName="Dash">
        {/* <Drawer.Screen name='Dash' component={Dashboard}/> */}
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Wallet" component={WalletScreen} />
        <Drawer.Screen name="Logout" component={Logout}  />

        
      </Drawer.Navigator>
     );
    };
    

{/* <ScrollView>
<Button title='Wallet' onPress={()=> navigation.navigate('Wallet')}/>
<Button title='Funding' onPress={()=> navigation.navigate('Funding')}/>
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
    <View
           style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
   <View >
   
    <Pie 
            radius={80}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            strokeCap={'butt'}
            innerRadius={40}
          />
    </View>
   </View>
          <View style={{borderWidth: 1, borderColor: 'grey'}}>
          <Text style={{padding: 10}}>Offer Amounts</Text>
          <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
          <Pie
            radius={80}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            strokeCap={'butt'}
            innerRadius={40}
          />
          </View>
 </View>
 <View style={styles.sectionWrapper}>
 
</View>
   
    </View>
</ScrollView> */}


  

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
    main: {
       

    },
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',   
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
 

  img: { width: 300,
    height: 150
  },
  btns: {
    paddingVertical: 50  
    
  }
});

export default HomeScreen;














// import React, { useContext, useEffect, useState } from "react";
// import Spinner from "react-native-loading-spinner-overlay/lib";
// import { Button, StyleSheet,Modal, Text,Pressable, TouchableOpacity, View } from "react-native"
// import { AuthContext } from "./context/AuthContext";




// const HomeScreen = (navigation) => {
//      const {userInfo,logout, loading} = useContext(AuthContext)

//      const [modalVisible, setModalVisible]= useState(false)
     
//      const showCancelModal = () => setCancelVisible(true);

//      const hideCancelModal = () => setCancelVisible(false);
   
//      const [cancelVisible, setCancelVisible] = useState(false);
   
//     return (     
//           <View>
//            <Spinner visible={loading} />
//            <Text>
//             Welcome{userInfo.name}
//            </Text>
//            <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//          {/* <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>

//          <Button title="logout" >{logout}</Button>
//          <Text>Hide Modal</Text>
//          </TouchableOpacity> */}
       
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}>
             
//             </Pressable>
         
            
//         </View>
//         </View>
//         </Modal>
//         </View>
        
//     )
// }
// const styles = StyleSheet.create({
//     btn: {
//         backgroundColor: 'red',
//         // borderRadius: hp('1%'),
//         // padding: hp('1%'),
//         width: '100%',
//       },
//       btn_white: {
//         backgroundColor: 'white',
//         // borderRadius: hp('1%'),
//         // padding: hp('1%'),
//         width: '100%',
//       },
//       btn_text_no: {
//         color: 'white',
        
//         textTransform: 'capitalize',
//       },
//       btn_text_yes: {
//         color: 'black',
       
//         textTransform: 'capitalize',
//       },
//       contain: {height: 20},
    
//     });

// export default HomeScreen;