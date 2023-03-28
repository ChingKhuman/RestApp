import React, { useContext,useState } from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import WalletScreen from '../WalletScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Logout from './Logout';
import Dashboard from './Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import InvoiceMangement from './InvoiceManagement';
import Icon from 'react-native-vector-icons/FontAwesome'
import Transaction from './Transaction';
import Notification from './Notification';
import DefaultScreen from './DefaultScreen';




const Invest = ({navigation}) => {

  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const [id, setId] = useState({})
  


  return (
    <> 
   
  
     <View>
     
     </View>
      </>
     );
    };
    


  

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

export default Invest;














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