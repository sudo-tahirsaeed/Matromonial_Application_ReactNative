// import React from 'react';
import { Modal,Text,Linking, Image, View, StyleSheet,ScrollView,ActivityIndicator, Alert,Pressable,Dimensions} from 'react-native';
import { Globalstyles } from '../Styles/global';
import axios from 'axios';
import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import {BackHandler} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';


let globaldata =[]
var myd={
  name:'',
  age: '',
  work: "",
  hobbies: "",
  education: "",
  description: "",
  city: ""
}

export default function DisplayProf ({navigation}) {
  const sendWhatsAppMessage = (phoneNumber) => {
    const message = 'Hello, how are you?';
    const url = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    Linking.openURL(url);
  };

  const sendSMS = (phoneNumber) => {
    const message = 'Hey I got your phone no from You and Me marriage App';
    const url = `sms:${phoneNumber}?body=${message}`;
    Linking.openURL(url);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [getcontact, setgetcontact] = useState("Get Contact");
    const route = useRoute()
    const formdata = route.params?.data1.username
    const signinuser = route.params?.data1.sign
    
   


      
      const data3={
        username:   formdata
        
      }
  //   render() {
    useEffect(() => {

      const backHandler = BackHandler.addEventListener(
              'hardwareBackPress',
              () => {
                return true;
              },
            );
            return () => backHandler.remove();
      });
  
  const [elite, setElite] = useState('')
  const [datax, setData] = useState(
    {
  
    }
  );
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {






    axios.post('https://average-cape-dove.cyclic.app/displayprof',{data3},{maxContentLength: 1000000})
    .then(response => {
   
  // console.log("TOP");
  // console.log(response.data[0].description);
  // console.log("low");
        // console.log('new resp'+JSON.stringify(response.data));
        if(response.data=="0")
        {
          setIsLoading(false);
          Alert.alert("Error!","Try Again Later!")
          console.log("NO DATA FOUND "+response.data);
        }
        else{
          setIsLoading(false);
          // console.log("DATA CUM"+response.data);
          globaldata = [...response.data];
          // console.log(globaldata);
          globaldata[0].hobbies= globaldata[0].hobbies.replace(/\n/g, '');
          globaldata[0].hobbies= globaldata[0].hobbies.replace(',', ' ');

          myd={
            ...globaldata[0]
          }
          setData({
            ...globaldata[0]
          })
          
         
          
        }
       
        
    })
    .catch(error => {
      setIsLoading(false);
      Alert.alert("Network Error")
        console.log(error);
  });
  


  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
 
    // console.log("COMPLETED DONE");
    // console.log(datax.description);
   
     
    // console.log(myd);
// console.log(datax);

  
const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width;

    return (


      <View style={styles.container}>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Contact Details!</Text>
            <Text style={styles.modalText1}>Name: {datax.name}</Text>
            <Text style={styles.modalText1}>Phone No: {datax.phoneno} </Text>
            <Text style={styles.modalText1}>Email: {datax.email} </Text>
            
            

            <Pressable
              style={[styles.button, styles.buttonw]}
              onPress={() => {
                sendWhatsAppMessage(datax.phoneno)
                
              }}>
              <Text style={styles.textStyle}><FontAwesome name="whatsapp" size={18} color="white" /> WhatsApp 
</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonsms]}
              onPress={() => {
                sendSMS(datax.phoneno)
                
              }}>
              <Text style={styles.textStyle}><FontAwesome name="check" size={18} color="white" />Send SMS</Text>
            </Pressable>
          
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                
              }}>
              <Text style={styles.textStyle}>Close</Text>
              
            </Pressable>
           
          </View>
        </View>
      </Modal>
    


       

      <View style={styles.containerx}>
      <ScrollView>
        <Image
          source={{
            uri:
              datax.profilepicurl,
          }}
          style={{ width: imageWidth, height: 300, borderBottomLeftRadius:50,borderBottomRightRadius:50,}}
        />
        <View style={styles.hobbiesContainer}>
        <Text style={Globalstyles.nameText}>{datax.name+","} </Text>
        <Text style={Globalstyles.ageText}>{datax.age} </Text>
        
        </View>
        <View style={styles.workContainer}>
        <Image source={require("../assets/work.png")}
            style={styles.image}></Image>
        <Text style={Globalstyles.eduText}>{datax.work}</Text>
        </View>
        <View style={styles.workContainer}>
        <Image source={require("../assets/edu.png")}
            style={styles.image}></Image>
        <Text style={Globalstyles.eduText}>{datax.education}</Text>
        </View>
        <View style={styles.workContainer}>
        <Image source={require("../assets/location.png")}
            style={styles.image}></Image>
        <Text style={Globalstyles.eduText}>{datax.city}</Text>
        </View>
        <Text style={Globalstyles.aboutText}>Hobbies</Text>
        <View style={styles.hobbiesContainer}> 
            <Text style={Globalstyles.hobbiesText}>{datax.hobbies}</Text>
            
        </View>
        <View style={Globalstyles.aboutcontainer}>
        <Text style={Globalstyles.aboutText}>About</Text> 

        <Text  style={styles.descText}>{datax.description}</Text>
        </View>
        <View style={styles.buttoncontainer}>
            <Pressable style={Globalstyles.profButton}  onPress={() => {

const datanew={
  user: signinuser
}
setgetcontact("Please Wait...")
// console.log("ELICKECEH USERNAME: "+datanew.user);
console.log(signinuser);
axios.post('https://average-cape-dove.cyclic.app/elitecheck',{datanew},{maxContentLength: 1000000})
.then(response => {

// console.log("TOP");
// console.log(response.data[0].description);
// console.log("low");
    // console.log('new resp'+JSON.stringify(response.data));
    if(response.data=="0")
    {
      setgetcontact("Get Contact")
      Alert.alert("Error!","Try Again Later!")
      console.log("NO DATA FOUND "+response.data);
    }
    else{

    //  console.log("ELITE GOT: "+response.data[0].elite);
      
      if(response.data[0].elite=='1')
           {
      setModalVisible(true)
      
setgetcontact("Get Contact")
           }
      else{
        
       Alert.alert("Buy a Plan!", "Please Subscribe to plan to see contact details!")
       setgetcontact("Get Contact")
      }
     
      
    }

    
})
.catch(error => {
    console.log(error);
});

             
            }
            }>
              <Text style={Globalstyles.buttontext}  > {getcontact} </Text>
            </Pressable>
            </View>

        </ScrollView>
      </View>









       
      </View>
   
  
    );
    
  }
