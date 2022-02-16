import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../../assets/colors/colors'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAuth } from 'firebase/auth'

const Profile = ({navigation}) => {
    const auth = getAuth();
  return (
    <View>
      <Text>Profile {auth.currentUser.email}</Text>

      <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={()=> navigation.navigate('MyOrder')}
        >
          <Text style={styles.buttonText}>My Order</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
      },
      buttonText: {
        // fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
      },
})