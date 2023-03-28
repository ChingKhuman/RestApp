import axios from 'axios';
import * as React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { AuthContext } from './context/AuthContext';


const WalletScreen = () => {

    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const wallet = () => {
        setLoading(true);
       
        axios.get('http://localhost:9902/dashboard/dashboardsummary')
        .then(res => {
            console.log(res)
        }).catch(e => {
            console.log(`login error ${e.res}`);
            setLoading(false)
        })
    }   

   
  

   
    return (
        <>
         <View style={{paddingTop: 50}}>
       <View style= {{alignItems: 'center', height: 80, backgroundColor: 'green'}}>
        <Text style={{color: 'white',  paddingVertical: 20, fontSize: 20 }}>
            YOUR WALLET SUMMARY
        </Text>
        </View>
        <View style={{alignItems: 'center'}}>
        <Text>
            Rs 0
            </Text>
            <Text>
                WALLET BALANCE
            </Text>
            </View>

           <View style={{alignItems: 'center', paddingVertical: 50}}>
           <TouchableOpacity style={{borderWidth:1, borderColor: 'green', width:200,height: 30, alignItems: 'center'}}>
                <Text style={{position: 'relative', color: 'green'}} >
                    My Investment
                </Text>
            </TouchableOpacity>
           </View>
           <Button title="Load data" 
                    onPress={wallet} />
        </View> 
        </>
    )
} 

export default WalletScreen;