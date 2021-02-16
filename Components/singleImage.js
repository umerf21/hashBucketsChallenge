import React from 'react';

import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { COLORS, icons, FONTS, SIZES } from '../constants'

const SingleImg = props => {

    const [isfav, setIsfav] = useState(false)
    const [heartImg, setHeartImg] = useState(icons.heartOutline)
    const [heartcolor, setheartcolor] = useState(COLORS.lightGray)

    const [addCart, setAddCart] = useState(false)
    const [cartImg, setCartImg] = useState(icons.addCart)
    const [cartcolor, SetcartColor] = useState(COLORS.lightGray)

    const imgkey = props.imgkey
    console.log(imgkey)

    const heartIconHandler = () => {
       
        if(isfav==true) {
            setHeartImg(icons.heartOutline)
            setIsfav(false)
            setheartcolor(COLORS.lightGray)
        }
        else{
            setHeartImg(icons.heartFilled)
            setIsfav(true)
            setheartcolor(COLORS.primary)
        }
    }

    const AddCartIconHandler = () => {
            //setCartImg(icons.home)
            setAddCart(true)
            SetcartColor(COLORS.lightGreen)
        
    }

    return(
        <View style={{alignItems:'center', justifyContent:'center', padding:20, flex:1}}>
            <Image
            source={{uri : imgkey}}
            resizeMode='cover'
            style={{
                width:'100%', height:500
            }}
            />
            <View style={{
                flexDirection:'row', 
                height:70,
                paddingHorizontal:30,
                width:'100%', 
                alignItems:'center', 
                justifyContent:'space-between'}}>
            <TouchableOpacity
            onPress={heartIconHandler}
            >
                <Image
                source={heartImg}
                resizeMode='contain'
                style={{height:40, width:40, tintColor:heartcolor}}
                />


            </TouchableOpacity>
            <TouchableOpacity
            disabled={addCart}
            onPress={AddCartIconHandler}
            ><View style={{padding:5, borderColor:cartcolor, borderRadius:SIZES.padding,borderWidth:5}}>
                <Image
                source={cartImg}
                resizeMode='contain'
                style={{height:25, width:25, tintColor:cartcolor}}
                />
</View>

            </TouchableOpacity>
            </View>
        </View>
    )
}

export default SingleImg