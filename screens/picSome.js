import { useFocusEffect, useCallback, useEffect } from '@react-navigation/native';
import React, {Component} from 'react';
import { useState } from 'react';
import { Button, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '../constants/index'
import pics from '../data/imagesAPI'
import { useNavigation } from "@react-navigation/native";
import SingleImg from '../Components/singleImage'

const PicSome = () => {
    const [imagesFromApi, setImagesFromApi] = useState()
    const [newimg, setNewimg] = useState()
    const [mdVis, setMdVis] = useState(false)
    const [isfavM, setIsfavM] = useState()

    const  Load  = async => {
        return fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then((response) => response.json().then(data => { setImagesFromApi(data) }))
            .catch((error) => console.log(error))

    }

    const navg = useNavigation()
    const isfavHandler = ab => {
        setMdVis(true);
        setNewimg(ab)
    }
    const renderitem = ({ item, index }) => {
        return (
            <View style={{ flex:1}}>
               <TouchableOpacity
               onPress={()=>{setNewimg(item.url); console.log(item.url); setMdVis(true)}}
               > 
               <View><Image
                    source={{ uri: item.url }}
                    resizeMode='cover'
                    style={{
                        width: '90%', height: 150, margin: 5
                    }}
                /></View>
                </TouchableOpacity>
                 {/* <Image
                    source={{ uri: item.url }}
                    resizeMode='cover'
                    style={{
                        width: '90%', height: 150, margin: 5
                    }}/> */}
            </View>
        )
    }

   

    return (
        <View >
            {/* <Text>Pics</Text>
            <Image
                source={icons.heartFilled}
                resizeMode='contain'
                style={{ height: 50, width: 50 }}
            /> */}
            <Button title='load' onPress={Load} />
            <View style={{ alignItems: 'center', justifyContent: 'center', width:'100%', flexDirection:'row' }}>
            <FlatList
                data={imagesFromApi}
                renderItem={renderitem}
                keyExtractor={(item, index) => index.toString()}
                
                numColumns={3}
            />
            </View>
            <Modal visible={mdVis}>
                <Button title="Back" onPress={()=> setMdVis(false)}/>
                <SingleImg imgkey={newimg}  />
            </Modal>
        </View>
    )
}

export default PicSome