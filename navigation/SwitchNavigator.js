import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator.js';
import AuthNavigator from './AuthNavigator.js';


const SwitchNavigator = createSwitchNavigator(
{
    Home: {
        screen: TabNavigator,
    },
    Auth: {
        screen: AuthNavigator
    },
},
    {
        initialRouteName: 'Auth',
    }

);

export default createAppContainer(SwitchNavigator);