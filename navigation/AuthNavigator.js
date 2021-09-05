import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUp from '../screens/SignUp.js'
import Login from '../screens/Login.js'

const AuthNavigator = createStackNavigator(
{
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUp: {
        screen: SignUp
    }
}
);

export default createAppContainer(AuthNavigator);