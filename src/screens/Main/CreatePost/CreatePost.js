import React, { useState } from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppBackground from '../../../components/AppBackground';
import CustomButton from '../../../components/CustomButton';
import Shadows from '../../../helpers/Shadows';
import NavService from '../../../helpers/NavService';
import ImagePicker from '../../../components/ImagePicker';
import { appIcons } from '../../../assets';
import { colors } from '../../../utils';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

export default function CreatePost() {
  const [image, setImage] = useState(null);
  const updateImageInGallery = (path, mime, type) => {
    setImage({ path, mime, type });
  };
  return (
    <AppBackground back title={'CREATE POST'} marginHorizontal={false}>
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            height: 270,
            alignSelf: 'center',
            borderRadius: 15,
            marginTop: 10,
            overflow: 'hidden',
            backgroundColor: colors.white,
            ...Shadows.shadow0,
          }}>
          <TextInput
            style={{
              marginHorizontal: 10,
              flex: 1,
              marginVertical: 10,
              color:colors.black,
            }}
            multiline={true}
            autoFocus
            placeholder="Share a Post"
            placeholderTextColor={colors.black}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                padding: 10,
              }}>
              {image !== null ? (
                <View style={{ position: 'relative' }}>
                  <Image
                    resizeMode="cover"
                    style={{
                      width: width * 0.13,
                      height: height * 0.06,
                      borderRadius: 15,
                    }}
                    source={image !== null ? { uri: image?.path } : ''}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ position: 'absolute', right: -5, top: -5 }}
                    onPress={() => setImage(null)}>
                    <AntDesign name="closecircle" size={20} color={'red'} />
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: image == null ? 15 : 0,
              }}>
              <ImagePicker
                onImageChange={(path, mime, type) => {
                  updateImageInGallery(path, mime, type);
                }}>
                <View
                  style={{
                    marginHorizontal: 10,
                    padding: 10,
                    backgroundColor: colors.primary,
                    borderRadius: 15,
                  }}>
                  <Image
                    style={{
                      width: width * 0.07,
                      height: height * 0.03,
                      tintColor: colors.white,
                    }}
                    source={appIcons.postAttachment}
                  />
                </View>
              </ImagePicker>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomButton
            title="POST"
            onPress={() => NavService.goBack()}
            buttonStyle={{ borderRadius: 10, width: width - 50 }}
            textStyle={{ fontSize: 18 }}
          />
        </View>
      </View>
    </AppBackground>
  );
}
