import React,{useState,useEffect} from "react";
import { View, Image, Text, Button,TouchableWithoutFeedback, 
  Keyboard,Pressable,StyleSheet } from "react-native";
import { Globalstyles } from "../Styles/global";
import { TextInput } from "react-native";
import {BackHandler} from 'react-native';
import { useRoute } from "@react-navigation/native";






export default function Signup3 ({navigation} ) {

  useEffect(() => {

    const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
              return true;
            },
          );
          return () => backHandler.remove();
    });
    

    const route = useRoute()
    const formdata = route.params?.signupData
    const newf = JSON.stringify(formdata);
    console.log(newf);
    let jsonObject = JSON.parse(newf);


  let key = "name";
  let s1name = jsonObject[key];


  let key1 = "age";
  let s1age = jsonObject[key1];

  let key2 = "gender";
  let gen = jsonObject[key2];

  let key3 = "religion";
  let rel = jsonObject[key3];

  
  
  let key4 = "community";
  let comm = jsonObject[key4];

  let key5 = "country";
  let cntry = jsonObject[key5];
  
  var err=0;

  const [formData, setFormData] = useState({
    email: '',
    number: '',
    errors: {},
  });

  const validateForm = () => {
    let errors = {};
  
    if (!formData.email) {
      errors.email = 'Email is required';
      err=err+1;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid! It must have a special character.';
      err=err+1;
  }
  
  
    if (!formData.number) {
      errors.number = 'Phone number is required';
      err=err+1;
    }
    else if (/^\d{10}$/.test(formData.number)) {
      errors.number = 'Invalid number';
      err=err+1;
  }
  
  
    setFormData({ ...formData, errors });
  };

  const handleSubmit = () => {
    validateForm();
    // console.log(formData.errors.length);
 
     if (err == 0) {
      const signupData ={
        'name': s1name,
        'age': s1age,
        'gender': gen,
        'religion': rel,
        'community': comm,
        'country': cntry,
        'email': formData.email,
        'phoneno': formData.number
      }
      navigation.navigate('Profile1',{signupData})
         console.log(formData.email);
         console.log(formData.number);
         
         console.log(err);
         
     }else{
         
     }
   };

  
  return(

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={Globalstyles.container}>

          <View>
            <View style={Globalstyles.imgcontainer}>
             <Image source={require("../assets/protection.png")}
            style={Globalstyles.image}></Image>
            </View>
            <Text style={styles.secText}>An active email ID and phone no.</Text>
            <Text style={styles.sec1Text}>are required to secure your profile.</Text>
            
            <Text style={Globalstyles.titleText}>EMAIL ID</Text>
            <TextInput style={Globalstyles.input1} 
             placeholder='Enter your email'
             value={formData.email}
              onChangeText={(text) =>
              setFormData({ ...formData, email: text })}
             ></TextInput>
             {formData.errors.email && <Text style={Globalstyles.errortext}>{formData.errors.email}</Text>}

            <Text style={Globalstyles.titleText}>Mobile Number</Text>
            <TextInput style={Globalstyles.input1} 
             placeholder='Enter your mobile number'
             keyboardType='numeric'
             value={formData.number}
              onChangeText={(text) =>
              setFormData({ ...formData, number: text })}
             ></TextInput>
             {formData.errors.number && <Text style={Globalstyles.errortext}>{formData.errors.number}</Text>}


            <View style={Globalstyles.imgcontainer}>
            <Pressable style={styles.button} onPress={handleSubmit} >
              <Text style={Globalstyles.buttontext}>Submit</Text>
            </Pressable>
            </View>

            <Text style={styles.accText}>By creating the account, you agree</Text>
            <Text style={styles.secText}> to our privacy policy and T&C.</Text>

          </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    sec1Text:{
        textAlign:'center',
        fontSize:18,
        marginBottom:10

    },
    secText:{
        textAlign:'center',
        fontSize:18,

    },
    accText:{
        marginTop:15,
        textAlign:'center',
        fontSize:18,
    },
    button:{
        marginTop:40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        width:300,
        elevation: 3,
        backgroundColor: '#1e88e5',
        }
  });
  