import React, { Component } from 'react'
import { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import OnBoardScreen from './src/components/OnBoardScreen/OnBoardScreen'
import Home from './src/components/Home/Home'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardControl from './src/components/OnBoardScreen/OnBoardControl'
import LogInScreen from './src/components/LogInScreen/LogInScreen'

const Stack = createNativeStackNavigator();

const App= () =>  {

    return (
    <>
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="OnBoard" component={OnBoardControl} /> */}
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  </NavigationContainer>
    </>
    );

    
    
  
 
}



const styles = StyleSheet.create({})

export default App;
