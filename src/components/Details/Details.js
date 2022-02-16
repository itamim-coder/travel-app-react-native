import React from 'react';
import { Button, ScrollView, Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height;

const Details = ({route, navigation}) => {

    const {item} = route.params;
    return (
      <ScrollView>
        <View style={styles.container}>
         <ImageBackground
          source={{ uri: `${item.image}` }}
          style={styles.backgroundImage}
         >
             <TouchableOpacity
             style={styles.backIcon}
             onPress={()=> navigation.goBack()}
             >
                  <Entypo name="chevron-left" size={32}  />
             </TouchableOpacity>
             <View style={styles.titlesWrapper}>
              <Text style={styles.titlesText}>{item.name}</Text>
             </View>
            
        </ImageBackground>   
        <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>
        
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={()=> navigation.navigate('OrderForm', {      
            item: item,
         })}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
        
            

        </View>        
        </View>   
     </ScrollView>     
 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      backgroundImage: {
        height: height * 0.6,
        justifyContent: 'space-between',
      },
descriptionWrapper: {
  flex: 1,
  backgroundColor: colors.white,
  marginTop: -20,
  borderRadius: 25,
},
backIcon: {
  marginLeft: 5,
  marginTop: 50,
},
titlesWrapper: {
  marginHorizontal: 20,
  marginBottom: 40,
  
},
titlesText:{
  fontSize: 32,
  color: colors.orange,
},
heartWrapper:{
  position: 'absolute',
  right: 30,
  top: -30,
  width: 60,
  height: 60,
  backgroundColor: colors.gray,
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 9,
},
descriptionTextWrapper: {
  marginTop: 30,
  marginHorizontal: 20,
},
descriptionTitle: {
  fontSize: 24,
  color: colors.black,
},
descriptionText: {
  marginTop: 20,
  fontSize: 16,
  color: colors.darkGray,
  height: 85,
},
infoWrapper: {
  flexDirection: 'row',
  marginHorizontal: 20,
  marginTop: 20,
  justifyContent: 'space-between',
},
infoTitle: {
 
  fontSize: 12,
  color: colors.gray,
},
infoTextWrapper: {
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginTop: 5,
},
infoText: {
  // fontFamily: 'Lato-Bold',
  fontSize: 24,
  color: colors.orange,
},
infoSubText: {
  // fontFamily: 'Lato-Bold',
  fontSize: 14,
  color: colors.gray,
},
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

export default Details;