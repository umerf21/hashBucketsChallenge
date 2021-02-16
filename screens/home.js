import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants/index'

const Home = () => {
    return(
        <View style={{justifyContent:'center', padding:SIZES.padding}}>
            <Text style={{...FONTS.h1, color:COLORS.black}}>Hash Buckets Challenge For Jr. React Native Developer</Text>
            <Text style={{...FONTS.h3, color:COLORS.black, margin:10}}>
                - Date: 16-02-2021{"\n"}
                - Completion: 50% (In Progress)
            </Text>
            <Text style={{...FONTS.body3, color:COLORS.black, margin:10}}>
                - Challenge 1 Completed (Nav bar with routing){"\n"}
                - Challenge 2 Completed (Store Setup){"\n"}
                - Challenge 3 Partially Completed (Api calling using fetch) {"\n"}
                - Challenge 4 Not Completed {"\n"}
                - Challenge 5 Hovered did not work in React Native{"\n"}
                - Challenge 6 Completed (Instead of hover I use Modal){"\n"}
                - Challenge 7 Completed{"\n"}
                - Challenge 8 Completed 

            </Text>
        </View>
    )
}

export default Home;