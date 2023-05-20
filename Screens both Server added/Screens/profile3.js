import React,{useState,useEffect} from "react";
  import { View, Image, Text, Button,TouchableWithoutFeedback, 
    Keyboard,Pressable,StyleSheet } from "react-native";
  import { Globalstyles } from "../Styles/global";
  import { TextInput } from "react-native";
  import {BackHandler} from 'react-native';
  import { useRoute } from "@react-navigation/native";
  
  const randomNum = Math.floor(Math.random() * 999);
    // console.log('Random number:', randomNum);
  
  export default function Profile3 ({navigation}) {
    
    
    useEffect(() => {

      const backHandler = BackHandler.addEventListener(
              'hardwareBackPress',
              () => {
                return true;
              },
            );
            return () => backHandler.remove();
      });

      const nickroute = useRoute()
      const nickname = nickroute.params?.nickNameInput;

      const route = useRoute()
      const formdata = route.params?.signupData
      const newf = JSON.stringify(formdata);
      console.log(newf);
      let jsonObject = JSON.parse(newf)

  
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
  
    let key6 = "email";
    let em = jsonObject[key6];
  
    let key7 = "phoneno";
    let num = jsonObject[key7];

    let key8 = "city";
    let cit = jsonObject[key8];
    
    let key9 = "height";
    let hite = jsonObject[key9];
  
    let key10 = "work";
    let wrk = jsonObject[key10];
  
    let key11 = "marital-status";
    let marit = jsonObject[key11];
  
    let key12 = "insterested-in";
    let intrst = jsonObject[key12];

    let key13 = "education";
    let edu = jsonObject[key13];
    
    let key14 = "nick name";
    let nick = jsonObject[key14];
  
    let key15 = "description";
    let descr = jsonObject[key15];
  
    let key16 = "prefage";
    let prage = jsonObject[key16];

    let key17 = "hobbies";
    let hob = jsonObject[key17];
  



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
       validateForm();
      
       
    
        if (err == 0) {

          const signupData ={
            'name': s1name,
            'age': s1age,
            'gender': gen,
            'religion': rel,
            'community': comm,
            'country': cntry,
            'email': em,
            'phoneno': num,
            'city': cit,
            'height': hite,
            'work': wrk,
            'marital-status': marit,
            'insterested-in': intrst,
            'education': edu,
            'nick name': nick,
            'description': descr,
            'prefage': prage,
            'hobbies': hob,
            'username': formData.username,
            'password': formData.confirmPassword,
          }
            setHasErrors(false);
            navigation.navigate('Profile4',{signupData});
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
          
            <View >
              
              <View style={Globalstyles.imgcontainer}>
               <Image source={require("../assets/username.png")}
              style={Globalstyles.image}></Image>
              </View>
              
              <Text style={Globalstyles.titleText}>Username</Text>
              <TextInput style={Globalstyles.input11}
              // editable={false}
              placeholder='Enter Username'
              value={formData.username}
              onChangeText={(text) => setFormData({ ...formData, username: (nickname)+(randomNum)})}
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

               <Text style={Globalstyles.titleText}>Re-Enter Password</Text>
               <TextInput style={Globalstyles.input1} 
               placeholder='Re-Enter password'
               secureTextEntry={true} 
               value={formData.confirmPassword}
               onChangeText={(text) =>
                 setFormData({ ...formData, confirmPassword: text })}
               
               ></TextInput>
              {formData.errors.confirmPassword && (<Text style={Globalstyles.errortext}>{formData.errors.confirmPassword}</Text>)}


              {/* {hasErrors && <Text>Please fix the errors above</Text>} */}
                </View>
                
              
  
              <View style={Globalstyles.imgcontainer}>
              <Pressable style={Globalstyles.profButton}  onPress={handleSubmit} >
                <Text style={Globalstyles.buttontext}>Continue</Text>
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
    