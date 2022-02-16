import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../../assets/colors/colors'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import initializeAuthentication from '../../Firebase/firebase.init';
import {  useNavigation } from '@react-navigation/native';

const Profile = () => {

  const navigation = useNavigation();
  initializeAuthentication();
    const auth = getAuth();

    const handleLogout=()=>{
   
      signOut(auth).then(() => {
        navigation.replace("Login")
        
      }).catch((error) => {
          // An error happened.
          alert(error.message)
      })
          ;
    }
  return (
    <>
    <View>
      <Text>Profile {auth.currentUser?.email}</Text>

      <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={()=> navigation.navigate('MyOrder')}
        >
          <Text style={styles.buttonText}>My Order</Text>
        </TouchableOpacity>
      
    </View>
    <View>
        <TouchableOpacity
           onPress={handleLogout}
           style={styles.buttonLogout}
           >
               <Text style={styles.logoutText}>Logout</Text>

           </TouchableOpacity>
    </View>
    </>
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
      buttonLogout:{
        backgroundColor: colors.gray,
        marginHorizontal: 40,
        marginTop: 40,       
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
      },
      logoutText: {       
        fontSize: 18,
        color: colors.black,
      },
})