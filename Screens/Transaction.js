import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text ,ActivityIndicator,TextInput,Pressable, Alert,Keyboard,TouchableWithoutFeedback } from "react-native";
import { Globalstyles } from "../Styles/global";
import MaterialButtonDanger from "../components/matbutton";
import axios from 'axios';
import {user1} from './Feed';
import {BackHandler} from 'react-native';
import { useNavigation, useFocusEffect  } from '@react-navigation/native';

// import { myState } from "./Feed";
// import { Text     Input } from "react-native-gesture-handler";

// let a=abc
// const tah = ()=> a

let globaldata =[]
let globalusername=''


export default function Transaction({navigation}) {

  // useEffect(() => {

  //   const backHandler = BackHandler.addEventListener(
  //           'hardwareBackPress',
  //           () => {
  //             return true;
  //           },
  //         );
  //         return () => backHandler.remove();
  //   });

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Feed');
        return true;
      };
  
      BackHandler.addEventListener(
        'hardwareBackPress', onBackPress
      );
  
      return () =>
        BackHandler.removeEventListener(
          'hardwareBackPress', onBackPress
        );
    }, [navigation])
  );
    
  const [username1,setuser]=useState()
  const [verify,setverify]=useState('Verify')
  const [id1,setid]=useState()
  // console.log(username);
  
const data1={
  username: username1,
  id: id1
  
}
function handle({navigation}){
  setverify('Please Wait..')
  axios.post('https://average-cape-dove.cyclic.app/verifytrans',{data1})
  .then(response => {

      // console.log('new resp'+JSON.stringify(response.data));
      
      console.log("RES IS: "+response.data);
if(response.data=='00')
{
  Alert.alert("Invalid Username/TRX ID","Please Enter Valid Username and TRX ID")
  setverify('Verify')
}
else if(response.data=='0')
{
  Alert.alert("No Transaction Found!","It takes 24Hours to verify your trasaction! Try Again Later!")
  setverify('Verify')
}
else if(response.data=='1')
{
  Alert.alert("Package Activated!","Your Transation has been verified Sucessfully now you can acesss all the details! Thanks!")
  setverify('Verify')
  navigation.navigate('Feed');
 

}
else
{
  Alert.alert("Network Error!","Cant connect to Server!")
  setverify('Verify')
}


      // const data = JSON.stringify(response);
      
      
  })
  .catch(error => {
      console.log(error);
});
}
  // const newf = JSON.stringify(user);
  // console.log(user);
 
  return (
      
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {/* <View style={styles.rect}>
        <Text style={styles.transferAmount}>Transfer Amount</Text>
      </View> */}
      <Text style={styles.note}>NOTE</Text>
      <Text style={styles.loremIpsum}>
        1. Please send amount for respective plan.{"\n"}2. After making payment
        verify your payment{"\n"} by entering easypaida TID (Trasaction ID) in{" "}
        {"\n"} transations section.{"\n"}3. After verification your account will
        be approved.{"\n"}4. Only Easypaisa transactions are supported yet.{"\n"}5. Easypaisa Number: +92-3311175552{"\n"}6. It could take upto 24 Hours to verify your Transaction{"\n"}7. Contact Support: +92-3311175552
      </Text>
     
     
        
        <TextInput onChangeText={(text) => setuser(text)}
        style={styles.input1}
               
        placeholder="Username"  ></TextInput>

        <TextInput onChangeText={(text) => setid(text)} keyboardType="numeric" placeholder="Easypaisa Transaction ID" style={styles.input1}></TextInput>
        
   
      {/* <Text style={styles.easypaisaAccount}>EASYPAISA ACCOUNT</Text> */}
      <View style={Globalstyles.imgcontainer}>
              <Pressable style={Globalstyles.profButton}  onPress={handle} >
                <Text style={Globalstyles.buttontext}>{verify} </Text>
              </Pressable>
              </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  rect: {
    width: 167,
    height: 40,
    backgroundColor: "#EF3D4E",
    marginTop: 50,
    // marginLeft: 104
  },
  transferAmount: {
   
    color: "#FFF",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 8,
    fontWeight:600,
  },
  note: {
   
    color: "black",
    fontWeight:'bold',
    fontSize:24,
    // marginTop: 10,
    // marginLeft: 170
  },
  loremIpsum: {
    
    color: "#121212",
    marginTop: 15,
    // marginLeft: 33
  },
 
  input1:{
    borderWidth:1,
    borderColor:'#ddd',
    backgroundColor:'#ddd',
    padding:10,
    fontSize:18,
    borderRadius:6, 
    width:320,
    marginBottom:20,
    marginTop:20,
},
});

