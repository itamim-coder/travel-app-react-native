import React from 'react';
import { Button, Text, View } from 'react-native';

const Home = ({navigation}) => {
    return (
      <View>
      <Text>Home</Text>
      <Button onPress={()=> navigation.navigate('Details')} title="Click Me!" />
      </View>
    );
};

export default Home;