import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './Login/login';
import Users from './Users';
import Confirmation from './Confirmation';
import Reviews from './reviews';
import Skills from './skills';
import Register from './Register/register';

export const UserStack = StackNavigator({
    Users: {
        screen: Users,
        navigationOptions: {
            title: 'Users',
        },
    },
    Reviews: {
        screen: Reviews,
        navigationOptions: {
            title: 'Messages',
        },
    },
});

export const RegisterStack = StackNavigator({
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register',
        },
    },
    Skills: {
        screen: Skills,
        navigationOptions: {
            title: 'Skills',
        },
    },
});

export const LoginStack = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        },
    },
    Register: {
        screen: RegisterStack,
        navigationOptions: {
            title: 'Register',
        },
    },
});

export const Tabs = TabNavigator({
    Login: { screen: LoginStack, },
    Users: { screen: UserStack, },
});