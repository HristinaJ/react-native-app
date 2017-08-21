import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
   DrawerNavigator,
   StackNavigator,
   TabNavigator
 } from 'react-navigation';
import Index from './app/components/Index';
import App from './app/components/app';


AppRegistry.registerComponent('NewApp', () => App);
