import React,{useState,useEffect} from "react";
import { View, Image, Text, Button,TouchableWithoutFeedback, 
  Keyboard,Pressable,StyleSheet, Alert ,ActivityIndicator} from "react-native";
import { Globalstyles } from "../Styles/global";
import axios from 'axios';
import {BackHandler} from 'react-native';

import cloudinary from 'cloudinary-core';
import { useRoute } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { Constants, Permissions } from 'expo';

import * as Contacts from 'expo-contacts';

const cl = new cloudinary.Cloudinary({ cloud_name: 'dvjggsoix' });


// cloudinary.config({
//     cloud_name: "",
//     api_key: "797154381313723",
//     api_secret: "sCPHx07FunixcKivxg5JWh7Rf1k"
//   });

export default function Profile4_img ({navigation} ) {


  const [conta,setconta] = useState([]);
  const [text2,setText2] = useState('Submit');
  const [text3,setText3] = useState('Pick an image from camera roll');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
    // console.log(newf);
    let jsonObject = JSON.parse(newf)
  
  const [iurl,setiurl]=useState('')
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

    let key17 = "username";
    let usrname = jsonObject[key17];
  
    let key18 = "password";
    let pass = jsonObject[key18];

    let key19 = "hobbies";
    let hob = jsonObject[key19];
const store=()=>{
  setText2("Please Wait")
  setText2("Uploading..")
  
  if(iurl=='')
  {
    Alert.alert("Upload Image","Please Upload your Profile Picture for better matches!")
  }
  else{
   
  const signupData ={
    'name': s1name,
    'age': s1age,
    'gender': gen,
    'religion': rel,
    'caste': comm,
    'country': cntry,
    'email': em,
    'phoneno': num,
    'city': cit,
    'height': hite,
    'work': wrk,
    'maritalstat': marit,
    'interests': intrst,
    'education': edu,
    'nickname': nick,
    'description': descr,
    'prefage': prage,
    'username': usrname,
    'password': pass,
    'hobbies': hob,
    'profilepicurl':iurl
  }
  const data2= { username: signupData.username,
    name: signupData.name,
    age: signupData.age,
    gender: signupData.gender,
    interests: signupData.interests,
    phoneno: signupData.phoneno,
    country: signupData.country,
    maritalstat: signupData.maritalstat,
    work: signupData.work,
    prefage: signupData.prefage,
    city: signupData.city,
    religion: signupData.religion,
    caste: signupData.caste,
    height: signupData.height,
    description: signupData.description,
    hobbies: signupData.hobbies,
    email: signupData.email,
    education: signupData.education,
    nickname: signupData.nickname,
    profilepicurl: signupData.profilepicurl
    
    
  

};

  
  axios.post('https://average-cape-dove.cyclic.app/adddetails', {data2} )
  .then(response => {
      console.log(response);
  })
  .catch(error => {
      console.log(error);
  });


  const data= { user: signupData.username,passw: signupData.password };

    //  ADDING LOGIN CREDENTIALS ON SIGN UP
    axios.post('https://average-cape-dove.cyclic.app/addtologin', {data} )
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });


    const save={
      ux: signupData.username,
      dtx: conta
    }
    // console.log(save.dtx);
    console.log("CONTACTS BEFORE AXIO: "+conta);
    axios.post('https://average-cape-dove.cyclic.app/savecontacts',{save})
    .then(response => {
    
    console.log("Contact uploaded ");     
    })
    .catch(error => {
        console.log(error);
    
    });
    Alert.alert("Signup Sucessfull! ","You can sign-in with Credentials!")

navigation.navigate('Signin')
  

}
}





const [isLoading, setIsLoading] = useState(true);
const  [image, setImage] = useState('')
    
