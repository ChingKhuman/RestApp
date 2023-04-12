import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {React, useState} from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Faq from './Faq';
import Glossary from './Glossary';

const Help = ({navigation}) => {
  const Stack = createNativeStackNavigator();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Glossary', value: 'apple'},
      {label: 'FAQs', value: 'banana'}
    ]);
return (
    <>
     <View style={{padding: 10, alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Glossary')}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
    <Text style={{fontSize:20, }}>Glossary</Text>
    
    </View></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Faq')}><Text style={{fontSize:20, }}>FAQs</Text></TouchableOpacity>
    </View>
        <Stack.Navigator>
          <>
         
          <Stack.Screen name='Glossary' component={Glossary} />
          <Stack.Screen name='Faq' component={Faq} />
      
      </>
        </Stack.Navigator>
     
    <View>
        
    {/* <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}
   
    </View>
    </>
)
}

export default Help