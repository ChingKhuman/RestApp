import React from "react";
import {View, Text } from "react-native";
import { SIZES } from "../constants/theme";

const Faq= () => {
    return (
        <View>
        <View>
            <Text style={{ fontSize: SIZES.h2, padding: 7 }}> Faqs</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: SIZES.h4, padding: 7, color: 'orange' }}> Home /</Text>
                <Text style={{ fontSize: SIZES.h4, padding: 7 }}>Faqs</Text>
            </View>
        </View>
           </View>
    )
}
export default Faq;