import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from "../styles.js"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateEmail, updatePassword, updateName, confirmPassword} from '../actions/user.js'


class SignUp extends React.Component {

  login = () => {
    if(this.props.user.email && this.props.user.password && this.props.user.name && (this.props.user.password === this.props.user.cpassword)){
        this.props.navigation.navigate('Home')
    }
}
    render(){
        return(
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up </Text>
      <TextInput 
        style = {styles.border}
        value = {this.props.user.name}
        onChangeText = {input => this.props.updateName(input)}
        placeholder = 'Full Name:'
      />
      <TextInput 
        style = {styles.border}
        value = {this.props.user.email}
        onChangeText = {input => this.props.updateEmail(input)}
        placeholder = 'Enter Email Address:'
      />
      <TextInput 
        style = {styles.border}
        value = {this.props.user.password}
        onChangeText = {input => this.props.updatePassword(input)}
        placeholder = 'Create Password:'
        secureTextEntry = {true}
      />
      <TextInput 
        style = {styles.border}
        value = {this.props.user.cpassword}
        onChangeText = {input => this.props.updatePassword(input)}
        placeholder = 'Confirm Password:'
        secureTextEntry = {true}
      />
      <TouchableOpacity style = {styles.button} onPress = { () => this.props.navigation.navigate('Home')}>
        <Text> Create Account </Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 