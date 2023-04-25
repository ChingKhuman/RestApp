import React from 'react';
import {StyleSheet} from 'react-native';
import WalletScreen from './WalletScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import InvoiceMangement from './InvoiceManagement';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Feather'
import Notification from './Notification';
import Help  from './Help/Help';
import Funding from './Funding';
import Settlement from './Settlement';
import Tds from './Tds';
import Profile from './Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon4 from 'react-native-vector-icons/MaterialIcons'








const HomeScreen = () => {

  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  

  return (
    <> 
     
    <Drawer.Navigator
  
    screenOptions={{
      headerShown:'false',
      drawerActiveBackgroundColor: 'grey',
      drawerActiveTintColor:"#8DD2EA",
      drawerInactiveTintColor:"black",
      inactiveBackgroundColor: 'transparent',
      activeTintColor: 'red',
      labelStyle: {
        fontSize: 30,
        marginLeft: 10,
      },
      drawerStyle: {
        // backgroundColor: '#667EB8',
        borderWidth: 1,
      borderColor: 'orange'
        
      },
      itemStyle: {marginVertical: 5,
        borderWidth: 1,
            borderColor: 'white',
            
          },
      
      // headerStyle: {
      //   backgroundColor: 'green', //Set Header color
      // },
      // headerTintColor: 'white', //Set Header text color
      // headerTitleStyle: {
      //   fontWeight: 'bold', //Set Header text style
      // },
    }}
    drawerContent={props => <CustomSidebarMenu {...props}
    labelStyle={{fontFamily: 'sans-serif', fontsize:40}}
     />}>


            
      
     <Drawer.Screen name="Dashboard" 
     component={Dashboard} 
      options={{
        drawerLabelStyle:{
          fontSize:17,
          fontFamily: 'Roboto-Medium'
        },
       
        drawerIcon: ({color}) => (
          
          <Icon name="home" size={20} color= {color}/>
        ),
       
      }} /> 
     <Drawer.Screen name="Invoice Management" component={InvoiceMangement}  
     options={{   
      drawerLabelStyle:{
        fontSize: 17,
        fontFamily: 'Roboto-Medium'
      } ,  
      drawerIcon: () => (
        <Icon1 name="archive" size={20} color="black" />
      ),
    }} /> 

    <Drawer.Screen name="Wallet Management" component={WalletScreen}  
    options={{
      drawerLabelStyle:{
        fontSize:17,
        fontFamily: 'Roboto-Medium'
      },
      drawerIcon: () => (
        <Icon2 name="wallet" 
        size={20}
        color="black"
         />
      )
    }}/>
     <Drawer.Screen name="My Funding" component={Funding}  
    options={{
      drawerLabelStyle:{
        fontSize:17,
        fontFamily: 'Roboto-Medium'
      },
      drawerIcon: () => (
        <Icon2 name="credit-card-refund-outline" 
        size={20}
        color='black'
         />
      )
    }}/>

<Drawer.Screen name="My Settlement" component={Settlement}  options={{
  drawerLabelStyle:{
    fontSize:17,
    fontFamily: 'Roboto-Medium'
  },
      drawerIcon: () => (
        <Icon2 name="set-center" 
        size={20}   
        color='black'       
         />
      )
    }} />

<Drawer.Screen name="My TDS History" component={Tds}  options={{
  drawerLabelStyle:{
    fontSize:17,
    fontFamily: 'Roboto-Medium'
  },
      drawerIcon: () => (
        <Icon2 name="history" 
        size={20}  
        color='black'        
         />
      )
    }} />
    
    <Drawer.Screen name="Notification" component={Notification}  
    options={{
      drawerLabelStyle:{
        fontSize:17,
        fontFamily: 'Roboto-Medium'
      },
      drawerIcon: () => (
        <Icon4 name="notifications-on" 
        size={20}
        color='black'
         />                
      )
    }}/>
     <Drawer.Screen name="Help" component={Help} 
      options={{
        drawerLabelStyle:{
          fontSize:17,
          fontFamily: 'Roboto-Medium'
        },
        drawerIcon: () => (
          <><Icon3 name="help-circle"
            size={20}
            color='black' />
         </>
        )
      
      }}
      />
      
       <Drawer.Screen name="Profile" component={Profile} 
      options={{
        drawerLabelStyle:{
          fontSize:17,
          fontFamily: 'Roboto-Medium'
        },
        drawerIcon: () => (
          <Icon4 name="camera" 
          size={20}
          color='black'
         
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













// // import Spinner from "react-native-loading-spinner-overlay/lib";
// // import { Button, StyleSheet,Modal, Text,Pressable, TouchableOpacity, View } from "react-native"
// // import { AuthContext } from "./context/AuthContext";




// // const HomeScreen = (navigation) => {
// //      const {userInfo,logout, loading} = useContext(AuthContext)

// //      const [modalVisible, setModalVisible]= useState(false)
     
// //      const showCancelModal = () => setCancelVisible(true);

// //      const hideCancelModal = () => setCancelVisible(false);
   
// //      const [cancelVisible, setCancelVisible] = useState(false);
   
// //     return (     
// //           <View>
// //            <Spinner visible={loading} />
// //            <Text>
// //             Welcome{userInfo.name}
// //            </Text>
// //            <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={() => {
// //           Alert.alert('Modal has been closed.');
// //           setModalVisible(!modalVisible);
// //         }}>
// //          {/* <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>

// //          <Button title="logout" >{logout}</Button>
// //          <Text>Hide Modal</Text>
// //          </TouchableOpacity> */}
       
// //         <View style={styles.centeredView}>
// //           <View style={styles.modalView}>
// //             <Text style={styles.modalText}>Hello World!</Text>
// //             <Pressable
// //               style={[styles.button, styles.buttonClose]}
// //               onPress={() => setModalVisible(!modalVisible)}>
             
// //             </Pressable>
         
            
// //         </View>
// //         </View>
// //         </Modal>
// //         </View>
        
// //     )
// // }
// // const styles = StyleSheet.create({
// //     btn: {
// //         backgroundColor: 'red',
// //         // borderRadius: hp('1%'),
// //         // padding: hp('1%'),
// //         width: '100%',
// //       },
// //       btn_white: {
// //         backgroundColor: 'white',
// //         // borderRadius: hp('1%'),
// //         // padding: hp('1%'),
// //         width: '100%',
// //       },
// //       btn_text_no: {
// //         color: 'white',
        
// //         textTransform: 'capitalize',
// //       },
// //       btn_text_yes: {
// //         color: 'black',
       
// //         textTransform: 'capitalize',
// //       },
// //       contain: {height: 20},
    
// //     });

// // export default HomeScreen;


