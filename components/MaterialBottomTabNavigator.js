import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5, Feather, AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Header } from "@react-navigation/elements";

import MaterialTopTabNavigator from "./MaterialTopTabNavigator";

import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import SearchScreen from "../screens/Search";
import NotificationScreen from "../screens/Notifications";


const Tab = createMaterialBottomTabNavigator();

export default class MaterialBottomTabNavigator extends Component{
    render(){
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName = "Top"
                    backBehavior="history"
                    activeColor="black"
                    inactiveColor="grey"
                    barStyle={{ 
                        backgroundColor: 'white', 
                        justifyContent: "center", 
                        alignContent: "center", 
                    }}
                >
                    <Tab.Screen name="Search" component={SearchScreen} 
                        options = {{
                            tabBarLabel: "Search",
                            activeColor: "black",
                            // tabBarColor: "#50C878",
                            tabBarIcon: ({ color, size}) => (
                                <Ionicons name = "search" color = {color} size = {25} />
                            ),
                        }}
                    />

                    <Tab.Screen name = "Top" component={MaterialTopTabNavigator} 
                        options = {{
                            tabBarLabel: "Home",
                            activeColor: "black",
                            // tabBarColor: "white",
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name="home" size={24} color={color} />
                            ),
                        }} 
                    />

                    <Tab.Screen name="Notification" component={NotificationScreen} 
                        options={{
                            tabBarLabel: 'Notification',
                            //title: "Popular",
                            activeColor: "black",
                            // tabBarColor: "red",
                            tabBarIcon: ({ color, size }) => (
                                <Feather name="bell" size={24} color={color} />
                            ),
                        }} 
                    />

                    <Tab.Screen name="Profile" component={ProfileScreen} 
                        options={{
                            tabBarLabel: 'Profile',
                            //title: "My Profile",
                            activeColor: "black",
                            // tabBarColor: "#2538FF",
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="account" color={color} size={25} />
                            ),
                        }} 
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
        
    }
}

const styles = StyleSheet.create({

});

