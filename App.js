import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PicSome from './screens/picSome';
import PicCart from './screens/cart';
import Home from './screens/home';
import { COLORS, icons, FONTS } from './constants'
import { createStackNavigator} from '@react-navigation/stack'
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator();
const Title = () => {
  const navg = useNavigation()
  return (
    <TouchableOpacity style={{flexDirection:'row'}} onPress={() => navg.navigate('PicSome')}>
      <Image
      style={{ marginLeft:10, width: 30, height: 30, tintColor:COLORS.white }}
      source={icons.picSome}
    />
    <Text style={{...FONTS.h2, color:COLORS.white, marginHorizontal:10,}}>Pic Some</Text>
    </TouchableOpacity>
  );
}

const Cart = () => {
  const navg = useNavigation()
  return (
    <TouchableOpacity onPress={() => navg.navigate('PicCart')}>
    <Image
      style={{ marginHorizontal:20, width: 30, height: 30, tintColor:COLORS.white }}
      source={icons.cart}
    />
    </TouchableOpacity>
  );
}


export default function App() {
  
 
  return (
    <NavigationContainer>
      <Stack.Navigator 
      
      screenOptions={{
        headerShown:true,headerTintColor: COLORS.primary,
        headerStyle:{backgroundColor: COLORS.primary, },
        headerTitleStyle:{...FONTS.h2, color:COLORS.white},
        headerTitle: props => <Title/>,
        headerRight: props => <Cart/>,
        headerLeft:null
      }}
        
      
        initialRouteName={'Home'}
        >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="PicSome" component={PicSome}/>
        <Stack.Screen name="PicCart" component={PicCart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//AppRegistry.registerComponent(appName, () => App);