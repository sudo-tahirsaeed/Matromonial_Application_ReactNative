import React,{useState,useEffect} from "react";
  import { View,Alert, Image, Text, Button,TouchableWithoutFeedback, 
    Keyboard,Pressable,StyleSheet,ActivityIndicator } from "react-native";
    import { Globalstyles } from "../Styles/global";
    import { Constants, Permissions } from 'expo';

    import {BackHandler} from 'react-native';
  import { TextInput } from "react-native";
  import axios from 'axios';
  import * as Contacts from 'expo-contacts';

  
  
  export default function Signin ({navigation}) {
 


    const [text1,setText] = useState('Sign in');
 


    var err=0;
  
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        confirmPassword:'',
        errors:{},
    });


    const validateForm = () => {
        let errors = {};
        
        if (!formData.username) {
          errors.username = 'Username is required';
          err=err+1;
        }

        if (!formData.password) {
          errors.password = 'Password is required';
          err=err+1;
        } else if (formData.password.length < 6) {
          errors.password = 'Password must be at least 6 characters';
          err=err+1;
        }
      
        if (!formData.confirmPassword) {
          errors.confirmPassword = 'Confirm password is required';
          err=err+1;
        } else if (formData.password !== formData.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
          err=err+1;
        }
      
        setFormData({ ...formData, errors });
      };
      const [hasErrors, setHasErrors] = useState(false);
      
      const handleSubmit = () => {
      //  validateForm();
      
       setText("Please Wait")
    
        if (err == 0) {
           
            const data1={
              username: formData.username,
              password: formData.password
              
            }
            // console.log(cont);

           



            axios.post('https://average-cape-dove.cyclic.app/checkcredentials', {data1} )
        .then(response => {
         
          if(response.data=='1')
          {
            setText("Sign In")
            navigation.navigate('Feed',{formData});
          }
          else{
            setText("Sign In")
            console.log("AUTHENTICATION FAIL SHOW ALERT ");
            Alert.alert("Invalid Credentials !","Please Enter Valid Username and Password")
          }
          
        })
        .catch(error => {
          setText("Sign In")
          Alert.alert("Network Error !","Cant Connect To Server")
          
          console.log(error);
        });
      
            
           


 

            setHasErrors(false);
            // navigation.navigate('Feed');
            // console.log(formData.confirmPassword);
            // console.log(err);
            // console.log(formData.username);
            
        }else{
            setHasErrors(true);
        }
      };
     



  
        
 
      
      

   
    return(
  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Globalstyles.container}>
      <View style={Globalstyles.header}>
      <Image source={require("../assets/rings.png")}

              style={Globalstyles.headerimage}></Image>
             
          <Text style={Globalstyles.headerText}>YOU & ME</Text>
          </View>
          
            <View>
              
              <View style={Globalstyles.imgcontainer}>
              <Image source={require("../assets/login.png")}
              style={Globalstyles.image}></Image>
              </View>
              
              <Text style={Globalstyles.titleText}>Username</Text>
              <TextInput style={Globalstyles.input1}
              placeholder='Enter username'
              value={formData.username}
              onChangeText={(text) => setFormData({ ...formData, username: text })}
              >
              </TextInput>
              {formData.errors.username && <Text style={Globalstyles.errortext}>{formData.errors.username}</Text>}
         
  
              <Text style={Globalstyles.titleText}>Password</Text>
  
              <View style={styles.datecontainer}>

              <TextInput style={Globalstyles.input1} 
               placeholder='Enter password'
               secureTextEntry={true} 
               value={formData.password}
               onChangeText={(text) => setFormData({ ...formData, password: text })}
               
               ></TextInput>
               {formData.errors.password && <Text style={Globalstyles.errortext}>{formData.errors.password}</Text>}


              {/* {hasErrors && <Text>Please fix the errors above</Text>} */}
                </View>
                
              
  
              <View style={Globalstyles.imgcontainer}>
              <Pressable style={Globalstyles.profButton}  onPress={handleSubmit} >
                <Text style={Globalstyles.buttontext}>{text1}</Text>
              </Pressable>
              </View>
  
            </View>

      </View>
      </TouchableWithoutFeedback>
    )
  }
  
  const styles = StyleSheet.create({
     
      input1:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6, 
        width:150,
      },
     
  
    });









                                              // HUZAIFA CODE
