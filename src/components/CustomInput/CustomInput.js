import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
  return (
      <Controller  
        control={control}  //connects text input with form
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
        <View style={[styles.container, {borderColor: error ? 'red' : '#FFC904'}]}>
          <TextInput 
          value={value}
          //onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          style={[styles.input, {}]}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          autoCorrect={false}
           />
        </View>
        {error && <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>}
        </>
        )}
      />
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