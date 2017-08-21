import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './Login/login';
import Users from './Users';
import Confirmation from './Confirmation';
import Reviews from './reviews';
import Skills from './skills';

export const UserStack = StackNavigator({
    Users: {
        screen: Users,
        navigationOptions: {
            title: 'Users',
        },
    },
    Confirmation: {
        screen: Confirmation,
        navigationOptions: {
            title: 'Confirmation',
        },
    },
});

export const Tabs = TabNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
                tabBarLabel: 'Login',
                tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor}/>
            },
        },
    Users: { screen: UserStack, },
});