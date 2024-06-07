import { View, Text, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Goback = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{navigation.goBack()}}
     style={{marginTop:10 , marginLeft:10}}>
      <Image source={require('../Images/back.png')}/>
    </TouchableOpacity>
  )
}

export default Goback