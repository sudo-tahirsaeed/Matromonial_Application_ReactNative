import React,{useState,useEffect} from "react";
import { View, Image, Text, FlatList,TouchableWithoutFeedback,ScrollView, 
  Keyboard,Pressable,StyleSheet } from "react-native";
import { Globalstyles } from "../Styles/global";
import { TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import {BackHandler} from 'react-native';
import { useRoute } from "@react-navigation/native";



export default function Profile2 ({navigation} ) {

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

    var err=0;
  const [nickNameInput,setNickNameInput] = useState('');

  const [formData, setFormData] = useState({
    desc: '',
    hobbies: '',
    errors: {},
  });

  const [error, setError] = useState('');

  const validateForm = () => {
    let errors = {};
  
    if (!nickNameInput) {
      errors.nickNameInput = 'Nick name is required';
      err=err+1;
    } else if (nickNameInput.length<3) {
      errors.nickNameInput = 'Nick name must be atleast 3 characters long';
      err=err+1;
  }
  
  
    if (!formData.desc) {
      errors.desc = 'desc is required';
      err=err+1;
    }else if (formData.desc.length<100) {
        errors.desc = 'description name must be atleast 100 characters long';
        err=err+1;
    }
    if (!prefageInput) {
        setError('Please select an option');
      } else {
        setError('');
        // TODO: Submit form logic here
      }
    
//     if (!formData.work) {
//       errors.work = 'Work is required';
//       err=err+1;
//     } else if (formData.work.length<4) {
//       errors.work = 'Work must be atleast 4 characters long';
//       err=err+1;
//   }
  
  
  
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
        'email': em,
        'phoneno': num,
        'city': cit,
        'height': hite,
        'work': wrk,
        'marital-status': marit,
        'insterested-in': intrst,
        'education': edu,
        'nick name': nickNameInput,
        'description': formData.desc,
        'prefage': prefageInput,
        'hobbies': formData.hobbies
      }
         
        navigation.navigate('Profile3',{signupData,nickNameInput})
        //  console.log(nickNameInput);
        //  console.log(formData.desc);
        //  console.log(prefageInput);
        //  console.log('hobbies: '+hobbiesInput);
         
         console.log(err);
         
     }else{
         
     }
   };

    


    const [prefageInput, setPrefAgeInput] = useState(null);
    

    const data = [
        {key:'1', value:'18-23'},
        {key:'2', value:'23-28'},
        {key:'3', value:'28-33'},
        {key:'4', value:'33-38'},
        {key:'5', value:'38-43'},
        {key:'6', value:'43-48'},
        {key:'7', value:'48-53'},
    ]
  
  return(
    
  
<ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     
    <View style={Globalstyles.container} >
   
    <View style={styles.header}>
        <Image source={require("../assets/rings.png")}
            style={styles.image}></Image>
           
        <Text style={styles.headerText}>YOU & ME</Text>
        </View>
        <View style={Globalstyles.container1}>
        <Text style={Globalstyles.profileText}>Just a few steps more!</Text>
        <Text style={Globalstyles.profileText}>Your Profile is almost complete.</Text>
       
        <View  style={Globalstyles.droplist} onPress={Keyboard.dismiss}>
            
        <Text style={Globalstyles.mandText}>* Mandatory fields</Text>
        <TextInput style={Globalstyles.profInput} 
             placeholder='Nick name *'
             value={nickNameInput}
             onChangeText={text => setNickNameInput(text)}
             ></TextInput>
             {formData.errors.nickNameInput && <Text style={Globalstyles.errortext}>{formData.errors.nickNameInput}</Text>}
        </View>
        
        <View  style={Globalstyles.droplist}>
        
        <TextInput style={styles.DescInput} 
             placeholder='Description (min. 100 characters) *'
             multiline={true}
             numberOfLines={5}
             textAlignVertical={"top"}
             textBreakStrategy={"highQuality"}
             value={formData.desc}
              onChangeText={(text) =>
              setFormData({ ...formData, desc: text })}
            
             ></TextInput>
             {formData.errors.desc && <Text style={Globalstyles.errortext}>{formData.errors.desc}</Text>}
        </View>
        <View  style={Globalstyles.droplist}>
        <TextInput style={Globalstyles.profInput} 
             placeholder='Hobbies (seperate with commas)'
             value={formData.hobbies}
              onChangeText={(text) =>
              setFormData({ ...formData, hobbies: text })}
            
             ></TextInput>
        
        </View>
        
        <View  style={Globalstyles.droplist}>
        
        <SelectList
        placeholder="Preferred Age *"
        setSelected={(prefageInput) => setPrefAgeInput(prefageInput)} 
        data={data} 
        save="value"

                 />
        {error ? <Text style={Globalstyles.errortext}>{error}</Text> : null}
        </View>

        <View style={Globalstyles.imgcontainer}>
            <Pressable style={Globalstyles.profButton} onPress={handleSubmit}>
              <Text style={Globalstyles.buttontext}>Continue</Text>
            </Pressable>
            </View>
        
    </View>
    </View>
    
    </TouchableWithoutFeedback>
    </ScrollView>
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
