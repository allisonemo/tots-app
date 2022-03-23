import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Logo from '../../assets/logo.png';

export default function Login ( {navigation} ) {
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        //resizeMode=""
      />
    </View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    /*justifyContent: 'center', 
    alignItems: 'center',
    marginTop: -550,*/
  },
  logo: {
    width: 180,
    height: 180,
  
  },
});