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
import { COLORS } from '../constants/theme';
import { List } from 'react-native-paper';





const HomeScreen = ({navigation}) => {

  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  

  return (
    <> 
    <Drawer.Navigator
     drawerContentOptions={{
     
      labelStyle:{
        marginLeft:5,
        fontsize:20
      }
    }}
    screenOptions={{
      headerShown:'true',
      drawerActiveTintColor:"grey",
      drawerInactiveTintColor:"black",
      inactiveBackgroundColor: 'transparent',
      activeTintColor: 'red',
      labelStyle: {
        fontSize: 20,
        marginLeft: 10,
      },
      itemStyle: {marginVertical: 5},
      
      headerStyle: {
        backgroundColor: 'green', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    }}
    drawerContent={props => <CustomSidebarMenu {...props}
    labelStyle={{fontFamily: 'sans-serif', fontsize:10}} />}>
            
      
     <Drawer.Screen name="Dashboard" 
    //  options={{drawerLabel: 'Second page Option', title: 'Second Stack'}}
     component={Dashboard} 
      options={{
        labelStyle: {
          fontSize: 20,
        },
        drawerLabel: 'Dashboard',title: 'Dashboard',
        drawerIcon: () => (
          
          <Icon name="home" size={25} color= 'black'/>
        ),
       
      }} /> 
     <Drawer.Screen name="Invoice Management" component={InvoiceMangement}  
     options={{      
      drawerIcon: () => (
        <Icon name="archive" size={25} color="black" />
      ),
    }} /> 

    <Drawer.Screen name="Wallet Management" component={WalletScreen}  
    options={{
      drawerIcon: () => (
        <Icon name="book" 
        size={25}
        color="black"
         />
      )
    }}/>
     <Drawer.Screen name="My Funding" component={Funding}  
    options={{
      drawerIcon: () => (
        <Icon name="calendar" 
        size={25}
        color='black'
         />
      )
    }}/>

<Drawer.Screen name="My Settlement" component={Settlement}  options={{
      drawerIcon: () => (
        <Icon name="book" 
        size={25}   
        color='black'       
         />
      )
    }} />

<Drawer.Screen name="My TDS History" component={Tds}  options={{
      drawerIcon: () => (
        <Icon name="archive" 
        size={25}  
        color='black'        
         />
      )
    }} />
    
    <Drawer.Screen name="Notification" component={Notification}  
    options={{
      drawerIcon: () => (
        <Icon name="bell" 
        size={25}
        color='black'
         />                
      )
    }}/>
     <Drawer.Screen name="Help" component={Help} 
      options={{
        drawerIcon: () => (
          <><Icon name="rocket"
            size={25}
            color='black' />
         </>
        )
      
      }}
      />
      
       <Drawer.Screen name="Profile" component={Profile} 
      options={{
        drawerIcon: () => (
          <Icon name="camera" 
          size={25}
          color={COLORS.black}
         
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