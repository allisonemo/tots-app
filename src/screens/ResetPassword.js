import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, {Component} from 'react'
import CustomButton from '../components/CustomButton';

/*const ResetPassword = ( {navigation} ) => {
  
  const {
    control, 
    handleSubmit, 
    formState: {errors},
    watch
  } = useForm();

  const pwd = watch('password') //contains value of password

  console.log(errors);

  const onResetPasswordPressed = (data) => {
    navigation.navigate('Login')
  };

  return (
  <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.text}>Set the new password for your account so you can login</Text>

      <Text style={styles.passText}>Password</Text>
      <CustomInput 
      name="password"
      placeholder='Password'
      control={control}
      secureTextEntry
      rules={{
        required: 'Password is required', 
        minLength: {
          value: 3, message: 'Password should be at least 6 characters'
        },
        maxLength: {
          value: 20, message: 'Password should be be max 20 characters'
        },
      }}
      />

      <Text style={styles.Confirmtext}>Confirm Password</Text>
      <CustomInput 
      name="confirmPassword"
      placeholder='Confirm Password'
      control={control}
      secureTextEntry
      rules={{
        required: 'Password confirmation is required', 
        validate: value => value === pwd || 'Passwords do not match',
      }}
      />
      
      <CustomButton 
        text="RESET PASSWORD" 
        navigation={navigation} 
        onPress={handleSubmit(onResetPasswordPressed)} 
      />
    </View>
  </ScrollView>
  )
};

const styles = StyleSheet.create({ 
  root: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'PingFangHK-Semibold',
    marginTop: 15,
  },
  text: {
    fontSize: 15,
    marginTop: 15,
  },
  passText: {
    right: 140,
    fontFamily: 'PingFangHK-Regular',
    marginTop: 35,
  },
  Confirmtext: {
    right: 110,
    fontFamily: 'PingFangHK-Regular',
  },
});

export default ResetPassword*/

global.userId = -1;
export default class ResetPassword extends Component {

  constructor() 
  {
    super()
    this.state = 
    {
       message: ' ',
       password: '',
       confirmPass: '',
       length: '',
       passwordError: '',
    }
  }

  passwordValidator() {
    if(this.state.password == "") {
      this.setState({passwordError: "Password is required"})
    }

    else if(this.state.password.length < 6) {
      this.setState({passwordError: "Password must be at least 6 characters"})
    }

    else if(this.state.confirmPass !== this.state.password) {
      this.setState({passwordError: "Passwords must be equal"})
    }
  
    else {
      this.setState({passwordError: ""})
    }
  }


  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.text}>Set the new password for your account so you can login</Text>

      <Text style={styles.passText}>Password</Text>
      <View style={styles.container}>
        <TextInput 
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={((val) => { this.changePasswordHandler(val) }, (val) => this.setState({password: val}))}
          autoCapitalize="none"
          autoCorrect={false}
          minLength={6}
          onBlur={() => this.passwordValidator()}
        />
      </View>
      <Text style={{color: 'red'}}>{this.state.passwordError}</Text>
      

      <Text style={styles.Confirmtext}>Confirm Password</Text>
      <View style={styles.container}>
        <TextInput 
          placeholder='Confirm Password'
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={((val) => this.setState({password: val}), (val) => this.setState({confirmPass: val}))}
          autoCorrect={false}
          keyboardType="email-address"
          minLength={6}
          onBlur={() => this.passwordValidator()}
        />
      </View>
      <Text style={{color: 'red', /*right: 100 */}}>{this.state.passwordError}</Text>
      
      <CustomButton 
        text="RESET PASSWORD" 
        onPress={this.handleClick} 
      />
    </View>
  </ScrollView>
    )
  }


  handleClick = async () =>
  {
    try
    {
      var obj = {password:global.password.trim()};
      var js = JSON.stringify(obj);
      const response = await fetch('', 
        {
          method:'POST', //or PUT?
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
        this.props.navigation.navigate('Login');
      }
    }
    catch(e)
    {
      this.setState({message: e.message });
    }
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
  title: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'PingFangHK-Semibold',
    marginTop: 40,
  },
  text: {
    fontSize: 15,
    marginTop: 15,
  },
  passText: {
    right: 140,
    fontFamily: 'PingFangHK-Regular',
    marginTop: 35,
  },
  Confirmtext: {
    right: 110,
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
});