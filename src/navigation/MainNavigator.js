import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Order from '../screens/Order';
import Profile from '../screens/Profile';
import { Image } from 'react-native';

const Bottom = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? require('../Images/Home.png') : require('../Images/homeun.png');
          } else if (route.name === 'Category') {
            iconName = focused ? require('../Images/category.png') : require('../Images/category.png');
          } else if (route.name === 'Order') {
            iconName = focused ? require('../Images/order.png') : require('../Images/order.png');
          } else if (route.name === 'Profile') {
            iconName = focused ? require('../Images/profilecol.png') : require('../Images/profile.png');
          }

          
          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#13C7EB',
        inactiveTintColor: 'gray',
      }}>
      <Bottom.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Bottom.Screen name='Category' component={Category} options={{ headerShown: false }} />
      <Bottom.Screen name='Order' component={Order} options={{ headerShown: false }} />
      <Bottom.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
    </Bottom.Navigator>
  );
};

export default MainNavigator;
