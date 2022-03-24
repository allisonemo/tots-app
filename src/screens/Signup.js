import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const Signup = ( {navigation} ) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const {height} = useWindowDimensions();

  const onSignupPressed = () => {
    navigation.navigate('Login') 
  };

  return (
  <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode="contain" //makes sure whole logo is visible
      />

      <Text style={styles.title}>
      TOP OF THE SCHEDULE 
      </Text>

      <Text style={styles.login}>
        SIGNUP
      </Text>
      
      <Text style={styles.text}>Name</Text>
      <CustomInput 
      placeholder='Name' 
      value={name} 
      setValue={setname} 
      />

      <Text style={styles.text}>Email</Text>
      <CustomInput 
      placeholder='Email' 
      value={email} 
      setValue={setemail}
      />

      <Text style={styles.passwordText}>Password</Text>
      <CustomInput 
      placeholder='Password'
      value={password} 
      setValue={setPassword}
      secureTextEntry
      />

      <Text style={styles.confirmPassText}>Confirm Password</Text>
      <CustomInput 
      placeholder='Confirm Password'
      value={passwordRepeat} 
      setValue={setPasswordRepeat}
      secureTextEntry
      />
    
      <CustomButton 
        text="SIGNUP" 
        navigation={navigation} 
        onPress={onSignupPressed} 
      />
      <CustomButton //move button up
        text="Already have an account? Login" 
        navigation={navigation} 
        onPress={onSignupPressed} 
        type="EXTRA2"
      />
    </View>
  </ScrollView>
 );
};

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
  //will have to test on different devices
  text: {
    right: 150,
    fontFamily: 'PingFangHK-Regular',
  },
  passwordText: {
    right: 140,
    fontFamily: 'PingFangHK-Regular',
  },
  confirmPassText: {
    right: 110,
    fontFamily: 'PingFangHK-Regular',
  }
});

export default Signup