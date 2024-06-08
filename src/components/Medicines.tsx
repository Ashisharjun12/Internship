import { View, Text ,FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import medicineData from '../json/data.json';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Medicines = () => {

  const navigation = useNavigation()

  const myproducts = useSelector(state => state.product)
 

    

   


  return (
    <View>
       <FlatList
          data={myproducts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: 185,
                  height: 162,
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  margin: 5,
                  padding: 17,
                  borderWidth: 0.2,
                  borderColor: '#ddd',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontWeight: 600,
                    }}>
                    {item.name}
                  </Text>

                  <Image source={require('../Images/info.png')} />
                </View>

                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    fontWeight: 500,
                    marginBottom: 5,
                  }}>
                  MRP: ₹ {item.mrp}
                </Text>
                <Text
                  style={{
                    color: '#00C013',
                    fontSize: 13,
                    fontWeight: 500,
                    marginBottom: 5,
                  }}>
                  OFF: {item.off} %
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 3,
                  }}>
                  <View
                    style={{
                      width: 71,
                      height: 28.45,
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#D9D9D9',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{color: '#10CAF2', fontWeight: 600, fontSize: 14}}>
                      ₹ {item.mrp}
                    </Text>
                  </View>

                  <TouchableOpacity onPressIn={()=>{navigation.navigate('AddProduct' , {product : item})}}
                    onPress={() => {
                      console.log('pressed');
                    }}
                    style={{
                      width: 71,
                      height: 28,
                      borderRadius: 5,
                      backgroundColor: '#13C7EB',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: 'white',
                        textAlign: 'center',
                      }}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={{color: 'black', fontSize: 8, fontWeight: 500}}>
                  {'(Inc. GST)'}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Text style={{color: '#B1B1B1'}}>{'10 x 6'}</Text>
                  <Text style={{color: '#B1B1B1'}}>{'Cipla'}</Text>
                </View>
              </View>
            );
          }}
          numColumns={2}
        />
    </View>
  )
}

export default Medicines