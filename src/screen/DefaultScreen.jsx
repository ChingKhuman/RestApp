import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState }  from "react";
import {StyleSheet, View, Text } from "react-native/";
import CustomSidebarMenu from "../components/CustomSidebarMenu";
import WalletScreen from "../WalletScreen";
import Dashboard from "./Dashboard";
import InvoiceMangement from "./InvoiceManagement";
import Notification from "./Notification";
import Icon from 'react-native-vector-icons/FontAwesome'
import DropDownPicker from "react-native-dropdown-picker";

const DefaultScreen= () => {


    const Drawer = createDrawerNavigator();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);


    return (
        <>
   <View>
    <Text>
      lkdfljlk
    </Text>

    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
   </View>
     </>
    )
}

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
export default DefaultScreen;