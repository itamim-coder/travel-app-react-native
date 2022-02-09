import React, { Component } from 'react'
import { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Home from '../Home/Home';
import LogInScreen from '../LogInScreen/LogInScreen';
import OnBoardScreen from './OnBoardScreen';


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

const OnBoardControl= () =>  {
  const [showOnBoard, setShowOnBoard] = useState(true);

  const handleOnBoardFinish = () => {
  setShowOnBoard(false);
  }
    return (
    <>
    {showOnBoard &&   <OnBoardScreen handleDone={handleOnBoardFinish}/>}
    {!showOnBoard &&   <LogInScreen/>}
    </>
    ); 
  
 
}


const styles = StyleSheet.create({})

export default OnBoardControl;
