import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Goback from '../utils/Goback';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { removeMyCartItem } from '../Redux/MyCartSlice';

const MyCart = () => {
  const myCartItems = useSelector(state => state.cart);
  const dispatch = useDispatch()

  const navigation = useNavigation();

  const totalPrice = () => {
    let total = 0;
    myCartItems.map(item => {
      total = total + item.qty * item.mrp;
    });
    return total;
  };
  return (

    <View style={{flex:1}}>

<ScrollView contentContainerStyle={{paddingBottom: 496}}>
      <View
        style={{
          width: responsiveWidth(100),
          height: 71,
          backgroundColor: '#13C7EB',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 30,
            marginLeft: 12,
          }}>
          <Goback source={require('../Images/backwhite.png')} />
          <Text
            style={{
              fontWeight: 500,
              fontSize: 18,
              color: 'white',
              marginTop: 7,
            }}>
            My Cart
          </Text>
        </View>
      </View>
      {/* Address */}
      <View
        style={{
          width: responsiveWidth(100),
          height: 86,
          backgroundColor: 'white',
          borderWidth: 0.5,
          marginTop: 5,
          borderColor: '#D9D9D9',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12,
          }}>
          <View>
            <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: 400, color: '#1E1E1E'}}>
                {'Deliver To :'}
              </Text>
              <Text style={{fontSize: 14, fontWeight: 500, color: 'black'}}>
                {'Om Shankar Sh...  , 848125'}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: '#7C7979',
                lineHeight: 21,
              }}>
              {'Sharda Nagar (Banti Kirana Store), Purn..'}
            </Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: 93,
                height: 37,
                borderRadius: 8,
                borderWidth: 0.5,
                borderColor: '#B1B1B1',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: 500, color: '#13C7EB'}}>
                {'Change'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Products */}

      <View style={{marginTop: 5, padding: 10}}>
        <FlatList
          data={myCartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: responsiveWidth(46),
                  height: 162,
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  margin: 5,
                  padding: 10,
                  borderWidth: 0.5,
                  borderColor: '#D9D9D9',
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

                  <TouchableOpacity
                   onPress={()=>{dispatch(removeMyCartItem(item))}}
                    style={{
                      width: 71,
                      height: 28,
                      borderRadius: 5,
                      backgroundColor: '#FF0000',
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
                      Remove
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


<View style={{position:'absolute' , bottom:0}}>
   {/* Banner */}
   <View
        style={{
          width: responsiveWidth(100),
          height: 59,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 15,
        }}>
        <Image source={require('../Images/shield.png')} />
        <Text style={{fontWeight: 500, fontSize: 12, color: '#7C7979'}}>
          {'Safe and secure payments. Easy returns.\n100% Authentic products.'}
        </Text>
      </View>

      {/* proceed */}
      <View
        style={{
          width: responsiveWidth(100),
          height: 60,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#D9D9D9',
          marginTop: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 12,
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 500, fontSize: 18, color: 'black'}}>
          {'Rs '+totalPrice()}
        </Text>
        <TouchableOpacity onPress={()=>{}}
          style={{
            width: 150,
            height: 40,
            borderRadius: 5,
            backgroundColor: '#097EEB',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
          }}>
          <Text style={{fontWeight: 500, fontSize: 16, color: 'white'}}>
            Proceed
          </Text>
          <Image source={require('../Images/arrow.png')} />
        </TouchableOpacity>
      </View>

</View>
     
    </ScrollView>

    </View>
   
  );
};

export default MyCart;
