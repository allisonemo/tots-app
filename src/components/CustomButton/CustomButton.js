import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ( { text, onPress, type = 'PRIMARY'} ) => {
  return (
    <Pressable style={[styles.container, styles[`container_${type}`]]} onPress={ onPress }>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({ 
    container: {
        width: '50%', //100% of the parent view
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 20,
    },
    container_PRIMARY: {
        backgroundColor: '#FFC904',
    },
    container_TERTIARY: {
       
    },
    container_EXTRA1: {
        width: '100%',
        backgroundColor: '#ffc600',
        marginTop: 15,
    },
    container_EXTRA2: {
        width: '100%',
        backgroundColor: '#ffc600',
        marginTop: 20,
    },
    text: {
        fontFamily: 'PingFangHK-Medium',
        fontSize: 14,
    },
    text_TERTIARY: {
        textDecorationLine: 'underline',
        fontFamily: 'PingFangHK-Regular',
    },
    text_EXTRA: {
        fontFamily: 'PingFangHK-Medium',
    },
});

export default CustomButton