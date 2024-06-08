import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Goback from '../utils/Goback';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {addMyProductToMyCart, removeMyCartItem, removeOneCartItem} from '../Redux/MyCartSlice';
import {IncreseQty, DecreaseQty} from '../Redux/ProductSlice';

const AddProduct = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {product} = route.params;

  const mycartitem = useSelector(state => state.cart);
  console.log('added product', mycartitem);

  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    mycartitem.map(item => {
      total = total + item.qty * item.mrp;
    });
    return total;
  };

  const cartItem = mycartitem.find(item => item.id === product.id);
  const productQty = cartItem ? cartItem.qty : 0;

  return (
    <ScrollView>
      <View>
        <View
          style={{
            width: responsiveWidth(100),
            height: 338,
            backgroundColor: 'white',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            padding: 12,
            borderWidth: 1,
            borderColor: '#D9D9D9',
          }}>
          <Goback />
          <Text
            style={{
              color: '#1E1E1E',
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 27,
              textAlign: 'center',
              marginTop: 20,
            }}>
            {product.dose}
          </Text>
          <View
            style={{
              width: responsiveWidth(85),
              borderWidth: 0.5,
              borderColor: '#B1B1B1',
              top: 30,
              marginLeft: 21,
            }}></View>
          <View style={{marginTop: 50, marginLeft: 12}}>
            <Text style={{fontWeight: 500, fontSize: 16, color: '#13C7EB'}}>
              Composition :
            </Text>
            <Text
              style={{
                color: '#7C7979',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 24,
                marginTop: 4,
              }}>
              {product.desc}
            </Text>
          </View>
        </View>

        {/* show prices */}

        <View
          style={{width: responsiveWidth(100), height: responsiveHeight(70)}}>
          <View style={{padding: 14}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, fontWeight: 500, color: 'black'}}>
                MRP : {product.mrp}
              </Text>
              <Text style={{fontSize: 11, fontWeight: 400, color: '#444343'}}>
                {'(Inc. GST)'}
              </Text>
            </View>
            <View style={{marginTop: 15, marginLeft: -3}}>
              <Text style={{fontWeight: 500, fontSize: 18, color: '#00C013'}}>
                {' '}
                OFF : {product.off} %
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginTop: 20,
              }}>
              <View
                style={{
                  width: 39,
                  height: 36,
                  backgroundColor: '#097EEB',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('../Images/rupee.png')} />
              </View>
              <Text style={{fontWeight: 600, fontSize: 18, color: '#444343'}}>
                {product.mrp}
              </Text>
            </View>

            {/* buttons */}

            <View
              style={{
                flexDirection: 'row',
                gap: 17,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              {productQty === 0 ? (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(addMyProductToMyCart(product));
                    dispatch(IncreseQty(product.id));
                  }}
                  style={{
                    width: 220,
                    height: 43,
                    backgroundColor: '#097EEB',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontWeight: 500, fontSize: 16, color: '#FFFFFF'}}>
                    Add To Cart
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                    marginLeft: 8,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addMyProductToMyCart(product));
                      dispatch(IncreseQty(product.id));
                    }}
                    style={{
                      width: 38,
                      height: 38,
                      backgroundColor: '#097EEB',
                      borderRadius: 99,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{fontWeight: 600, fontSize: 22, color: '#FFFFFF'}}>
                      {'+'}
                    </Text>
                  </TouchableOpacity>

                  <Text style={{fontWeight: 400, fontSize: 21, color: 'black'}}>
                    {productQty}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      if (productQty > 1) {
                        dispatch(removeOneCartItem(product))
                        dispatch(DecreaseQty(product.id));
                      } else {
                        dispatch(removeMyCartItem({id: product.id}));
                        
                        dispatch(DecreaseQty(product.id));
                      }
                    }}
                    style={{
                      width: 38,
                      height: 38,
                      backgroundColor: '#097EEB',
                      borderRadius: 99,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{fontWeight: 600, fontSize: 22, color: '#FFFFFF'}}>
                      {'-'}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* add quantity button */}

              {/* end quantity button */}

              <TouchableOpacity
                style={{
                  width: 123,
                  height: 43,
                  backgroundColor: '#097EEB',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 500, fontSize: 16, color: '#FFFFFF'}}>
                  {' '}
                  Buy
                </Text>
              </TouchableOpacity>
            </View>

            {/* button end */}
          </View>

          {/* banner */}
          <View
            style={{
              padding:12,
              width: responsiveWidth(100),
              height: 49,
              backgroundColor: 'white',
              marginBottom: 2,
              alignItems:'center', justifyContent:'space-between',
              flexDirection:'row'
            }}>
              <View style={{flexDirection:'row', alignItems:'center' , gap:3}}>
                <Text style={{fontWeight:400 , fontSize:16 , color:'black'}}>{"MARKETR :"}</Text>
                <Text style={{fontWeight:400 , fontSize:16 , color:'#097EEB'}}>{product.marketer}</Text>
              </View>
              <View>
                <Text style={{fontSize:12 , fontWeight:400 , color:'#FF0000'}}>{"10 x 6"}</Text>
              </View>
            </View>

          {/* market cap */}
          <View
            style={{
              width: responsiveWidth(100),
              height: 82,
              backgroundColor: 'white',
              marginTop: 5,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View style={{alignItems: 'center', gap: 4}}>
                <Image source={require('../Images/happy.png')} />
                <Text style={{fontSize: 10, fontWeight: 400, color: 'black'}}>
                  {'10K+ Happy Sellers'}
                </Text>
              </View>
              <View style={{alignItems: 'center', gap: 4}}>
                <Image source={require('../Images/genuine.png')} />
                <Text style={{fontSize: 10, fontWeight: 400, color: 'black'}}>
                  {'100% Authentic'}
                </Text>
              </View>
              <View style={{alignItems: 'center', gap: 4}}>
                <Image source={require('../Images/greencheck.png')} />
                <Text style={{fontSize: 10, fontWeight: 400, color: 'black'}}>
                  {'Quality Checked Products'}
                </Text>
              </View>
            </View>
          </View>

          {/* banner 2 */}
          <View
            style={{
              width: responsiveWidth(100),
              height: 80.56,
              backgroundColor: 'white',
              marginTop: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Image source={require('../Images/del.png')} />
              <View style={{gap: 3}}>
                <Text style={{fontWeight: 500, fontSize: 18, color: 'black'}}>
                  {'Superfast Delivery'}
                </Text>
                <Text style={{fontWeight: 400, fontSize: 14, color: '#7F7F7F'}}>
                  {'High priority delivery for all orders'}
                </Text>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 13, fontWeight: 500, color: 'black'}}>
                {'3/3'}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: responsiveWidth(100),
              height: 33.44,
              backgroundColor: '#FF006E',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 9,
            }}>
            <Image source={require('../Images/star.png')} />
            <Text style={{fontWeight: 600, fontSize: 15, color: 'white'}}>
              {'Our priority is safe & secure delivery'}
            </Text>
          </View>

          {/* add to cart*/}

          {mycartitem.length > 0 ? (
            <View
              style={{
                width: responsiveWidth(90),
                height: 60,
                backgroundColor: '#097EEB',
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 8,
                justifyContent: 'space-between',
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontWeight: 500, fontSize: 14, color: 'white'}}>
                  {mycartitem.length + ' item'}
                </Text>
                <Text style={{fontWeight: 500, fontSize: 14, color: 'white'}}>
                  {' Rs ' + totalPrice()}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MyCart');
                }}
                style={{
                  height: 40,
                  width: 123,
                  borderRadius: 8,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#097EEB', fontWeight: 500, fontSize: 16}}>
                  Go To Cart
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default AddProduct;
