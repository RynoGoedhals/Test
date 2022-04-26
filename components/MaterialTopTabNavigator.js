import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import rec from "../assets/rec.png"

import RecommendedScreen from "../screens/Recommended";
import PopularScreen from "../screens/Popular";
import NewScreen from "../screens/New";

const TopTab = createMaterialTopTabNavigator();

export default class MaterialTopTabNavigator extends Component {
  render() {
    return (
      <TopTab.Navigator 
        style = {styles.container}
      >
          <TopTab.Screen name = "Home" component = {RecommendedScreen}
            options = {{
              tabBarInactiveTintColor: "grey",
              tabBarActiveTintColor: "black",
              tabBarStyle: {backgroundColor: "white", shadowColor: "white", marginLeft: 50},
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="fire" color={color} size={25} />
              ),
              tabBarItemStyle: {backgroundColor: "white"},
            }}
          />

          <TopTab.Screen name = "Popular" component = {PopularScreen} 
            options={{
              tabBarLabel: 'Popular',
              tabBarInactiveTintColor: "grey",
              tabBarActiveTintColor: "black",
              tabBarStyle: {backgroundColor: "white", shadowColor: "white", marginLeft: 50},
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="fire" color={color} size={25} />
              ),
              tabBarItemStyle: {backgroundColor: "white"}
            }} 
          />
          
          <TopTab.Screen name = "New" component = {NewScreen}
            options = {{
              tabBarInactiveTintColor: "grey",
              tabBarActiveTintColor: "black",
              tabBarStyle: {backgroundColor: "white", shadowColor: "white", marginLeft: 50},
              tabBarIcon: ({ size, color}) => (
                <MaterialCommunityIcons name="new-box" size={25} color={color} />
              ),
              tabBarItemStyle: {backgroundColor: "white"},
            }}
          />
      </TopTab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "white",
    elevation: 0,
    borderWidth: 0
  }
});
