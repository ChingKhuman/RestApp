import React from 'react';
import {StyleSheet} from 'react-native';
import WalletScreen from '../WalletScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import InvoiceMangement from './InvoiceManagement';
import Icon from 'react-native-vector-icons/FontAwesome'
import Notification from './Notification';
import Help from './Help';
import Funding from '../Funding';
import Settlement from './Settlement';
import Tds from './Tds';
import Profile from './Profile';
import { AiFillDatabase } from "react-icons/ai";





const HomeScreen = ({navigation}) => {

  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  

  return (
    <> 
    <Drawer.Navigator
    screenOptions={{
      activeTintColor: '#e91e63',
      itemStyle: {marginVertical: 5},
    }}
    drawerContent={props => <CustomSidebarMenu {...props} />}>
            
      
     <Drawer.Screen name="Dashboard" component={Dashboard} 
      options={{
        drawerIcon: ({focused, size}) => (
          <Icon name="home" size={30} color={focused ? '#7cc': '#CCC'} />
        ),
       
      }} /> 
     <Drawer.Screen name="Invoice Management" component={InvoiceMangement}  options={{
      
      drawerIcon: ({focused, size}) => (
        <Icon name="home" size={30} color={focused ? '#7cc': '#CCC'} />
      ),
    }} /> 

    <Drawer.Screen name="Wallet Management" component={WalletScreen}  
    options={{
      drawerIcon: ({focused, size}) => (
        <Icon name="bell" 
        size={size}
        color='blue'
         />
      )
    }}/>
     <Drawer.Screen name="My Funding" component={Funding}  
    options={{
      drawerIcon: ({focused, size}) => (
        <Icon name="bell" 
        size={size}
        color='blue'
         />
      )
    }}/>

<Drawer.Screen name="My Settlement" component={Settlement}  options={{
      drawerIcon: ({focused, size}) => (
        <Icon name="bell" 
        size={size}          
         />
      )
    }} />

<Drawer.Screen name="My TDS History" component={Tds}  options={{
      drawerIcon: ({focused, size}) => (
        <Icon name="bell" 
        size={size}          
         />
      )
    }} />
    
    <Drawer.Screen name="Notification" component={Notification}  
    options={{
      drawerIcon: ({focused, size}) => (
        <Icon name="bell" 
        size={size}
        color='blue'
         />                
      )
    }}/>
     <Drawer.Screen name="Help" component={Help} 
      options={{
        drawerIcon: ({focused, size}) => (
          <Icon name="home" 
          size={size}
         
           />
        )
      }} />
       <Drawer.Screen name="Profile" component={Profile} 
      options={{
        drawerIcon: ({focused, size}) => (
          <Icon name="home" 
          size={size}
         
           />
        )
      }} />
    
   
     </Drawer.Navigator>
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

export default HomeScreen;













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