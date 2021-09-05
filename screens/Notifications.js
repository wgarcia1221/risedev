import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from "../styles.js"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Notifications extends React.Component {
    render(){
        return(
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
}
}