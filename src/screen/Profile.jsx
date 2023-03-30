import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FONTWIEGHT, SIZES } from '../constants/theme';

const Profile = () => {

    return (
      <ScrollView>
         <>
            <View>
                <Text style={{ fontSize: SIZES.h2, padding: 7 }}> Profile</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: SIZES.h4, padding: 7, color: 'orange' }}> Home /</Text>
                    <Text style={{ fontSize: SIZES.h4, padding: 7 }}>Profile</Text>
                </View>
            </View>
             <View style={{borderWidth:1, borderColor:'black', 
            marginHorizontal: 30}}>
            <View>
                <View style={{alignItems:'center', padding: 10}}>
                    <Text>Investor1</Text>
                    <Text>Status: Active</Text>
                </View>
                <View style={{padding: 20}}>
                    <View style={styles.view1}>
                        <Text>Email</Text>
                        <Text>investor1@finsight.in</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text>Phone</Text>
                        <Text>9738876326</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text>Date of Birth</Text>
                        <Text>19/06/1994</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor:'green',borderWidth:1, borderColor: 'green', width:200,height: 30, alignItems: 'center'}}>
                    <Text style={{position: 'relative', color: 'white'}}> Change Profile Pictuer</Text>
                </TouchableOpacity>
               
                </View>
                <View style={{alignItems: 'center',padding: 10}}>
                <TouchableOpacity style={{borderWidth:1,backgroundColor:'blue', borderColor: 'green', width:200,height: 30, alignItems: 'center'}}>
                    <Text style={{position: 'relative', color: 'white'}}> Change Password</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        
        </>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    text1: {
        fontFamily: FONTWIEGHT.bold
    },
    view1: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default Profile;