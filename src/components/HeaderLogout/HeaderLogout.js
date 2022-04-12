import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import React from 'react'

const HeaderLogout = ( { text, navigation } ) => {
    
  return (
    <Pressable 
        style={styles.container} 
        onPress={() =>
            Alert.alert("Logging out?", "Are you sure you want to logout?", [
              {
                text: "NO",
                //onPress: () => console.warn("NO Pressed"),
                style: "cancel"
              },
              {
                text: "YES",
                onPress: () =>
                   {
                      navigation.navigate('Login');
                    }
                    
              }
            ])
          }
        >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({ 
    container: {
        width: '25%', //100% of the parent view
        height: '6%',
        padding: 15,
        marginRight: 8,
        marginLeft: 225,
        marginTop: 50,
        

        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#FFC904',
        borderWidth: 1,
    },
    text: {
        fontSize: 12,
        fontFamily: 'PingFangHK-Semibold',
    }
});

export default HeaderLogout