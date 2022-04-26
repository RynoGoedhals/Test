import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, HeaderBackground } from "react-native-elements";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: 'Black', size: 30 }}
          centerComponent={{ text: 'MY TITLE', style: { color: 'Black', fontSize: 25, fontFamily: "Trebuchet MS" } }}
          rightComponent={{ icon: 'home', color: 'Black', size: 30 }}
          backgroundColor = "white"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});