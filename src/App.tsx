
import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import {Provider , useDispatch } from "react-redux"
import { myStore } from './Redux/MyStore'

const App = () => {
  return (
    <Provider store={myStore}>
       <AppNavigator/>
    </Provider>
 
  )
}

export default App