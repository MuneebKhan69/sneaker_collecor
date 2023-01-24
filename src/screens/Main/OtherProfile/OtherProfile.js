import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import ProfileImage from '../../../components/ProfileImage';
import {appIcons} from '../../../assets';
import {colors} from '../../../utils';

const OtherProfile = ({route}) => {
  const {user} = route?.params;
  return (
    <AppBackground back title={user?.name} marginHorizontal={false}>
      <View style={{alignItems: 'center', alignSelf: 'center'}}>
        <View style={{marginTop: 20}}>
          <ProfileImage
            name={'UserName'}
            innerAsset
            imageUri={appIcons.userPlaceholder}
          />
        </View>
        <Text
          style={{
            marginTop: 25,
            color: colors.black,
            fontSize: 24,
          }}>
          {user?.name}
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
};

export default OtherProfile;
