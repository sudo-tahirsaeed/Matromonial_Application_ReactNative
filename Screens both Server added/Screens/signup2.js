import React,{useState,useEffect} from "react";
import { View, Image, Text, Button,TouchableWithoutFeedback, 
  Keyboard,Pressable,StyleSheet } from "react-native";
import { Globalstyles } from "../Styles/global";
import { TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
import {BackHandler} from 'react-native';





// ADDING DETAILS ON SIGN UP
// const data2={
//   username: 'tahir7', name: 'TAHIR SAEED',age: '23', gender: 'M', interests: 'program', phoneno: '310', country: 'PAK',
//    maritalstat: 'Single', work: 'Coder', prefferedage: '20-22', country: 'RWP',
//   religion: 'Islam', caste: 'AWAN', height: '5.6', description: 'I dont know', hobbies: 'cricket,football'

// }

export default function Signup2 ({navigation}) {


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
  const formdata = route.params?.formData
  var err=0;
 
  const newf = JSON.stringify(formdata);
  console.log(newf);
  let jsonObject = JSON.parse(newf);

// Access the value of a key stored in a string variable
  let key = "name";
  let s1name = jsonObject[key];
  
  let key1 = "age";
  let s1age = jsonObject[key1];

  let key2 = "gender";
  let gen = jsonObject[key2];

  
  

  
  

  const [formData, setFormData] = useState({
    religion: '',
    community: '',
    country:'',
    errors: {}
  });

  const validateForm = () => {
    let errors = {};
  
    if (!formData.religion) {
      errors.religion = 'Religion is required';
      err=err+1;
    } else if (formData.religion.length<2) {
      errors.religion = 'Religion must be at least 2 characters';
      err=err+1;
    }
  
    if (!formData.community) {
      errors.community = 'community is required';
      err=err+1;
    } 

    if (!formData.country) {
      errors.country = 'country is required';
      err=err+1;
    } else if (formData.country.length<4) {
      errors.country = 'country must be at least 4 characters';
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
          'religion': formData.religion,
          'community': formData.community,
          'country': formData.country
        }
        // console.log(signupData.gen);
        navigation.navigate('Signup3',{signupData})
        //  console.log(formData.religion);
        //  console.log(formData.community);
        //  console.log(formData.country);
        //  console.log(err);
         
     }else{
         
     }
   };

  // const {formData} = route.params;
  // const { data } = route.params;
  
  
  return(

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={Globalstyles.container}>
     
          <View>
            <View style={Globalstyles.imgcontainer}>
             <Image source={require("../assets/group.png")}
            style={Globalstyles.image}></Image>
            </View>
            {/* <Text>{navigation.getParam('formData')}</Text> */}
            <Text style={Globalstyles.titleText}>Your Religion</Text>
            <TextInput style={Globalstyles.input1} 
             placeholder='Enter Your Religion'
             value={formData.religion}
              onChangeText={(text) =>
              setFormData({ ...formData, religion: text })}
             ></TextInput>

            {formData.errors.religion && <Text style={Globalstyles.errortext}>{formData.errors.religion}</Text>}

            <Text style={Globalstyles.titleText}>Community</Text>
            <TextInput style={Globalstyles.input1} 
             placeholder='Enter Your Community'
             value={formData.community}
             onChangeText={(text) =>
             setFormData({ ...formData, community: text })}
             ></TextInput>

        {formData.errors.community && <Text style={Globalstyles.errortext}>{formData.errors.community}</Text>}

            <Text style={Globalstyles.titleText}>Currently Living in</Text>
            <TextInput style={Globalstyles.input1} 
             placeholder='Where you live (Country)'
             value={formData.country}
              onChangeText={(text) =>
              setFormData({ ...formData, country: text })}
             ></TextInput>
            {formData.errors.country && <Text style={Globalstyles.errortext}>{formData.errors.country}</Text>}

            
        
            <View style={Globalstyles.imgcontainer}>
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={Globalstyles.buttontext}>Continue</Text>
            </Pressable>
            </View>

          </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    button:{
    marginTop:50,
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
  