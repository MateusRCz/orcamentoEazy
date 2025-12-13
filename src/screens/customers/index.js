// src/screens/customers.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Customers() {
  return (
    <View style={{gap: 10, marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{backgroundColor: '#9C9C9C', width: '100%', textAlign: 'center', marginTop: 5, marginBottom: 10, color: '#ffff'}}>Clientes</Text>
          
          <Text style={{color: '#BCBCBC'}}>2 encontrados</Text>

          <View style={{flexDirection: 'row', gap: 30, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#D9D9D9', width: 360, height: 65, borderRadius: 10}}>
              
              <Feather name="user" size={25} />
              <Text style={{fontSize: 15}}>Nome</Text>
              <Text style={{fontSize: 15}}>0000-0000</Text>
              <Feather name="phone" size={25} />
              <Feather name="edit" size={25} />

          </View>

          <View style={{flexDirection: 'row', gap: 30, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#D9D9D9', width: 360, height: 65, borderRadius: 10}}>
              
              <Feather name="user" size={25} />
              <Text style={{fontSize: 15}}>Nome</Text>
              <Text style={{fontSize: 15}}>0000-0000</Text>
              <Feather name="phone" size={25} />
              <Feather name="edit" size={25} />

          </View>

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
