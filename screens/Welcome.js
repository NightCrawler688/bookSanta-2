import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TextInput,TouchableOpacity,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Welcome extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId:'',
            password:''
        }
    }
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert('User has been succesfully logined')
                
        })
        .catch((error)=>{
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert('User added succesfully')
        })
        .catch((error)=>{
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }
  render(){
    return(
      <View style = {styles.container}>
        <View>
      
            <Text style = {styles.title}>
               Book Santa
            </Text>
        </View>
        <View >
            <TextInput style = {styles.loginBox} placeholder = 'abc@example.com' onChangeText = {(text)=>{
                this.setState({
                    emailId:text
                })
            }} keyboardType = 'email-address'/>
            <TextInput style = {styles.loginBox} placeholder = 'password' onChangeText = {(text)=>{
                this.setState({
                    password:text
                })
            }} secureTextEntry = {true}/>
            </View>
            <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {[styles.button,{marginBottom:20,marginTop:20}]} onPress = {()=>{
                this.userLogin(this.state.emailId,this.state.password)
            }}>
                  <Text style = {styles.buttonText}>
                      Login
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress = {()=>{
                this.userSignUp(this.state.emailId,this.state.password)
            }}>
                  <Text style = {styles.buttonText}>
                     Sign Up
                  </Text>
            </TouchableOpacity>
        </View>
       
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85',
      alignItems:'center',
      justifyContent:'center'
    },
    profileContainer:{
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:10,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      alignItems:'center'
    }
  })
  