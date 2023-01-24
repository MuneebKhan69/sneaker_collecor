import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import moment from 'moment';
import AppBackground from '../../../../components/AppBackground';
import Devices from '../../../../helpers/Devices';
import {appImages, appIcons} from '../../../../assets';
import {colors} from '../../../../utils';
import NavService from '../../../../helpers/NavService';

const {width, height} = Dimensions.get('screen');

const Likes = () => {
  const [likes, setLikes] = useState([
    {
      name: 'Jordan 1 High SE',
      image: appIcons.postOne,
    },
    {
      name: 'Jordan 1 High SE',
      image: appIcons.postTwo,
    },
  ]);
  return (
    <AppBackground back title={'LIKES'} marginHorizontal={false}>
      <FlatList
        data={likes}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <LikesList item={item} />}
      />
    </AppBackground>
  );
};

export default Likes;

const LikesList = ({item}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('OtherProfile', {user: item})}
      style={{
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        marginHorizontal: 3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        ...Shadows.shadow0,
      }}>
      <View style={{padding: 3, borderRadius: 10}}>
        <Image
          source={item?.image}
          style={{
            width: 45,
            height: 45,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{flex: 1, marginLeft: 20, marginTop: 12}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text
            style={{
              color: colors.black,
              fontSize: 17,
              fontWeight: '600',
              textTransform: 'capitalize',
            }}>
            {item?.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
