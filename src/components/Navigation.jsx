
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import LoginScreen from "../LoginScreen";
import RegisterScreen from "../RegisterScreen";
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from '../SplashScreen';





const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {userInfo, splashLoading} = useContext(AuthContext)
    
    return (
       <NavigationContainer>      
        <Stack.Navigator>         
        {
        splashLoading ? (
            <Stack.Screen name='Splash Screen' component={SplashScreen}
            options={{headerShown: false}}/>
        ):
        userInfo.data? (              
        <>                 
                               
                 <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>                 
                 </>  
                 
        ):(
             <>
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                 <Stack.Screen name='Register' component={RegisterScreen}/>                           
                </>
           )}
            
{/*        
           { userInfo.data && role  === 3 && status === ACTIVE ? 
                 <>
                 
                 <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/> 
                 <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}}/>                
                 </>               
             
            :
            (
                userInfo.data && role === 3 && status ===INACTIVE ? 
                    <>
                           <Stack.Screen name='Notification' component={Notification} options={{headerShown: false}}/>  
                    </>
                
            :
            
                <>
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                 <Stack.Screen name='Register' component={RegisterScreen}/>                           
                </>
           )} */}
            {/* {splashLoading ? (
                <Stack.Screen name='Splash Screen' component={SplashScreen}
                options={{headerShown: false}}/>
            ):
            userInfo.accessToken ? (
                <Stack.Screen name='Home' component={HomeScreen} />
                           ): (
                               <>
                               
                               <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                           <Stack.Screen name='Register' component={RegisterScreen}/></>
                           )} */}


   </Stack.Navigator>
        </NavigationContainer>
    )}


export default Navigation;