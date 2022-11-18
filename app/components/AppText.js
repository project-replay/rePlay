import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({children}) {
  return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 0,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", 
},
});

export default AppText;