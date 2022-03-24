import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput  
      value={value}
      onChangeText={setValue} //will update value with new text
      placeholder={placeholder} 
      style={styles.input}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}
const styles = StyleSheet.create({ 
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
    },
    input: {},
});

export default CustomInput