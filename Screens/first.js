import React,{useState,useEffect} from "react";
import { View, Image, Text,TouchableWithoutFeedback, 
  Keyboard,Pressable,StyleSheet } from "react-native";
import { Globalstyles } from "../Styles/global";
import { Constants, Permissions } from 'expo';

import * as Contacts from 'expo-contacts';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from "react-native";


export default function First ({navigation} ) {
  



 const pressHandler =() =>{
    navigation.navigate('Signup1');
 }

  const handleSubmit = () => {
    
    navigation.navigate('Signin');
    // console.log(formData.errors.length);
 
   };
   const requestPermissions = async () => {
    try {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log('status lib', status);
      if(status=='granted')  
      setGalleryPermission('granted');
    } catch (error) {
      console.log('error', error);
    }
 
   
  };
  
  useEffect(() => {
    requestPermissions();
  }, []);

   useEffect(() => {
    (async  () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        console.log("GRANTED");
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          for (let i=0;i<data.length;i++)
          
          {
          
            // if()
            try{
            // const namex = data[i].name;
            //  const numberx = data[i].phoneNumbers[0].number;
  
  
  
          // console.log(namex);
          // console.log(numberx);
          // const ali="NAME: "+namex+" \nNumber: "+numberx
          // setcont([...cont,ali])
            }
            catch{
              continue
            }
          //  console.log("S"+cont);
            // console.log("Name: "+namex+"\n Phone no: "+numberx)
            // cont[0]='tahir'
          }
          // setIsLoading(false);
        }

      }
      else{
      //  Alert.alert("Permissions Denied!","Please Grant Contacts and Gallery Permissions from Settings to Continue!");
      
      }
    })();
  }, []);

  
  return(

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>

    <View style={Globalstyles.imgcontainer}>   
   
    <Image source={require("../assets/rings.png")}
            style={styles.image}></Image>
            <Text style={Globalstyles.headerText}>Welcome To YOU & ME Marriage Bureue</Text>
  </View>
            <View style={Globalstyles.imgcontainer}>
            <Pressable style={Globalstyles.button} 
              onPress={handleSubmit}>
              <Text style={Globalstyles.buttontext}>Sign in</Text>
            </Pressable>
            </View>
            <View style={Globalstyles.imgcontainer}>
            <Pressable style={Globalstyles.button} 
              onPress={pressHandler}>
              <Text style={Globalstyles.buttontext}>Sign up</Text>
            </Pressable>
            </View>

          </View>
        
  

    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#EF3D4E'
    },
    datecontainer:{
      flexDirection:'row',
    },
    input1:{
      borderWidth:1,
      borderColor:'#ddd',
      padding:10,
      fontSize:18,
      borderRadius:6, 
      width:150,
    },
    image:{
        height:150,
        width:150,
        marginTop:150
    }
   

  });