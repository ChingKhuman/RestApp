import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

const Funding=() => {
    return (
        <View>
           <View style={{paddingHorizontal: 10}}>
<Text style={{color: 'black', fontSize:25, }}> Funding</Text>
<View style={{flexDirection: 'row'}}>
<Text style={{color: 'orange', fontSize: 15, paddingHorizontal: 8}}>Home/ </Text>
<Text>Funding</Text>
</View>
</View>
<View style={{paddingTop: 50, margin: 10, }}>
       <View style= {{alignItems: 'flex-start', height: 130,
        backgroundColor: 'blue', position: 'relative',
        paddingLeft: 50, borderRadius: 10}}>
        <Text style={{color: 'white',  paddingVertical: 20, fontSize: 20 }}>
            Invested In: 
        </Text>
        <Text style={{color: 'white',fontSize: 20  }}>
            Granite America Test
        </Text>
        
        </View>
        <View style={{backgroundColor:'white'
    }}> 
    <View style={{alignItems: 'center', paddingVertical: 30}}>
            <Text style={{fontFamily: 'sans-serif', fontSize: 18}}>13.5 %</Text>
            
            <Text style={{fontFamily: 'serif', fontSize: 13}}>NET ANNUAL YIELD</Text>
            <Text style={{fontFamily: 'sans-serif', fontSize: 18}}>25000.00</Text>
            <Text style={{fontFamily: 'serif', fontSize: 13}}>YOUR INVESTMENT</Text>
        </View>
        <View style={{alignItems: 'center', paddingVertical: 13}}>
            <Text style={{fontFamily: 'sans-serif', fontSize: 18}}>13.5 %</Text>
            
            <Text style={{fontFamily: 'serif', fontSize: 13}}>NET ANNUAL YIELD</Text>
            <Text style={{fontFamily: 'sans-serif', fontSize:18}}    >25000.00</Text>
            <Text style={{fontFamily: 'serif', fontSize: 13}}>YOUR INVESTMENT</Text>
        </View>
        <View style={{alignItems: 'center', paddingVertical: 30}}>
        <TouchableOpacity style={{borderWidth:1, borderColor: 'green',
         width:300,height: 30, alignItems: 'center'}}>
                <Text style={{position: 'relative', color: 'green'}} >
                    Invoice Details
                </Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
        </View>
    )
}
export default Funding;