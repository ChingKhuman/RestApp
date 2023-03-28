import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';



const CustomSidebarMenu = (props) => {

  const {logout} = useContext(AuthContext) 

  return (
    <SafeAreaView style={{flex: 1}}>
    
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
          onPress={logout}
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
});

export default CustomSidebarMenu;