const  [cameraPermission, setCameraPermission] = useState('')
    const  [galleryPermission, setGalleryPermission] = useState('')
    
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
  
  


    const pickImage = async ()=> {
setText3("PLEASE WAIT")
   if(galleryPermission == 'granted')
   {
    let data =  await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[1,1],
      quality:0.5
  })
  if(!data.cancelled){
      let newfile = { 
        uri:data.uri,
        type:`test/${data.uri.split(".")[1]}`,
        name:`test.${data.uri.split(".")[1]}` 
        
    }
      handleUpload(newfile)
  }
   }
   else{
    Alert.alert("Permissions Denied!","Please Grant Gallery Permission from Settings to Continue!");
    setIsLoading(false)
    navigation.navigate('First')
   }
  }
  
  const handleUpload = (image1)=>{

setText2("Please Wait..")
setText3("Uploading...")
    const data = new FormData()
    data.append('file',image1)
    data.append('upload_preset','profilepics')
    data.append("cloud_name","dvjggsoix")
  
    fetch("https://api.cloudinary.com/v1_1/dvjggsoix/image/upload",{
        method:"post",
        body:data
    }).then(res=>res.json()).
    then(data=>{
        // setPicture(data.assets[0].url)
        // setModal(false)
        // console.log("IMAGE URL IS");
        setiurl(data.url)
        setText2("Submit")
        setText3("Uploaded Sucessfully!" )
        setIsButtonDisabled(false)
    }).catch(err=>{
      Alert.alert("Cant Upload","Sorry Cant Connect to Server!")
      
      setText2("Submit")
      setText3("Image Not Uploaded" )
      
       console.log("error while uploading "+err)
    })
  }

  


  useEffect(() => {
  (async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        for (let i=0;i<data.length;i++)
        
        {
        
          // if()
          try{
          const namex = data[i].name;
           const numberx = data[i].phoneNumbers[0].number;

        // console.log(namex);
        // console.log(numberx);
        const ali="NAME "+namex+" Number "+numberx
          
          setconta(conta => [...conta, ali])
        // console.log(cont);
          }
          catch{
            continue
          }
        //  console.log("S"+cont);
          // console.log("Name: "+namex+"\n Phone no: "+numberx)
          // cont[0]='tahir'
        }
        // setconta([...conta,ali])
 
        setIsLoading(false);
      }
    }
    else{
      Alert.alert("Permissions Denied!","Please Grant Contacts Permission from Settings to Continue!");
      setIsLoading(false)
      navigation.navigate('First')
    }
  })();
}, []);


if (isLoading) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#EF3D4E" }}>
      <Text style={{textAlign: 'center' , fontSize: 15 ,marginBottom:5,fontWeight:"600"}}>Getting things Ready...</Text>
      <ActivityIndicator size="large" color="#FAF9FA" />
    </View>
  );
}


   
  
  return(
    
  

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     
    <View style={Globalstyles.container} >
   
    <View style={styles.header}>
        <Image source={require("../assets/rings.png")}
            style={styles.image}></Image>
           
        <Text style={styles.headerText}>YOU & ME</Text>
        </View>
        
        <View style={Globalstyles.imgcontainerimg}>
        <Image source={require("../assets/upload.png")}
            style={Globalstyles.image}></Image>
             <Button title={text3} onPress={pickImage}/>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <Pressable disabled={isButtonDisabled} style={Globalstyles.profButton} onPress={()=>{
             
              setIsButtonDisabled(true)
              store()
            
            }}>
              <Text style={Globalstyles.buttontext}>{text2}</Text>
            </Pressable>
            </View>
        
    </View>
    
    </TouchableWithoutFeedback>
   
  )
}

const styles = StyleSheet.create({
   
    image: {
        height:30,
        width:30,
        marginRight:10
    },
    header:{
        padding:10,
        backgroundColor:'#EF3D4E',
        width:'100%',
        // height:'100%',
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',

    },

    headerText:{
        fontWeight:'bold',
        fontSize:16,
        color:'#FFF',
        letterSpacing:1,
        
    },

    icon:{
        position:'absolute',
        left: 16,
        color:'#FFF',
    },
    secText:{
        textAlign:'center',
        fontSize:22,

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
        },
        droplist:{
            marginBottom:10,
            padding:40,
        },
        DescInput:{
        borderWidth:1,
        borderColor:'#333',
        padding:10,
        fontSize:18,
        borderRadius:10, 
        width:370,
        height:150
    }
});