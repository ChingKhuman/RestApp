
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from '../screen/SplashScreen';
import Login from '../screen/Login';
import Lo from '../screen/Lo';
import Investor from '../screen/Register/Investor';
import Vendor from '../screen/Register/Vendor';
import Enterprise from '../screen/Register/Enterprise';
import InstituteInvestor from '../screen/Register/InstituteInvestor';
import InvoiceMangement from '../screen/InvoiceManagement';





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
                
                 <Stack.Screen name='Invoice' component={InvoiceMangement} options={{headerShown: false}}/>                 
                </>  
                 
        ):(
             <>
                {/* <Stack.Screen name='GetStarted' component={LoginScreen} options={{headerShown: false}}/> */}
                <Stack.Screen name='GetStarted' component={Lo} options={{headerShown: false}}/>
                 <Stack.Screen name='Register' component={RegisterScreen}/>   
                 <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>                        
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