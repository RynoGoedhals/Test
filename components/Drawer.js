import React, { Component } from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  render() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen />
        </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});