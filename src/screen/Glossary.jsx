import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { BASE_URL } from "../Config";
import { SIZES } from "../constants/theme";
import { AuthContext } from "../context/AuthContext";


const Glossary = ({ navigation }) => {
    const { loading, userInfo } = useContext(AuthContext);
    // console.log(userInfo)
    const token = userInfo.data?.accessToken
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var raw = "";

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    const getData = () => {
        fetch(`${BASE_URL}/account/glossary`, requestOptions)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong.')

            }).
            then(function (myJson) {
                let result = myJson
                console.log('Request Successfull.....', result)
            })
            .catch(function (error) {
                console.warn('Request failed', error)
            })

    }

    useEffect(() => {
        getData()
    }, [])

    const sportsData = [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' }
    ];

    const fields = { text: 'Game', value: 'Id' };

    return (
        <View>
            <View>
                <Text style={{ fontSize: SIZES.h2, padding: 7 }}> Glossary</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: SIZES.h4, padding: 7, color: 'orange' }}> Home /</Text>
                    <Text style={{ fontSize: SIZES.h4, padding: 7 }}>Glossary</Text>
                </View>
            </View>
               </View>
    )
}

export default Glossary;