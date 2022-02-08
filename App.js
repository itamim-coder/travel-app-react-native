import React, { Component } from 'react'
import { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import OnBoardScreen from './src/components/OnBoardScreen/OnBoardScreen'
import Home from './src/components/Home/Home'

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

const App= () =>  {
  const [showOnBoard, setShowOnBoard] = useState(true);

  const handleOnBoardFinish = () => {
  setShowOnBoard(false);
  }
    return (
    <>
    {showOnBoard &&   <OnBoardScreen handleDone={handleOnBoardFinish}/>}
    {!showOnBoard &&   <Home/>}
    </>
    )
 
}

const styles = StyleSheet.create({})

export default App;
