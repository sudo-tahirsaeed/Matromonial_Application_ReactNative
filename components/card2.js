import React, {useState,Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text, Image, TouchableOpacity,ScrollView,Alert,Modal } from "react-native";


let signinuser=''
export default function MaterialCard2({data,navigation} ) {


  
  const getData = async (a) => {
    try {
      const value = await AsyncStorage.getItem('@signinuser')
      if(value !== null) {
        console.log("USERNAME FROM STORAGE IS CARD SIDE: "+value);
signinuser=value
      }
      // console.log(value);
    } catch(e) {
      console.log("SORRY BHAIYA ");
    }
  }
  getData("p");



  // if(data.profilepicurl!="")s
const profilepic=data.profilepicurl
// console.log(profilepic);

  
// console.log(data1);
const pressHandler = ()=>{
  const data1={
    username: data.username,
    sign: signinuser
  }

navigation.navigate('Displayprof2',{data1});
}
  return (
    
      
    <View style={styles.container}>
      
    
  
      
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
            {/* <Text>Display 2</Text> */}
          <Text style={styles.titleStyle}>{data.name}</Text>
          <Text style={styles.subtitleStyle}>{'Age: '+data.age}</Text>
          <Text style={styles.subtitleStyle}>{'Relation: '+data.maritalstat}</Text>
          <Text style={styles.subtitleStyle}>{'Height: '+data.height}</Text>
          <Text style={styles.subtitleStyle}>{'Education: '+data.education}</Text>
          <Text style={styles.subtitleStyle}>{'Work: '+data.work}</Text>

        </View>
        <Image
          // key={this.state.on}
          source={{uri: profilepic}} 
          style={styles.cardItemImagePlace}
        ></Image>
        
      </View>
    
      <View style={styles.actionBody}>
        <TouchableOpacity onPress={pressHandler}  style={styles.actionButton1}>
          <Text style={styles.actionText1}> Details </Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    paddingTop:5,
    fontSize: 14,
    color: "#878787",
    lineHeight: 16,
    opacity: 1,
    fontWeight:400
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    borderRadius:25,
    height: 120,
    width: 120,
    margin: 16
  },
  actionBody: {
    padding: 12,
    marginLeft: 80,
    marginRight:80
  },
  actionButton1: {
    padding: 0,
    height: 40,
    // width:90,
    justifyContent:"center",
    color: '#FFFFFF',
    fontSize:15
    
    
  },
  buttonBody:{
    flexDirection:'row',
    alignItems:'center'
  },
  actionText1: {
    fontSize: 16,
    backgroundColor: '#EF3D4E',
paddingRight: 7,
paddingBottom: 6,

paddingTop: 6,
paddingLeft: 7,
borderRadius:25,
fontWeight: "500",
    color: "#FFFFFF",
    opacity: 1,

alignSelf:'center'
    
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  actionText2: {
    fontSize: 14,
    color: "#000",
    opacity:0.9
}
});