// import React,{useState} from "react";
//   import { View, Image, Text, Button,TouchableWithoutFeedback, 
//     Keyboard,Pressable,StyleSheet } from "react-native";
//   import { Globalstyles } from "../Styles/global";
  
//   import { TextInput } from "react-native";
  
  
  
  
  
//   export default function Signin ({navigation}) {

//     var err=0;
  
//     const [formData, setFormData] = useState({
//         username:'',
//         password:'',
//         confirmPassword:'',
//         errors:{},
//     });


//     const validateForm = () => {
//         let errors = {};
        
//         if (!formData.username) {
//           errors.username = 'Username is required';
//           err=err+1;
//         }

//         if (!formData.password) {
//           errors.password = 'Password is required';
//           err=err+1;
//         } else if (formData.password.length < 6) {
//           errors.password = 'Password must be at least 6 characters';
//           err=err+1;
//         }
      
//         if (!formData.confirmPassword) {
//           errors.confirmPassword = 'Confirm password is required';
//           err=err+1;
//         } else if (formData.password !== formData.confirmPassword) {
//           errors.confirmPassword = 'Passwords do not match';
//           err=err+1;
//         }
      
//         setFormData({ ...formData, errors });
//       };
//       const [hasErrors, setHasErrors] = useState(false);
      
//       const handleSubmit = () => {
//       //  validateForm();
      
       
    
//         if (err == 0) {

          
//             setHasErrors(false);
//             navigation.navigate('Feed');
//             // console.log(formData.confirmPassword);
//             // console.log(err);
//             // console.log(formData.username);
            
//         }else{
//             setHasErrors(true);
//         }
//       };


   
//     return(
  
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={Globalstyles.container}>
//       <View style={Globalstyles.header}>
//           <Image source={require("../assets/rings.png")}
//               style={Globalstyles.headerimage}></Image>
             
//           <Text style={Globalstyles.headerText}>YOU & ME</Text>
//           </View>
          
//             <View>
              
//               <View style={Globalstyles.imgcontainer}>
//                <Image source={require("../assets/login.png")}
//               style={Globalstyles.image}></Image>
//               </View>
              
//               <Text style={Globalstyles.titleText}>Username</Text>
//               <TextInput style={Globalstyles.input1}
//               placeholder='Enter username'
//               value={formData.username}
//               onChangeText={(text) => setFormData({ ...formData, username: text })}
//               >
//               </TextInput>
//               {formData.errors.username && <Text style={Globalstyles.errortext}>{formData.errors.username}</Text>}
         
  
//               <Text style={Globalstyles.titleText}>Password</Text>
  
//               <View style={styles.datecontainer}>

//               <TextInput style={Globalstyles.input1} 
//                placeholder='Enter password'
//                secureTextEntry={true} 
//                value={formData.password}
//                onChangeText={(text) => setFormData({ ...formData, password: text })}
               
//                ></TextInput>
//                {formData.errors.password && <Text style={Globalstyles.errortext}>{formData.errors.password}</Text>}


//               {/* {hasErrors && <Text>Please fix the errors above</Text>} */}
//                 </View>
                
              
  
//               <View style={Globalstyles.imgcontainer}>
//               <Pressable style={Globalstyles.profButton}  onPress={handleSubmit} >
//                 <Text style={Globalstyles.buttontext}>Continue</Text>
//               </Pressable>
//               </View>
  
//             </View>

//       </View>
//       </TouchableWithoutFeedback>
//     )
//   }
  
//   const styles = StyleSheet.create({
     
//       input1:{
//         borderWidth:1,
//         borderColor:'#ddd',
//         padding:10,
//         fontSize:18,
//         borderRadius:6, 
//         width:150,
//       },
     
  
//     });
    