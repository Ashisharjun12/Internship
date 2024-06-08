import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Medicines from '../components/Medicines';

const Home = () => {
  




  return (
    <ScrollView>
      <View
        style={{
          marginLeft: responsiveWidth(2),
          marginRight: responsiveWidth(2),
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(2),
          }}>
          <Image
            source={require('../Images/helath.png')}
            width={100}
            height={100}
          />
          <Image
            source={require('../Images/btn.png')}
            width={100}
            height={100}
          />
        </View>

        {/* search */}
        <View>
          <View
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(6.8),
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 0.2,
              alignSelf: 'center',
              marginTop: responsiveHeight(2),
              marginBottom: responsiveHeight(1.5),
              borderRadius: 8,
              gap: responsiveWidth(3),
              paddingLeft: responsiveWidth(4),
              paddingRight: responsiveWidth(4),
            }}>
            <Image source={require('../Images/search.png')} />

            <TextInput
              style={{fontSize: responsiveFontSize(2)}}
              placeholder="search medicines or more..."
              keyboardType="default"
             
            />
          </View>
        </View>

        {/* banner */}
        <View style={{ width:responsiveWidth(100) , height:140 }}>
          <Image
            source={require('../Images/special.png')}
            width={responsiveWidth(100)}
            height={140}
           
          />
        </View>

        {/* discount */}
        <View
          style={{
            width: 386,
            height: 66,
            marginTop: responsiveHeight(2),
            borderRadius: 8,
            borderWidth: 0.2,
            flexDirection: 'row',
            alignItems: 'center',
            gap: responsiveWidth(3),
          }}>
          <View>
            <Image source={require('../Images/discount.png')} />
          </View>
          <View>
            <Text style={{fontWeight: 600, color: 'black', fontSize: 16}}>
              Free Delivery & Convenience Charge
            </Text>
            <Text style={{color: 'black'}}>
              on every order above Rs. 10,000
            </Text>
          </View>
        </View>

        {/* orders */}
        <View
          style={{
            marginTop: 16,
            marginLeft: responsiveWidth(1),
            marginRight: responsiveWidth(2),
            flexDirection: 'row',
            gap: 4,
          }}>
          <View
            style={{
              width: 185,
              height: 85,
              backgroundColor: '#00C013',
              borderRadius: 8,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 73,
                height: 86,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 0.5,
              }}>
              <Image source={require('../Images/whatup.png')} />
            </View>

            <View style={{marginLeft: 10, marginTop: 5}}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: 500}}>
                {'  Order by\n WhatsApp'}
              </Text>
              <TouchableOpacity
                style={{
                  width: 75,
                  height: 23,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 14,
                    textAlign: 'center',
                    color: '#00C013',
                  }}>
                  Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 185,
              height: 85,
              backgroundColor: '#097EEB',
              borderRadius: 8,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: 73,
                height: 86,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 0.5,
              }}>
              <Image source={require('../Images/call.png')} />
            </View>

            <View style={{marginLeft: 10, marginTop: 5}}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: 500}}>
                {'  Order by\n       Call'}
              </Text>
              <TouchableOpacity
                style={{
                  width: 75,
                  height: 23,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 14,
                    textAlign: 'center',
                    color: '#097EEB',
                  }}>
                  Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* category */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 14,
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 500}}>
            Frequently Purchased Items
          </Text>
          <TouchableOpacity>
            <Text style={{fontWeight: 500, fontSize: 20, color: '#13C7EB'}}>
              {'See All >'}
            </Text>
          </TouchableOpacity>
        </View>
        {/* medicines */}
        <Medicines />

        {/* exclusive */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 14,
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 500}}>
            Exclusive
          </Text>
          <TouchableOpacity>
            <Text style={{fontWeight: 500, fontSize: 20, color: '#13C7EB'}}>
              {'See All >'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* items exclusive */}

        <View style={{flexDirection:'row' , gap:6 , marginBottom:25}}>

        <View style={{ gap:15}}>
          <View
            style={{
              width: 185,
              height: 59,
              backgroundColor: '#FEDFDF',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>
            <Text style={{fontWeight: 400, fontSize: 15, color: '#444343'}}>
              {'Aitne Pharma'}
            </Text>
          </View>
          <View
            style={{
              width: 185,
              height: 59,
              backgroundColor: '#DEE9FF',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 400, fontSize: 15, color: '#444343'}}>
              {'Lifecare Pharma'}
            </Text>
          </View>
          <View
            style={{
              width: 185,
              height: 59,
              backgroundColor: '#FCFFDE',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 400, fontSize: 15, color: '#444343'}}>
              {'Canaxi  Pharma'}
            </Text>
          </View>
        </View>

        <View style={{ gap:15}}>
          <View
            style={{
              width: 185,
              height: 59,
              backgroundColor: '#DCF7FC',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 400, fontSize: 15, color: '#444343'}}>
              {'Aitne Pharma'}
            </Text>
          </View>
          <View
            style={{
              width: 185,
              height: 59,
              backgroundColor: '#E3FFD9',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 400, fontSize: 15, color: '#444343'}}>
              {'Anvicure Pharma'}
            </Text>
          </View>
          <View
            style={{
              width: 185,
              height: 59,
              backgroundColor: '#FCFCFC',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 400, fontSize: 15, color: '#444343'}}>
              {'Zennar Pharma'}
            </Text>
          </View>
        </View>

        </View>
       
      </View>
    </ScrollView>
  );
};

export default Home;
