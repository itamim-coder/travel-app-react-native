import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import colors from '../../../../assets/colors/colors'

const MyOrder = ({}) => {
    const [myOrders, setMyOrders] = useState([])
    const auth = getAuth();


    const userEmail = auth.currentUser.email;

    useEffect(()=>{
        fetch(`https://stormy-woodland-20048.herokuapp.com/myorder/${userEmail}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[])  
   
  return (
    <View style={styles.myOrderWrapper}>
      <Text style={styles.myOrderTitle} >My Order</Text>
     
     {
         myOrders.map((myOrder) =>
         
         (
             <View style={styles.order}>     
                 <Text>Ordered product: {myOrder.productName}</Text>
                 <Text>Address: {myOrder.address}</Text>
             </View>
         ))
     }
    </View>
  )
}

export default MyOrder

const styles = StyleSheet.create({
    myOrderWrapper:{
        backgroundColor: colors.white,
        paddingHorizontal: 20,
    },
    myOrderTitle:{
        fontSize: 56,
        fontWeight:"bold",
    },
    order:{
        backgroundColor: colors.gray,
        marginTop: 10,
        padding: 20,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
       
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,

    }
})