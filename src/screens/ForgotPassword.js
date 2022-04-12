import { View, Text, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import React, {Component} from 'react'
import CustomButton from '../components/CustomButton';
import Lock from '../../assets/lock.png';
import jwt from "jwt-decode";

/*const ForgotPassword = ( {navigation} ) => {
  const {control, handleSubmit } = useForm();

  const {height} = useWindowDimensions();

  const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const onSubmitPressed = (data) => {
    console.warn(data);
    navigation.navigate('EnterCode')
  };

  const onBackToLoginPressed = () => {
    navigation.navigate('Login')
  };

  return (
  <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.root}>
    <Image
        source={Lock}
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode="contain" //makes sure whole logo is visible
      />
      <Text style={styles.title}>Forgot your password?</Text>

      <Text style={styles.text}>Email</Text>
      <CustomInput 
      name="email"  
      placeholder='Email' 
      control={control}
      rules={{
        required: 'Email is required',
        pattern: {value: email_regex, message: 'Email is invalid'}
    }}
      />
      <CustomButton 
        text="SUBMIT" 
        navigation={navigation} 
        onPress={handleSubmit(onSubmitPressed)} 
        type="EXTRA1"
      />
      <CustomButton 
        text="BACK TO LOGIN" 
        navigation={navigation} 
        onPress={onBackToLoginPressed} 
        type="TERTIARY"
      />
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({ 
  root: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 15,
  },
  logo: {

  },
  title: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'PingFangHK-Semibold',
    marginTop: 15,
  },
  text: {
    right: 150,
    fontFamily: 'PingFangHK-Regular',
    marginTop: 35,
  },
});

export default ForgotPassword*/


global.userId = -1;
export default class Login extends Component {

  constructor() 
  {
    super()
    this.state = 
    { 
       message: ' ',
       email: '',
       emailError: ''
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

  
  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1}}>
      <View style={styles.root}>
      <Image
          source={Lock}
          style={styles.logo}
          resizeMode="contain" //makes sure whole image is visible
        />
        <Text style={styles.title}>Forgot your password?</Text>
  
        <Text style={styles.text}>Email</Text>
        <View style={styles.container}>
        <TextInput
          placeholder='Email'
          onChangeText={((val) => { this.changeLoginNameHandler(val) }, (val) => this.setState({email: val}))}
          autoCapitalize="none"
          autoCorrect={false}
          onBlur={() => this.emailValidator()}
        />
       </View>
      <Text style={{color: 'red', /*right: 115 */}}>{this.state.emailError}</Text>
       
        <CustomButton 
          text="SUBMIT" 
          //navigation={navigation} 
          //onPress={this.handleClick} 
          onPress={this.reset}
          type="EXTRA1"
        />
        <CustomButton 
          text="BACK TO LOGIN" 
          //navigation={navigation} 
          onPress={this.handleLoginButton} 
          type="TERTIARY"
        />
      </View>
    </ScrollView>

    );
  }

 /* handleClick = async () =>
  {
    try
    {
      var obj = {email:global.loginName.trim()};
      var js = JSON.stringify(obj);
      const response = await fetch('', //change
        {
          method:'POST',
          body:js,
          headers:{
            'Content-Type': 'application/json'
          }});
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
        this.props.navigation.navigate('EnterCode');
      }
    }
    catch(e)
    {
      this.setState({message: e.message });
    }
  }*/

  handleLoginButton = () => {
    this.props.navigation.navigate('Login');
  }

  changeLoginNameHandler = async (val) =>
  {
    global.loginName = val;
  }  
  reset = () => {
    this.props.navigation.navigate('ResetPassword');
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
   height: 150,
   marginTop: 30
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'PingFangHK-Semibold',
    marginTop: 15,
  },
  text: {
    right: 150,
    fontFamily: 'PingFangHK-Regular',
    marginTop: 35,
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
});