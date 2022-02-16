import React, { Component } from 'react'
import { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import OnBoardScreen from './src/components/OnBoardScreen/OnBoardScreen'
import Home from './src/components/Home/Home'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import OnBoardControl from './src/components/OnBoardScreen/OnBoardControl'
import LogInScreen from './src/components/LogInScreen/LogInScreen'
import Liked from './src/components/Liked/Liked';
import Profile from './src/components/Profile/Profile';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from './src/components/Details/Details'
import OrderForm from './src/components/OrderForm/OrderForm'
import MyOrder from './src/components/Profile/MyOrder/MyOrder'


Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return(
    <Tab.Navigator 
    tabBarOptions={{
      style: styles.tabBar,
      activeTintColor: colors.orange,
      inactiveTintColor: colors.gray,
      showLabel: false,
    }}
    >
      {/* <Tab.Screen  name="Home" component={Home} options={{
      tabBarIcon: ({color}) => <Entypo name="home" size={32} color={color}/>
      }}/>
      <Tab.Screen name="Liked" component={Liked} options={{
      tabBarIcon: ({color}) => <Entypo name="heart" size={32} color={color}/>
      }}/> */}
      <Tab.Screen name="Profile" component={Profile} options={{
      tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={32} color={color}/>
      }}/>
    </Tab.Navigator>
  )
} 

const App= () =>  {

    return (
    <>
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="OnBoard" component={OnBoardControl} /> */}
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator}  />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="OrderForm" component={OrderForm} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
      </Stack.Navigator>
  </NavigationContainer>
    </>
    );

 
}



const styles = StyleSheet.create({
  tabBar:{
    // backgroundColor: colors.white,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
   
  },
})

export default App;
