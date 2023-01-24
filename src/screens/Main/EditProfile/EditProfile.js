import React, {useState} from 'react';
import {Image, Dimensions, View} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInputView from '../../../components/CustomTextInputView';
import ProfileImage from '../../../components/ProfileImage';
import ImagePicker from '../../../components/ImagePicker';
import NavService from '../../../helpers/NavService';
import {appIcons} from '../../../assets';
import {colors} from '../../../utils';
import styles from './styles';

const {width} = Dimensions.get('screen');

export default function EditProfile() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const updateImageInGallery = (path, mime, type) => {
    setProfileImage({path, mime, type});
  };
  return (
    <AppBackground back title={'Edit Profile'} marginHorizontal={false}>
      <View style={{alignItems: 'center', alignSelf: 'center'}}>
        <View style={{marginTop: 20}}>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery(path, mime, type);
            }}>
            <ProfileImage
              name={'UserName'}
              innerAsset={profileImage == null ? true : false}
              imageUri={
                profileImage !== null
                  ? profileImage?.path
                  : appIcons.userPlaceholder
              }
            />
            <View
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
            </View>
          </ImagePicker>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <CustomTextInputView
            profile={'profile'}
            leftIcon={appIcons.user}
            placeholder={'Name'}
            label={'Name'}
            value={name}
            Onchange={value => setName(value)}
            containerStyle={{
              marginBottom: 20,
              width: '90%',
              color: colors.black,
            }}
          />
          <CustomTextInputView
            profile={'profile'}
            leftIcon={appIcons.phone}
            placeholder={'Phone Number'}
            label={'Phone Number'}
            value={phoneNumber}
            Onchange={value => setPhoneNumber(value)}
            containerStyle={{
              marginBottom: 20,
              width: '90%',
              color: colors.black,
            }}
          />
          <CustomTextInputView
            profile={'profile'}
            leftIcon={appIcons.address}
            placeholder={'Address'}
            label={'Address'}
            value={address}
            Onchange={value => setAddress(value)}
            containerStyle={{
              marginBottom: 20,
              width: '90%',
              color: colors.black,
            }}
          />
          <View style={{marginTop: 10}}>
            <CustomButton
              title="SAVE CHANGES"
              onPress={this.onSubmit}
              buttonStyle={{borderRadius: 10, width: width - 70}}
              textStyle={{fontSize: 18}}
            />
          </View>
        </View>
      </View>
    </AppBackground>
  );
}
