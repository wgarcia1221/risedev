import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home.js'
import Connections from '../screens/Connections.js'
import Post from '../screens/Post.js'
import Profile from '../screens/Profile.js'
import Notifications from '../screens/Notifications.js'
import {Ionicons} from '@expo/vector-icons'

const TabNavigator = createBottomTabNavigator(
{
  Home: 
  {screen: Home,
    navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
            <Ionicons name = {focused ? 'ios-home': 'ios-home-outline'} size = {32}/>
    )}},  
  Profile:
  {screen: Profile,
    navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
            <Ionicons name = {focused ? 'person': 'person-outline'} size = {32}/>
    )}},  
  Post: 
  {screen: Post,
    navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
            <Ionicons name = {focused ? 'add-circle': 'add-circle-outline'} size = {32}/>
    )}},  
  Connections: 
  {screen: Connections,
    navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
            <Ionicons name = {focused ? 'people': 'people-outline'} size = {32}/>
    )}},  
  Notifications:
  {screen: Notifications,
    navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
            <Ionicons name = {focused ? 'notifications': 'notifications-outline'} size = {32}/>
    )}},  

}
);

export default createAppContainer(TabNavigator);