import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function CarritoStack() {
  return (
    <View>
      <Text>Carrito de Compras</Text>
    </View>
  )
}

const styles = StyleSheet.create({})