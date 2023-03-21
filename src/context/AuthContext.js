import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import { BASE_URL } from "../config";


export const AuthContext = createContext();

export const AuthProvider = ({ children, navigation }) => {
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});
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
        
        axios.post('http://192.168.0.153:9902/account/login',
            {userEmail, userPasswd}            
        ).then(res => {           
            let userInfo = res.data;
           
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

    // const logout = () => {
    //     setLoading(true);
    //     axios.post(`${BASE_URL}/logout`,
    //         {}, {
    //         headers: { Authorization: `Bearer ${userInfo.access_token}` },
    //     },).then(res => {
    //         console.log(res.data)
    //         AsyncStorage.removeItem("userInfo");
    //         setUserInfo({})
    //         setLoading(false)
    //     }).catch(e => {
    //         console.log(`logout error ${e}`);
    //         setLoading(false)
    //     })
    // }

    const isloggedIn = async () => {
        try {
            setSplashLoading(true)
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            console.log("CheckRemoveOrNot...", userInfo)

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

    return (

        <AuthContext.Provider value={{ loading, userInfo, splashLoading, login,logout }}>{children}</AuthContext.Provider>
    )

}

export default AuthProvider;