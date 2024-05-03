import { View, Image, ImageBackground, Text } from 'react-native'
import React from 'react'
import styles from '../screens/Styles/Style'

export default function Serviceimg({name}) {
    return (
        // <View>
        //   <Image source={require("../assets/ac-repair/ac-repair.png")} />
        // </View>
        <ImageBackground source={require("../assets/ac-repair/ac-repair.png")} style={{ width: '100%', height: 255 }}>
            <View style={{display:"flex" ,justifyContent:"center", alignItems:"center"}}>
                <Text style={[styles.h1, { color: "#fff" }]}>
                    {name}</Text>
            </View>
        </ImageBackground>
    )
}