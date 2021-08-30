import React from 'react';
import styles from '../styles.js';
import { Image, Text, View } from 'react-native';
import logo from '../assets/logo.png';


export default class Home extends React.Component {
    render(){
        return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
    </View>
  );
}
}


