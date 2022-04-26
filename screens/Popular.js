import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default class PopularScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor={"black"}
          barStyle = "light-content"
          translucent = {true}
        />
        <Text style={styles.text}>Popular Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4",
  },

  text: {
    color: "#ffff",
    fontSize: 30,
  },
});