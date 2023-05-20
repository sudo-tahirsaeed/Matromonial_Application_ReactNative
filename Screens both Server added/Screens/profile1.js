import React,{useState,useEffect} from "react";
import { View, Image, Text, Button,TouchableWithoutFeedback,ScrollView, 
  Keyboard,Pressable,StyleSheet } from "react-native";
import { Globalstyles } from "../Styles/global";
import { TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import {BackHandler} from 'react-native';  
import { useRoute } from "@react-navigation/native";

export default function Profile1 ({navigation}) {


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

  // console.log(key7);
  
  const [error, setError] = useState('');

  var err=0;
  const [formData, setFormData] = useState({
    city: '',
    height: '',
    work: '',
    errors: {},
  });

  const validateForm = () => {
    let errors = {};
  
    if (!formData.city) {
      errors.city = 'City is required';
      err=err+1;
    } else if (formData.city.length<4) {
      errors.city = 'City must be atleast 4 characters long';
      err=err+1;
  }
  
  
    if (!formData.height) {
      errors.height = 'Height is required';
      err=err+1;
    }
    
    if (!formData.work) {
      errors.work = 'Work is required';
      err=err+1;
    } else if (formData.work.length<4) {
      errors.work = 'Work must be atleast 4 characters long';
      err=err+1;
  }
  if (!maritValue) {
    setError('Please select an option');
  } else {
    setError('');
    // TODO: Submit form logic here
  }
  if (!interestValue) {
    setError('Please select an option');
  } else {
    setError('');
    // TODO: Submit form logic here
  }
  if (!eduValue) {
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

      const signupData ={
        'name': s1name,
        'age': s1age,
        'gender': gen,
        'religion': rel,
        'community': comm,
        'country': cntry,
        'email': em,
        'phoneno': num,
        'city': formData.city,
        'height': formData.height,
        'work': formData.work,
        'marital-status': maritValue,
        'insterested-in': interestValue,
        'education': eduValue,
      }
         
      navigation.navigate('Profile2',{signupData});
        //  console.log(formData.height);
        //  console.log(formData.city);
        //  console.log(formData.work);
        //  console.log(eduValue);
        //  console.log(maritValue);
        //  console.log(interestValue);
         
         console.log(err);
         
     }else{
         
     }
   };

    const [eduValue, setEduValue] = useState(null);
    const [maritValue, setMaritValue] = useState(null);
    const [interestValue, setInterestValue] = useState(null);


    
    const [selected, setSelected] = React.useState("");
    const maritalstatus = [
        {key:'1', value:'Married'},
        {key:'2', value:'Divorced'},
        {key:'3', value:'Seperated'},
        {key:'4', value:'Widowed'},
        {key:'5', value:'Never Married'},

    ]

    const interestIn = [
        {key:'1', value:'Men'},
        {key:'2', value:'Women'},
    
    ]
    const eduLevel = [
        {key:'1', value:'School'},
        {key:'2', value:'College'},
        {key:'3', value:'Bachelors'},
        {key:'4', value:'Masters'},
        {key:'5', value:'Doctorate'},

    ]
  
  return(
    
    
<ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
    <View style={Globalstyles.container} >
    <View style={Globalstyles.header}>
        <Image source={require("../assets/rings.png")}
            style={Globalstyles.headerimage}></Image>
           
        <Text style={Globalstyles.headerText}>YOU & ME</Text>
        </View>
        <View style={Globalstyles.container1}>
        <Text style={Globalstyles.profileText}>Thanks for registering. Now let's</Text>
        <Text style={Globalstyles.profileText}>build your profile.</Text>
       
        <View  style={Globalstyles.droplist}>
        <Text style={Globalstyles.mandText}>* Mandatory fields</Text>
        <TextInput style={Globalstyles.profInput} 
             placeholder='City you live in *'
             value={formData.city}
             onChangeText={(text) =>
             setFormData({ ...formData, city: text })}
             ></TextInput>
        {formData.errors.city && <Text style={Globalstyles.errortext}>{formData.errors.city}</Text>}
        </View>
        <View  style={Globalstyles.droplist}>
        
        <SelectList
        placeholder="Your Marital Status *"
        setSelected={(maritValue) => setMaritValue(maritValue)} 
        data={maritalstatus} 
        save="value"
                 />
        {error ? <Text style={Globalstyles.errortext}>{error}</Text> : null}
        </View>
        <View  style={Globalstyles.droplist}>
        
        <SelectList
        placeholder="Interested in *"
        setSelected={(interestValue) => setInterestValue(interestValue)} 
        data={interestIn} 
        save="value"
                 />
        {error ? <Text style={Globalstyles.errortext}>{error}</Text> : null}
        </View>
        <View  style={Globalstyles.droplist}>
        
        <SelectList
        placeholder="Highest education level *"
        setSelected={(eduValue) => setEduValue(eduValue)} 
        data={eduLevel} 
        save="value"
                 />
        {error ? <Text style={Globalstyles.errortext}>{error}</Text> : null}
        </View>
        <View  style={Globalstyles.droplist}>
        
        <TextInput style={Globalstyles.profInput} 
             placeholder='Your height (e.g. 5,11) *'
             value={formData.height}
              onChangeText={(text) =>
              setFormData({ ...formData, height: text })}
             ></TextInput>
          {formData.errors.height && <Text style={Globalstyles.errortext}>{formData.errors.height}</Text>}
        </View>
        <View  style={Globalstyles.droplist}>
        
        <TextInput style={Globalstyles.profInput} 
             placeholder='Work *'
            value={formData.work}
              onChangeText={(text) =>
              setFormData({ ...formData, work: text })}
             ></TextInput>
            {formData.errors.work && <Text style={Globalstyles.errortext}>{formData.errors.work}</Text>}
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
   
    headerimage: {
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
        }
  });
