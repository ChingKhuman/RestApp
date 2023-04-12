import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants/Config";


export const AuthContext = createContext();

export const AuthProvider = ({ children, navigation }) => {
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [addInfo, setAddInfo] = useState()
    const [splashLoading, setSplashLoading] = useState(false)
   
    

    // const register = (name, mobile, email, password) => {
    //     setLoading(true)
    //     axios.post(`${BASE_URL}/register`, {
    //         name,mobile,email,password
    //     }).then(res => {
    //         let userInfo = res.data;
    //         setUserInfo(userInfo);
    //         AsyncStorage.setItem("userInfo", JSON.stringify(userInfo))
    //         setLoading(false)
    //         console.log(userInfo);
    //     }).catch(e => {
    //         console.log(`register error ${e}`);
    //         setLoading(false);
    //     })
    // }

    const login = (userEmail, userPasswd) => {
        setLoading(true);
        
        axios.post(`${BASE_URL}/account/login` ,
            {userEmail, userPasswd}            
        ).then(res => {
            let userInfo = res.data;  
            // console.log("Checkdata...", userInfo)          
            setUserInfo(userInfo)
             AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
             setLoading(false)
        }).catch(e => {
            console.log(`login error ${e.res}`);
            setLoading(false)
        })
    }

    const logout = async () => {
        try {
          await AsyncStorage.removeItem('userInfo');
          setUserInfo({})          
          useNavigate('Login')
        } catch (error) {
          console.log(`Error removing item: ${error}`);
        }
      };

    const isloggedIn = async () => {
        try {
            setSplashLoading(true)
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            

            if (userInfo) {
                setUserInfo(userInfo)
            }

            setSplashLoading(false)
        } catch (e) {
            console.log(`is logged in error ${e}`)

        }
    }

    useEffect(() => {
        isloggedIn()
    }, []);

    const Invoice = (add) => {
        setLoading(true);
        
        axios.post(`${BASE_URL}/invoicediscounting/addfunding` ,
            {add}            
        ).then(res => {
            let addInfo = res.data;  
             console.log("Checkdata...", addInfo)          
            // setAddInfo(addInfo)
            //  setLoading(false)
        }).catch(e => {
            console.log(`login error ${e.res}`);
            setLoading(false)
        })
    }

   


    return (

        <AuthContext.Provider value={{ loading, userInfo, splashLoading, login,logout, Invoice }}>{children}</AuthContext.Provider>
    )

}

export default AuthProvider;