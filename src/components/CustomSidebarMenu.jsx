import  * as React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Modal,
  Pressable,
  ImageBackground,

} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';
import { COLORS, SIZES } from '../constants/theme';
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";






const CustomSidebarMenu = (props) => {

  const {logout} = React.useContext(AuthContext) 
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleLogout = () => {
    AsyncStorage.clear();
    // navigation.navigte('LoginScreen')
   
  };

  

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
    
            
      <DrawerContentScrollView {...props} >
        <ImageBackground  source={require('../../assets/BlueTheme.jpg')}>
        <Image style={styles.sideMenuProfileIcon} source={require('../../assets/platform.png')} />
       
        </ImageBackground>
        <DrawerItemList {...props}
         />
  

      </DrawerContentScrollView>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, paddingHorizontal: 18,
    borderTopWidth:1, borderColor: 'grey'}}>
      <Icon name='logout'  size={20}             
               />
               <TouchableOpacity onPress={() => setModalVisible(true)}>
               <Text style={{fontSize: 17,color: 'black', fontFamily: 'Roboto-Medium', 
               marginLeft: 5,fontWeight:'bold', paddingHorizontal: 20}}>
                Logout
               </Text>
               </TouchableOpacity>
      </View>
     <TouchableOpacity onPress={() => Linking.openURL('https://finsightventures.in')}>
     <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
          paddingBottom: 10
        }}>
        www.finsightVentures.com
      </Text>
     </TouchableOpacity>

      <Modal
    animationType="slide"
    transparent={true}

    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Are you Sure Want to Log out</Text>
        <View  style={styles.touch}>
       <View>
       <Pressable
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.textStyle}>No</Text>
        </Pressable>
       </View>
       <View>
       <Pressable
          onPress={logout}>
          <Text style={styles.textStyle1}>Yes</Text>
        </Pressable>
       </View>
        </View>
   
      </View>
    </View>
   </Modal>
   </>
   {/*   */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginVertical: 30
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 50,
       
  },
  textStyle1: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 30,  
  
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: SIZES.h2,

  },
  touch: {
 flexDirection: 'row',
 display: 'flex',
 justifyContent: 'space-between'
  },
  btn: {
    
  }
});

export default CustomSidebarMenu;