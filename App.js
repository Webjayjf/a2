import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Big heading */}
      <Text style={styles.bigHeading}>Welcome to STENT GUARD</Text>

      {/* Medium heading */}
      <Text style={styles.mediumHeading}>Your trusted stent tracking medical application</Text>

      {/* Image */}
      <Image source={require('./11.png')} style={styles.image} />

      {/* "Don't have an account" button */}
      <TouchableOpacity style={styles.outlinedButton}>
        <Text style={styles.outlinedButtonText}>Don't have an account</Text>
      </TouchableOpacity>

      {/* "Have an account" button */}
      <TouchableOpacity style={styles.filledButton}>
        <Text style={styles.filledButtonText}>Have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ADD8E6', // Background color for the screen
  },
  bigHeading: {
    fontSize: 32,
    color: 'darkblue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mediumHeading: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  outlinedButtonText: {
    color: 'black',
    fontSize: 16,
  },
  filledButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  filledButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default WelcomeScreen;
