import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import { View, Image, StyleSheet } from 'react-native';
import FavoritesStack from './stack/FavoritesStack';
import HomeStack from './stack/HomeStack';
import AuthStack from './stack/AuthStack';
import HistorialStack from './stack/HistorialStack';
import CarritoStack from './stack/CarritoStack';
import Perfil from './stack/Perfil'

const Tab = createBottomTabNavigator();

const CustomHeader = () => (
  <View style={styles.header}>
    {/* Puedes ajustar el estilo y el contenido según tus necesidades */}
    <Image source={require('../../../assets/logo.png')} style={styles.headerImage} />
  </View>
);

const Navigation = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {userLoggedIn ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            header: () => <CustomHeader />, // Usa el componente de encabezado personalizado
            tabBarIcon: ({ focused, color, size }) => {
              const { iconName, iconType } = getIconName(route.name, focused);
              const iconSize = focused ? 40 : 35;
              return <Icon name={iconName} type={iconType} size={iconSize} color={color} />;
            },
            tabBarActiveTintColor: '#7A1010',
            tabBarInactiveTintColor: 'black',
            tabBarStyle: { backgroundColor: '#fff', height: 70 },
          })}
        >
          <Tab.Screen name='HomeStack' component={HomeStack} options={{ title: 'Home' }} />
          <Tab.Screen name='CarritoStack' component={CarritoStack} options={{ title: 'Carrito' }} />
          <Tab.Screen name='FavoritesStack' component={FavoritesStack} options={{ title: 'Favoritos' }} />
          <Tab.Screen name='HistorialStack' component={HistorialStack} options={{ title: 'Historial' }} />
          {userLoggedIn && <Tab.Screen name='Perfil' options={{ title: 'Perfil' }}>
            {() => <Perfil setUserLoggedIn={setUserLoggedIn} />}
          </Tab.Screen>}
        </Tab.Navigator>
      ) : (
        <AuthStack setUserLoggedIn={setUserLoggedIn} />
        
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#A2160F',
    alignItems: 'center',
    justifyContent: 'center',
    height: 170, // Ajusta la altura según tus necesidades
    borderRadius: 30,
  },
  headerImage: {
    marginTop: 180,
    width: 170, // Ajusta el ancho según tus necesidades
    height: 170, // Ajusta la altura según tus necesidades
    borderRadius: 120,
    backgroundColor: 'white'
  },
});

const getIconName = (routeName, focused) => {
  let iconName = '';
  let iconType = 'material-community';

  switch (routeName) {
    case 'HomeStack':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'CarritoStack':
      iconName = focused ? 'cart' : 'cart-outline';
      break;
    case 'FavoritesStack':
      iconName = focused ? 'heart' : 'heart-outline';
      break;
    case 'HistorialStack':
      iconName = focused ? 'history' : 'history';
      break;
    case 'AuthStack':
      iconName = focused ? 'account' : 'account-outline';
      break;
    case 'Perfil':
      iconName = focused ? 'account' : 'account-outline';
      break;
  }

  return { iconName, iconType };
};

export default Navigation;
