import React from 'react';
import styles from '../styles.js';
import { Image, Text, View } from 'react-native';
import logo from '../assets/logo.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateEmail, updatePassword, updateName, confirmPassword} from '../actions/user.js'

class Home extends React.Component {
    render(){
        return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
    </View>
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateName, updateEmail, updatePassword, confirmPassword}, dispatch)
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 

