import React, { useEffect, useState } from 'react';
import { Button, FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../assets/colors/colors';

const Home = ({navigation}) => {

  const [packages, setpackages] = useState([])

  useEffect(() =>{
      fetch('https://murmuring-garden-76576.herokuapp.com/packages')
      .then(res => res.json())
      .then(data => setpackages(data))
  }, [])

  const renderDiscoverItem = ({item}) =>{
    return(
      <TouchableOpacity
      onPress={()=> navigation.navigate('Details', {      
         item: item,
      })}
      >
        <ImageBackground
        source={{ uri: `${item.image}` }}
        style={[styles.discoverItem, 
          {marginLeft: item.id ? 20 : 0},
        ]}
        imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.destination}</Text>
          <Text style={styles.discoverItemPrice}>Price: ${item.price}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  const renderLearnMoreItem = ({item}) =>{
    return(
      <TouchableOpacity
      onPress={()=> navigation.navigate('Details', {      
         item: item,
      })}
      >
        <ImageBackground
        source={{ uri: `${item.image}` }}
        style={[styles.learnMoreItem, 
          {marginLeft: item.id ? 20 : 0},
        ]}
        imageStyle={styles.learnMoreItemImage}
        >
          <Text style={styles.learnMoreItemTitle}>{item.destination}</Text>
         
        </ImageBackground>
      </TouchableOpacity>
    )
  }


    return (
      <View style={styles.container}>
      
      <ScrollView>
        {/* Discover */}
        <SafeAreaView>
          <View style={styles.discoverWrapper}>
            <Text style={styles.discoverTitle}>Our Packages</Text>
            <View style={styles.discoverCategoriesWrapper}>
            <Text style={[styles.discoverCategoryText, {color: colors.orange}]}>
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={packages}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>    

          </View>
             {/* Learn More */}
         <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={packages}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.white,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
   
  },
 
  discoverWrapper: {
    marginTop: 20,

  },
  discoverTitle: {
    marginHorizontal: 20,
    fontSize: 32,
    // fontFamily: 'Lato-Bold'

  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontSize: 16,
    color: colors.gray,
  },
  
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,


  },
  discoverItemTitle: {
    fontSize: 18,
    color: colors.darkGray,

  },
  discoverItemPrice: {
    fontSize: 18,
  },
  learnMoreWrapper:{
    marginTop: 20,
  },
learnMoreTitle:{
  marginHorizontal: 20,
  fontSize: 24,
  color: colors.black,
  fontWeight: 'bold',
},
learnMoreItem: {
  width: 170,
  height: 180,
  justifyContent: 'flex-end',
  marginRight: 20,
},
learnMoreItemImage: {
 borderRadius: 20,
},
learnMoreItemTitle: {
  fontSize: 18,
  marginHorizontal: 20,
  marginVertical: 20,
},

         
  
  
})

export default Home;