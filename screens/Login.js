import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from "../styles.js"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateEmail, updatePassword} from '../actions/user.js'


class Login extends React.Component {

    login = () => {
        if(this.props.user.email && this.props.user.password){
            this.props.navigation.navigate('Home')
        }
    }
    render(){
        return(
    <View style={styles.container}>
      <Text style={styles.header}>RISE Residential</Text>

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
        placeholder = 'Enter Password:'
      />
      <TouchableOpacity style = {styles.button} onPress = { () => this.login()}>
        <Text> Log in </Text>
        </TouchableOpacity>
        <Text>{"\n"}OR </Text>
        <TouchableOpacity style = {styles.button} onPress = { () => this.props.navigation.navigate('SignUp')}>
        <Text> Sign Up Here </Text>
        </TouchableOpacity>
    </View>
    
  );
}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateEmail, updatePassword}, dispatch)
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) 