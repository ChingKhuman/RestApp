import {React, useState} from 'react'
import {View} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const Help = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Glossary', value: 'apple'},
      {label: 'FAQs', value: 'banana'}
    ]);
return (
    <>
    <View>
        
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

export default Help