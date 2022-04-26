import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import MaterialTopTabNavigator from "./MaterialTopTabNavigator";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import SearchScreen from "../screens/Search";
import PopularScreen from "../screens/Following";

const Tab = createBottomTabNavigator();
//const tabBarHeight = useBottomTabBarHeight();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName = "Home"
          backBehavior="history"
          screenOptions = {{
            headerStyle: {
              backgroundColor: "white", 
              textAlignment: "center", 
              position: "absolute",
            },
            tabBarBackground: () => (
              <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
            ),
          }}
        >
          <Tab.Screen name="Search" component={SearchScreen} 
            options = {{
              tabBarLabel: "Search",
              tabBarActiveTintColor: "black",
              tabBarIcon: ({ color, size}) => (
                <Ionicons name = "search" color = {color} size = {size} />
              )
            }} 
          />

          <Tab.Screen name="Home" component={HomeScreen}
            options = {{
              tabBarLabel: "Home",
              tabBarActiveTintColor: "black",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }} 
          />

          <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{
              tabBarLabel: 'Profile',
              title: "My Profile",
              tabBarActiveTintColor: "black",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
