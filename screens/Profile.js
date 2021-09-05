import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from "../styles.js";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateEmail, updatePassword, updateName, confirmPassword} from '../actions/user.js'

class Profile extends React.Component {
    render(){
        return(
    <View style={styles.container}>
      <Text>
      <Text style = {styles.header}> Name: {this.props.user.name} {"\n"} </Text>
      <Text style = {styles.header}> Email: {this.props.user.email} {"\n"} </Text>
      <Text style = {styles.header}> Password: {this.props.user.password} </Text>
      </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile) 