import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Modal,
  Pressable,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';
import { COLORS, SIZES } from '../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';



const CustomSidebarMenu = (props) => {

  const {logout} = useContext(AuthContext) 
  const [modalVisible, setModalVisible] = useState(false);

  
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
    
            <Image style={styles.sideMenuProfileIcon} source={require('../../assets/platform.png')} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
       
          <DrawerItem
           options={{
            drawerIcon: ({focused, size}) => (
              <Icon name="home" 
              size={size}
             
               />
            )
          }}
          label="Logout"        
          onPress={() => setModalVisible(true)}
        /> 
        

        {/* <DrawerItem
        label='Check'
        onPress={()=> Linking.openURL('https://google.com')}/>          */}


      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        www.finsightVentures.com
      </Text>

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