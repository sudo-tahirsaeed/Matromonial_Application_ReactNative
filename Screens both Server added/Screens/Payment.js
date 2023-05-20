import React,{useEffect,useState}from "react";
import { StyleSheet, View, Text,Pressable,Modal } from "react-native";
import MaterialButtonPink from "../components/matbutton";
import { ScrollView } from "react-native-gesture-handler";
import { Globalstyles } from '../Styles/global';
import {BackHandler} from 'react-native';


export default function Payment(props) {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {

    const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
              return true;
            },
          );
          return () => backHandler.remove();
    });


  return (
  <ScrollView>
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
            <Text style={styles.modalText}>Easypaisa Details!</Text>
            <Text style={styles.modalText2}>Account Number: +92-3311175552</Text>
            <Text style={styles.modalText3}>Account Title: MOHI UD DIN </Text>
            <Text style={styles.modalText1}>Please Verify your payment after deposit in Verify Payment Section  </Text>
            
            
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
    
      <Text style={styles.titletext}>MONTHLY PLAN</Text>
      <Text style={styles.offertext}>
        REGULAR PRICE: {"\t"}200 PKR{"\n"}OFFER PRICE:{"\t"} 100 PKR
      </Text>
      <View style={styles.buttoncontainer}>
            <Pressable style={styles.profButton}  onPress={() => setModalVisible(true)}>
              <Text style={Globalstyles.buttontext}  > Plan 1 </Text>
            </Pressable>
            </View>
            

            <Text style={styles.titletext}>3 MONTHS PLAN</Text>
            <Text style={styles.offertext}>
              REGULAR PRICE: 500 PKR{"\n"}OFFER PRICE :{"\t"} 200 PKR
            </Text>
            <View style={styles.buttoncontainer}>
                  <Pressable style={styles.profButton}  onPress={() => setModalVisible(true)}>
                    <Text style={Globalstyles.buttontext}  > Plan 2 </Text>
                  </Pressable>
            </View>

            <Text style={styles.titletext}>Half Year PLAN</Text>
            <Text style={styles.offertext}>
              REGULAR PRICE: 1000 PKR{"\n"}OFFER PRICE :{"\t"} 300 PKR
            </Text>
            <View style={styles.buttoncontainer}>
                  <Pressable style={styles.profButton}  onPress={() => setModalVisible(true)}>
                    <Text style={Globalstyles.buttontext}  > Plan 3 </Text>
                  </Pressable>
            </View>

            <Text style={styles.titletext}>12 Months PLAN</Text>
            <Text style={styles.offertext}>
              REGULAR PRICE: 1500 PKR{"\n"}OFFER PRICE :{"\t"} 500 PKR
            </Text>
            <View style={styles.buttoncontainer}>
                  <Pressable style={styles.profButton1}  onPress={() => setModalVisible(true)}>
                    <Text style={Globalstyles.buttontext}  > Plan 4 </Text>
                  </Pressable>
            </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
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
    backgroundColor: '#2196F3',
    width: 70
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
    color:"#018749"

  },
  modalText2: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:16,
    fontWeight:'500',

  },
  modalText3: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:16,
    fontWeight:'500',

  },
  modalText1: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:16,
    color:'#AA0000',
    fontWeight:'700',


  },

  container: {
    flex: 1,
    alignItems:'center'
  },
  titletext: {
    // fontFamily: "impact-regular",
    color: "black",
    fontWeight:'bold',
    fontSize: 20,
    marginTop: 20,
    // marginLeft: 94
  },
  offertext: {
    // fontFamily: "roboto-700",
    color: "#333",
    fontSize: 15,
    marginTop: 10,
    // marginLeft: 71
  },
  profButton:{
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    width:150,
    elevation: 3,
    backgroundColor: '#EF3D4E',
  },
  profButton1:{
    marginTop:30,
    marginBottom:50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    width:150,
    elevation: 3,
    backgroundColor: '#EF3D4E',
  }
});