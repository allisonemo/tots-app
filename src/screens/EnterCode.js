import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import CustomButton from '../components/CustomButton';
import React, { Component } from 'react'
import jwt_decode from "jwt-decode";

/*const EnterCode = ( {navigation} ) => {

  const [text, onChangeText] = React.useState("");

  const onSubmitPressed = () => {
    navigation.navigate('Reset Password')
  };


  return (
  <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.root}>
      <Text style={styles.title}>Enter the 4 digit code you recieved in your email</Text>
      <TextInput
        style={styles.textInput} 
        maxLength={4} 
        onChangeText={onChangeText}
        value={text} >
      </TextInput>
      <CustomButton 
        text="SUBMIT" 
        navigation={navigation} 
        onPress={onSubmitPressed} 
        type="EXTRA1"
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
  textInput: {
    height: 40,
    width: 58,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default EnterCode*/ 


global.code='';
global.userId = -1;
export default class EnterCode extends Component {
  constructor() 
  {
    super()
    this.state = 
    {
       message: ' '
    }
  }
  render() {
    return (
      <View style={styles.root}>
      <Text style={styles.title}>Enter the 4 digit code you recieved in your email</Text>
      <TextInput
        style={styles.textInput} 
        maxLength={4} 
        onChangeText={(val) => { this.changeCodeHandler(val) }}
        autoCorrect={false}
        value={text} >
      </TextInput>
      <CustomButton 
        text="SUBMIT" 
        onPress={this.handleClick} 
        type="EXTRA1"
      />
    </View>
    )
  }

  handleClick = async () => 
  {
    try
    {
      var obj = {code:global.code.trim()};
      var js = JSON.stringify(obj);
      const response = await fetch('https://group1-tots-mern.herokuapp.com/api/verifyUser',
        {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
        var res = JSON.parse(await response.text());
        var data = jwt(res.data);
        console.log(data);
      if( res.id <= 0 )
      {
        this.setState({message: data.error });
      }
      else
      {
        global.userId = res.id;
        this.props.navigation.navigate('ResetPassword');
      }
    }
    catch(e)
    {
      this.setState({message: e.message });
    }
  }

  changeCodeHandler = async (val) =>
  {
    global.code = val;
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
    marginTop: 15,
  },
  textInput: {
    height: 40,
    width: 58,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})