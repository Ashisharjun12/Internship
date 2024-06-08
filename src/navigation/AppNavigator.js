import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../screens/Splash'
import MainNavigator from './MainNavigator'
import AddProduct from '../screens/AddProduct'
import MyCart from '../screens/MyCart'
import data from '../json/data.json'
import { useDispatch } from 'react-redux'
import { addMyProduct } from '../Redux/ProductSlice'



const stack = createStackNavigator()


const AppNavigator = () => {
const dispatch = useDispatch()

useEffect(()=>{

  data.med.map((item)=>{
    dispatch(addMyProduct(item))
  })

},[])



  return (
   <NavigationContainer>
    <stack.Navigator>
        <stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <stack.Screen name='MainNavigator' component={MainNavigator} options={{headerShown:false}}/>
        {/* add product */}
        <stack.Screen name='AddProduct' component={AddProduct} options={{headerShown:false}}/>
        <stack.Screen name='MyCart' component={MyCart} options={{headerShown:false}}/>
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator