import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ContinueShoppingScreen from '../screens/continueShopping';
import PlaceOrderScreen from '../screens/placeOrder';
import {AppStackNavigator} from './appStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks: {
        screen: AppStackNavigator,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/request-list.png")} style={{ width: 20, height: 20 }} />,
            tabBarLabel: "Donate Books",
        }
    },
    RequestBooks: {
        screen: BookRequestScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/request-book.png")} style={{ width: 20, height: 20 }} />,
            tabBarLabel: "Book Request",
        }
    }
})