// }

const styles = StyleSheet.create({
  buttonsms:
  {
    backgroundColor:'#0066b2',
    marginTop:10
  },
  buttonw:
  {
    backgroundColor:'#006A4E',
    marginTop:10
  },


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#CC0000',
    width: 70,
    marginTop:10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:25,
    fontWeight:'700',

  },
  modalText1: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:16,
  },


  containerx: {
    // marginTop:20,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  hobbiesContainer:{
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop: 10,
  },
  workContainer:{
    marginTop:5,
    flexDirection:'row',
  },
  image:{
    marginLeft:10,
    height:20,
    width:20,
  },
  descText:{
    color: "#121212",
    fontSize: 16,
    marginTop:10,
    fontWeight:'500',
    marginLeft:10,
    marginRight:10,
    // fontFamily:'sans-Regular'
  },
  buttoncontainer:{
    alignItems: 'center',
    marginBottom:40
  },
  container: {
    // marginTop:20,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  hobbiesContainer:{
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop: 10,
  },
  workContainer:{
    marginTop:5,
    flexDirection:'row',
  },
  image:{
    marginLeft:10,
    height:20,
    width:20,
  },
  descText:{
    color: "#121212",
    fontSize: 16,
    marginTop:10,
    fontWeight:'500',
    marginLeft:10,
    marginRight:10,
    // fontFamily:'sans-Regular'
  },
  buttoncontainer:{
    alignItems: 'center',
    marginBottom:40
}
});