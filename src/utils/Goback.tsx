import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import defaultImage from '../Images/back.png';

const Goback = ({ source }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => { navigation.goBack(); }} style={{ marginTop: 10, marginLeft: 10 }}>
      <Image source={source ? source : defaultImage} />
    </TouchableOpacity>
  );
};

export default Goback;
