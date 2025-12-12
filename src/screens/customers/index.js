// src/screens/customers.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Customers() {
  return (
    <View style={{marginTop: 400, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Lista de clientes</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
