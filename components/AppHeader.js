import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from "react-native-elements";
import { MaterialCommunityIcons, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import { Icon } from "react-native-elements"

class AppHeader extends React.Component{
  render(){
    return(
        <View>
            <View style= {styles.textContainer}>
                <Text style={styles.text}>Home</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
  },

  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;