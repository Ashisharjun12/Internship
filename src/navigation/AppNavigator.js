import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../screens/Splash'
import MainNavigator from './MainNavigator'
import AddProduct from '../screens/AddProduct'



const stack = createStackNavigator()


const AppNavigator = () => {
  return (
   <NavigationContainer>
    <stack.Navigator>
        <stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <stack.Screen name='MainNavigator' component={MainNavigator} options={{headerShown:false}}/>
        {/* add product */}
        <stack.Screen name='AddProduct' component={AddProduct} options={{headerShown:false}}/>
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator