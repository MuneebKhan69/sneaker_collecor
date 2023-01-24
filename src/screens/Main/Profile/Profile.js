import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import ProfileImage from '../../../components/ProfileImage';
import NavService from '../../../helpers/NavService';
import {appIcons} from '../../../assets';
import {colors} from '../../../utils';

export default function Profile() {
  return (
    <AppBackground back title={'Profile'} marginHorizontal={false}>
      <View style={{alignItems: 'center', alignSelf: 'center'}}>
        <View style={{marginTop: 20}}>
          <ProfileImage
            name={'UserName'}
            innerAsset
            imageUri={appIcons.userPlaceholder}
          />
          <TouchableOpacity
            onPress={() => NavService.navigate('EditProfile')}
            activeOpacity={0.8}
            style={{
              width: 35,
              height: 35,
              borderRadius: 35 / 2,
              backgroundColor: colors.primary,
              position: 'absolute',
              bottom: 5,
              right: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={appIcons.upload}
              style={{width: 18, height: 18, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: 25,
            color: colors.black,
            fontSize: 24,
          }}>
          Username
        </Text>
        <Text
          numberOfLines={1}
          style={{
            marginTop: 10,
            color: colors.black,
            fontSize: 20,
          }}>
          Contact :{' '}
          <Text
            style={{
              fontSize: 18,
            }}>
            +00 00 000
          </Text>
        </Text>
        <Text
          numberOfLines={1}
          style={{
            marginTop: 10,
            color: colors.black,
            fontSize: 20,
          }}>
          Address :{' '}
          <Text
            style={{
              fontSize: 18,
            }}>
            New York USA
          </Text>
        </Text>
      </View>
    </AppBackground>
  );
}
