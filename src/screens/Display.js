import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import HeaderLogout from '../components/HeaderLogout'; 
import { FlatList } from "react-native";

/*export default class Display extends Component {
  constructor(props) 
  {
    super(props)
    this.state = 
    {
       message: ' '
    }
  }

  
  
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>This is the Display Screen. You've logged in!</Text>
        <HeaderLogout 
        text="LOGOUT"
        navigation={ this.props.navigation }
        />
      </View>
    )
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
    color: '#FFC903',
    fontSize: 15,
    fontFamily: 'PingFangHK-Semibold',
    marginTop: 200
  }
})*/



const Display = ({navigation}) => {
  const days = [
    {id: '1', name: 'COP331'},
    {id: '2', name: 'CAP4630'},
    {id: '3', name: 'COT4210'},
    {id: '4', name: 'CIS4004'},
  ];

  const ListItem = ({index}) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>{days[index].name}</Text>
      </View>
    );
  };

  const handleEmpty = () => {
    return <Text style={styles.title}> No schedule has been created!</Text>;
  };

  return (

      <View style={styles.root}>
        {/*<Text style={styles.title}>This is the Display Screen. You've logged in!</Text>*/}
        <HeaderLogout 
        text="LOGOUT"
        //navigation={ this.props.navigation }
        navigation={navigation}
        />
      {/*<FlatList
        contentContainerStyle={{borderRadius: 6, overflow: 'hidden' }}
        data={data} //pass in our data array
        renderItem={renderItem} //tell React to use our renderItem function that we defined earlier
  />*/}
  <Text>SPRING 2022</Text>
<FlatList
        style={styles.flatList}
        data={days}
        ListEmptyComponent={handleEmpty}
        renderItem={({index}) => <ListItem key={index} index={index} />}
      />
  </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    color: '#FFC903',
    fontSize: 15,
    fontFamily: 'PingFangHK-Semibold',
    marginTop: 200
  },
  flatList: {
    width: '100%',
  },
  listText: {
    color: 'white',
  },
  listItem: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#EBD671', //'#776677',
    padding: 10,
    borderRadius: 5,
    //borderColor: '#FFC903'
  }
})

export default Display