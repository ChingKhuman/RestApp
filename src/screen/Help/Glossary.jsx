import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../../constants/Config";
import { SIZES } from "../../constants/theme";
import { AuthContext } from "../../context/AuthContext";
import { StyleSheet } from "react-native";
import { Transition, Transitioning } from 'react-native-reanimated'
import Spinner from "react-native-loading-spinner-overlay";





const Glossary = () => {


    const [loading, setLoading] = useState(false)
    const [glossary, setGlosary] = useState([])
    const { userInfo } = useContext(AuthContext);
    const [currentIndex, setCurrentIndex] = useState(null)
    const ref = useRef()
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
        setLoading(true)
        fetch(`${BASE_URL}/account/glossary`, requestOptions)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong.')

            }).
            then(function (myJson) {
                let result = myJson.data
                setGlosary(result)
                // console.log('check...result..', result)
                setLoading(false)

            })
            .catch(function (error) {
                console.warn('Request failed', error)
                setLoading(false)
            })

    }

    useEffect(() => {
        getData()
    }, [])







    return (
        <ScrollView>
            <View 
            >
           
                <View>
                    <Text style={{ fontSize: SIZES.h2, padding: 7 }}> Glossary</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: SIZES.h4, padding: 7, color: 'orange' }}> Home /</Text>
                        <Text style={{ fontSize: SIZES.h4, padding: 7 }}>Glossary</Text>
                    </View>
                </View>
                <View>

                </View>
              
                <View>


                    <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Spinner visible={loading} />
                        {glossary.map(({ section, sectionData }, index) => {
                            return (
                                <>

                                    <View key={index}>
                                        <Text style={styles.heading}>{section}</Text>
                                        <View style={styles.sectiondata}>
                                            {sectionData.map(({ term, definition }, index) => {
                                                return (
                                                    <View>

                                                        <TouchableOpacity key={term}
                                                            onPress={() => { setCurrentIndex(index === currentIndex ? null : index) }}
                                                            activeOpacity={0.9} style={{ alignItems: 'center', justifyContent: 'center' }}>


                                                            <Text style={{color: 'blue', fontSize:10}} key={term}>{term}</Text>
                                                        </TouchableOpacity>

                                                        {index === currentIndex && (
                                                            <View>
                                                                <Text  style={{fontSize: 15, fontWeight: '800'}} key={definition}> {definition}</Text>
                                                            </View>


                                                        )}

                                                    </View>


                                                )
                                            })}

                                        </View>
                                    </View>



                                </>

                            )
                        })}

                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default Glossary;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: -2,
    },
    bodyterm: {
        fontsize: 40,
        fontWeight: '900',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue'

    }
})