

import React, {useContext} from 'react';
import { StyleSheet,Button, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';


const Logout = () => {
  const {logout} = useContext(AuthContext) 
 

  const Drawer = createDrawerNavigator();



  return (
<View>
    <Button title='Logout' onPress={logout}/>
</View>
     );
    };

  

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },

});

export default Logout;

