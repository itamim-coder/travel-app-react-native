import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';

const LogInScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    initializeAuthentication();
    const auth = getAuth();

    const navigation = useNavigation()

    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            if (user) {
               navigation.navigate("Home")
            }
        })
    },[])

    
    

    const handleSignUp =()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
        })
        .catch(error => alert(error.message))
    }    
    const handleSignin =()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
        })
        .catch(error => alert(error.message))
    }    

    return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
       <View style={styles.inputContainer}>
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text) }
        style={styles.input}
        >            
        </TextInput>
        <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        >            
        </TextInput>
       </View>

       <View style={styles.buttonContainer}>
           <TouchableOpacity
           onPress={handleSignin}
           style={styles.button}
           >
               <Text style={styles.buttonText}>Login</Text>

           </TouchableOpacity>
           <TouchableOpacity
           onPress={handleSignUp}
           style={[styles.button, styles.buttonOutline]}
           >
               <Text style={styles.buttonOutlineText}>Register</Text>

           </TouchableOpacity>
       </View>


    </KeyboardAvoidingView>
    );
};

export default LogInScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%'

    },
input:{
 backgroundColor: 'white',
 padding: 10,
 borderRadius: 10,
 marginTop: 5,
},
buttonContainer:{
  width: '60%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 40,
},
button:{
  width: '100%',
  backgroundColor: '#0782F9',
  padding: 15,
  borderRadius: 10,
  alignItems:'center',

},
buttonOutline:{
  backgroundColor: 'white',
  marginTop: 5,
  borderColor:'#0782F9',
  borderWidth: 2,
},
buttonText:{
 color: 'white',
 fontWeight: '700',
 fontSize: 16,
},
buttonOutlineText:{
 color: '#0782F9',
 fontWeight: '700',
 fontSize: 16,
},

    
})