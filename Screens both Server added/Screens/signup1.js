import React,{useState, useEffect} from "react";
import { View, Image, Text, Button,TouchableWithoutFeedback, 
  Keyboard,Pressable,StyleSheet } from "react-native";
import { Globalstyles } from "../Styles/global";
import { TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {BackHandler} from 'react-native';



export default function Signup1 ({navigation} ) {

  // useEffect(() => {

  //   const backHandler = BackHandler.addEventListener(
  //           'hardwareBackPress',
  //           () => {
  //             return true;
  //           },
  //         );
  //         return () => backHandler.remove();
  //   });
  
  var err=0;

  const [genderInput, sertGenderInput] = useState(null);
  const [error, setError] = useState('');
 
  const data = [
    {key:'1', value:'Male'},
    {key:'2', value:'Female'},
   
]



  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender:'',
    errors: {}
  });
  // const [newdata,setNewdata] = useState(formData);
  // const myArray = Object.keys(formData).map(key => ({ key, value: formData[key]}))
  const validateForm = () => {
    let errors = {};
  
    if (!formData.name) {
      errors.name = 'Name is required';
      err=err+1;
    } else if (formData.name.length<6) {
      errors.name = 'Name must be at least 6 characters';
      err=err+1;
    }
  
    if (!formData.age) {
      errors.age = 'Age is required';
      err=err+1;
    } else if (formData.age<18) {
      errors.age = 'Age must be above 18 years old!';
      err=err+1;
    }
    if (!genderInput) {
      setError('Please select an option');
    } else {
      setError('');
      // TODO: Submit form logic here
    }
  
  
    setFormData({ ...formData, errors });
  };

  const handleSubmit = () => {
    validateForm();
    // console.log(formData.errors.length);
 
     if (err == 0) {
         
        formData.gender=genderInput;
         navigation.navigate('Signup2',{formData});
        //  console.log(formData.name);
        //  console.log(formData.age);
        //  console.log(genderInput);
         console.log(err);
         
     }else{
         
     }
   };
  
  return(

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={Globalstyles.container}>

          
          <View>
            <View style={Globalstyles.imgcontainer}>
             <Image source={require("../assets/user.png")}
            style={Globalstyles.image}></Image>
            </View>
            
            <Text style={Globalstyles.titleText}>This Profile is for</Text>
            <TextInput style={Globalstyles.input1} 
             placeholder='Enter Your Name'
             value={formData.name}
              onChangeText={(text) =>
              setFormData({ ...formData, name: text })}
             ></TextInput>

          {formData.errors.name && <Text style={Globalstyles.errortext}>{formData.errors.name}</Text>}

            <Text style={Globalstyles.titleText}>Age</Text>

            {/* <View style={styles.datecontainer}> */}
            <TextInput style={styles.input1} 
             placeholder='Enter Age'
             keyboardType='numeric'
             value={formData.age}
              onChangeText={(text) =>
              setFormData({ ...formData, age: text })}
             
             ></TextInput>
            
            {formData.errors.age && <Text style={Globalstyles.errortext}>{formData.errors.age}</Text>}

             
              {/* </View> */}
              
            

            <Text style={Globalstyles.titleText}>Gender</Text>
            
            {/* <View style={Globalstyles.gendercontainer}> */}
            <SelectList
                placeholder="Select Gender"
                setSelected={(genderInput) => sertGenderInput(genderInput)} 
                data={data} 
                save="value"
                />
                {error ? <Text style={Globalstyles.errortext}>{error}</Text> : null}
  
            <View style={Globalstyles.imgcontainer}>
            <Pressable style={Globalstyles.button} 
              onPress={handleSubmit}
            >
              <Text style={Globalstyles.buttontext}>Continue</Text>
            </Pressable>
            </View>

          </View>
        
      {/* </Formik> */}
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
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
   

  });
  