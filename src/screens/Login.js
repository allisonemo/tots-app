import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button } from 'react-native';
import Logo from '../../assets/logo.png';
//import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import jwt from "jwt-decode";


global.password = '';
global.userId = -1; 


export default class Login extends Component {
  
  constructor() 
  {
    super()
    this.state = 
    {
       message: ' ',
       email: '',
       emailError: '',
       password: '',
       length: '',
       passwordError: ''
    }
  }

 

  emailValidator() {
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if(this.state.email == "") {
      this.setState({emailError: "Email is required"})
    }

    else if(email_regex.test(this.state.email) == false) {
      this.setState({emailError: "Email is invalid"})
    }

    else {
      this.setState({emailError: ""})
    }
  }

  passwordValidator() {
    if(this.state.password == "") {
      this.setState({passwordError: "Password is required"})
    }

    else if(this.state.password.length < 6) {
      this.setState({passwordError: "Password must be at least 6 characters"})
    }


    else {
      this.setState({passwordError: ""})
    }
  }

  

  render() {
    return (
      <View style={styles.root}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode="contain" //makes sure whole logo is visible
      />

      <Text style={styles.title}>
      TOP OF THE SCHEDULE 
      </Text>

      <Text style={styles.login}>
        LOGIN
      </Text>

      <Text style={styles.emailText}>Email</Text>
      <View style={styles.container}>
      <TextInput
          placeholder='Email'
          onChangeText={
            ((val) => { this.changeLoginNameHandler(val) }, 
            (val) => { this.setState({email: val}) })
          }
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onBlur={() => this.emailValidator()}
        /> 
    </View>
    <Text style={{color: 'red'/*, right: 115 */}}>{this.state.emailError}</Text> 

      <Text style={styles.passwordText}>Password</Text>
      <View style={styles.container}>
        <TextInput 
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={
            ((val) => { this.changePasswordHandler(val) }, 
            (val) => { this.setState({password: val}) } )
          }
          autoCapitalize="none"
          autoCorrect={false}
          onBlur={() => this.passwordValidator()}
          minLength={6}
    />
  </View>
  <Text style={{color: 'red'}}>{this.state.passwordError}</Text>


      
      <CustomButton 
        text="LOGIN" 
        onPress={this.handleClick} 
      />
  
      <CustomButton 
        text="Forgot password?" 
        //navigation={navigation} 
        onPress={this.handleForgotPasswordButton} 
        type="TERTIARY"
      />
      <CustomButton 
        text="Don't have an account? Signup" 
        //navigation={navigation} 
        onPress={this.handleSignupButton} 
        type="EXTRA1"
      />
      <Button title='GO TO DISPLAY' onPress={this.Display}></Button>
    </View>
    );
  }

  handleClick = async () =>
  {
    try
    {
      var obj = {email:global.loginName.trim(),password:global.password.trim()};
      var js = JSON.stringify(obj);
      const response = await fetch('https://group1-tots-mern.herokuapp.com/api/login', 
        {
          method:'POST',
          body: js,
          headers:{
            'Content-Type': 'application/json'
          }
        })
        
      var res = JSON.parse(await response.text());
      var data = jwt(res.data);
      console.log(data);
     
      if( data.error )
      {
        this.setState({message: data.error });
      }
      else
      {
        global.userId = data.id;
        this.props.navigation.navigate('Display');
      }
    }
    catch(e)
    {
      this.setState({message: e.message });
    }

  
  }
  
  handleSignupButton = () => {
    this.props.navigation.navigate('Signup');
  }
  handleForgotPasswordButton = () => {
    this.props.navigation.navigate('ForgotPassword');
  }
  Display = () => {
    this.props.navigation.navigate('Display');
  }
  changeLoginNameHandler = async (val) =>
  {
    global.loginName = val;
  }  
  changePasswordHandler = async (val) =>
  {
    global.password = val;
  }  
}


const styles = StyleSheet.create({
  root: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    width: '70%', //using percentage to ensure that it looks the same on any device
    maxWidth: 300, //for bigger screens like an iPad
    maxHeight: 180,
  
  },
  title: {
    color: '#FFC903',
    fontSize: 15,
    fontFamily: 'PingFangHK-Semibold',
  },
  login: {
    fontSize: 30,
    fontFamily: 'PingFangHK-Regular',
    padding: 10,
  },
  
  emailText: {
    right: 150,
    fontFamily: 'PingFangHK-Regular',
  },
  passwordText: {
    right: 140,
    fontFamily: 'PingFangHK-Regular',
  },
  container: {
    backgroundColor: 'white',
    width: '100%', //100% of the parent component

    borderColor: '#FFC904',
    borderWidth: 1,
    borderRadius: 15,
    borderStyle: 'solid',

    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
  }
})