import React,{useState} from "react";
import { View, Image, Text,TouchableWithoutFeedback, 
  Keyboard,Pressable,StyleSheet } from "react-native";
import { Globalstyles } from "../Styles/global";




export default function First ({navigation} ) {

 const pressHandler =() =>{
    navigation.navigate('Signup1');
 }

  const handleSubmit = () => {
    
    navigation.navigate('Signin');
    // console.log(formData.errors.length);
 
   };
  
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
  