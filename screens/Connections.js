import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from "../styles.js"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export default class Connections extends React.Component {
    render(){
        return(
    <View style={styles.container}>
      <Text>Connections</Text>
    </View>
  );
}
}