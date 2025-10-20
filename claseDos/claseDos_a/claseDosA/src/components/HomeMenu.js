import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
const Tab = createBottomTabNavigator()

import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function HomeMenu() {
    return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={ Home } options={
                    {
                        headerShown:false,
                         tabBarIcon: () => <Foundation name="home" size={24} color="black" />
                    }
                    }/>
                <Tab.Screen name="Profile" component={ Profile } options={{headerShown:false,  tabBarIcon: () =><MaterialCommunityIcons name="face-man-profile" size={24} color="black" />}} />
            </Tab.Navigator>
    )
}
export default HomeMenu;