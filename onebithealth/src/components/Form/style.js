import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        flex:1,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:30,
    },
    form:{
        width:"100%",
        height:"auto",
        
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        padding:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#8D9399",
        height:40,
        margin:12,
        paddingLeft:10,
        color:"#ffffff"

    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:13,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff"
    },

errorMessage:{
   fontSize:12,
   color:"red",
   fontWeight:"bold",
   paddingLeft:20,
 },

 exhibitionResultImc:{
    width:"100%",
    height:"50%"
 },
 listImcs:{
     marginTop:20,
 },
 resultImcItem:{
     fontSize:26,
     color:"red",
     height:50,
     width:"100%",
     paddingRight:20,
 },
 textResultItemList:{
     color:"red",
     fontSize:18,
 }

});
export default styles