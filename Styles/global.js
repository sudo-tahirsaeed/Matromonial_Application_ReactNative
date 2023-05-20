import { StyleSheet } from "react-native";
// import { Button } from "react-native-web";

export const Globalstyles= StyleSheet.create({

    container:{
        
        flex:1,
        // paddingTop:20,
        // justifyContent:'center',
        alignItems:'center',
        // justifyContent:'center',
        

    },
    container1:{
        
        flex:1,
        // paddingTop:20,
        justifyContent:'center',
        alignItems:'center',
        // justifyContent:'center',
        

    },
    imgcontainer:{
        // justifyContent: 'center',
        alignItems: 'center',
    },
    imgcontainerimg:{
         paddingTop:90,
        alignItems: 'center',
    },
    titleText:{
        color: "#121212",
        fontSize: 20,
        fontWeight:'bold',
        padding:10,
        

    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
    },
    input1:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6, 
        width:350
    },
    input11:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6, 
        width:350,
        fontWeight:'bold'
    },
    usernameTxt:{
        color: "#121212",
        fontSize: 20,
        fontWeight:'bold',
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6, 
        width:350
    },
    profInput:{
        borderWidth:1,
        borderColor:'#333',
        padding:10,
        fontSize:18,
        borderRadius:10, 
        width:370,
        height:45
    },
    multiInput:{
        borderWidth:1,
        borderColor:'#333',
        padding:10,
        fontSize:18,
        borderRadius:10, 
        width:350,
        height:25
    },
    image: {
        marginTop:50,
        marginBottom:30,
        width: 115,
        height: 115,
        alignItems:'center',
    //    alignContent:'center'
      },

    button: {
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    width:250,
    elevation: 3,
    backgroundColor: '#1e88e5',
    },
    profButton:{
    marginTop:40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    width:250,
    elevation: 3,
    backgroundColor: '#EF3D4E',
    },
    profButton2:{
        marginTop:40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        width:250,
        elevation: 3,
        backgroundColor: '#9e1b32',
        },

    buttontext:{
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },
    
    gendercontainer:{
    flexDirection:'row',
    },
    malebutton:{
        width: 130,
        height: 40,
        backgroundColor: "#1f85e5",
        borderRadius: 100,
        flexDirection: "row"
    },
    femalebutton:{
        marginHorizontal:10,
        width: 130,
        height: 40,
        backgroundColor: "rgba(244,45,133,1)",
        borderRadius: 100,
        flexDirection: "row"
    },
    btext:{
        color: "rgba(255,255,255,1)",
        lineHeight: 21,
        fontSize: 20,
        marginVertical:10,
        marginHorizontal:30,
        letterSpacing: 0.5,
        fontWeight:'bold',
        textAlign: "center"
    },
    mbtext:{
        color: "rgba(255,255,255,1)",
        lineHeight: 21,
        fontSize: 20,
        marginVertical:10,
        marginHorizontal:40,
        letterSpacing: 0.5,
        fontWeight:'bold',
        textAlign: "center"
    },
    errortext:{
        color:'crimson',
        fontWeight:'bold'
    },
    droplist:{
        // alignItems:'center',
        // padding:10,
        // borderRadius:6, 
        width:370,
        marginTop:20
    },
    profileText:{
        color: "#121212",
        fontSize: 24,
        textAlign:'center'

    },
    mandText:{
        flexDirection:'row',
        alignItems:'flex-start',
        color:'#333',
        fontSize:15,
        padding:5
    },
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
    nameText:{
        color: "#121212",
        fontSize: 20,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:5,
        // fontFamily:'sans-Bold'
    },
    ageText:{
        color: "#121212",
        fontSize: 20,
        // fon?tWeight:'bold',
        marginLeft:5,
        marginTop:5,
        // fontFamily:'sans-Regular'
       
    },
    eduText:{
        color: "#121212",
        fontSize: 16,
        fontWeight:'400',
        marginLeft:10,
    // fontFamily:'sans-Regular'
    },
    hobbiesText:{
    // flex: 0.3,
    // flexBasis:'wrap',
    padding:5,
    paddingTop:0,
    backgroundColor: '#EF3D4E',
    borderColor:'#B50000',
    textAlignVertical:'center',
    textAlign:'left',
    fontSize:20,
    borderWidth: 3,
    height:30,
    // width:'20%',
    borderRadius:10,
    marginLeft:15,
    marginTop:10,
    color:'#FFF',
    // fontFamily:'sans-Regular'
    },
    aboutText:{
        color: "#121212",
        fontSize: 20,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:20 
    }


})