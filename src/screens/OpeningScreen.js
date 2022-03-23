import React from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';


export default function OpeningScreen ( {navigation} ) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
      <Text style={styles.title}>
        TOP OF THE SCHEDULE
      </Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>CONTINUE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logo: {
    width: 300, 
    height: 300, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: -190, 
  },
  title: {
    color: '#FFC903', 
    fontSize: 30, 
    fontFamily: 'PingFangHK-Semibold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#FFC904',
    position: 'absolute',
    top: 475,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'black',
  },
});


