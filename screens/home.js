import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {icons} from '../constants/index'

const Home = () => {
    return(
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text>Home</Text>
            <Image
            source={icons.heartFilled}
            resizeMode='contain'
            style={{height:50,width:50}}
            />
        </View>
    )
}

export default Home;