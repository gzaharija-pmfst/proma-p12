import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LokacijeNavigator from "./navigation/LokacijeNavigacija";

export default function App() {
  return (
    <LokacijeNavigator />
  );
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
