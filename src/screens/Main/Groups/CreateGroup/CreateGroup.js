import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Keyboard
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppBackground from '../../../../components/AppBackground';
import CustomButton from '../../../../components/CustomButton';
import Shadows from '../../../../helpers/Shadows';
import ImagePicker from '../../../../components/ImagePicker';
import NavService from '../../../../helpers/NavService';
import {appImages, appIcons} from '../../../../assets';
import {colors} from '../../../../utils';
import styles from './styles';

const {width, height} = Dimensions.get('screen');

export default function CreateGroup() {
  const [image, setImage] = useState(null);
  const updateImageInGallery = (path, mime, type) => {
    setImage({path, mime, type});
  };
  return (
    <AppBackground back title={'CREATE GROUP'} marginHorizontal={false}>
      <View style={styles.container}>
        <Text style={{fontSize: 17, fontWeight: '600', marginBottom: 5}}>
          Group Title:
        </Text>
        <View
          style={{
            height: 60,
            width: width - 70,
            backgroundColor: colors.white,
            ...Shadows.shadow3,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              flex: 1,
              height: '100%',
              color:colors.black,
            }}
            onBlur={() => Keyboard.dismiss()}
            placeholder="Group Title"
            placeholderTextColor={colors.black}
          />
        </View>
        <Text style={{fontSize: 17, fontWeight: '600', marginVertical: 5}}>
          Messages:
        </Text>
        <View
          style={{
            height: 100,
            width: width - 70,
            backgroundColor: colors.white,
            ...Shadows.shadow3,
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <TextInput
            style={{
              flex: 1,
              height: '100%',
              color:colors.black,
            }}
            onBlur={() => Keyboard.dismiss()}
            multiline
            placeholder="Message"
            placeholderTextColor={colors.black}
          />
        </View>
        <Text style={{fontSize: 17, fontWeight: '600', marginVertical: 15}}>
          Group Cover:
        </Text>
        <View style={{flexDirection: 'row'}}>
          {image !== null ? (
            <View style={{position: 'relative', marginRight: 15}}>
              <Image
                resizeMode="cover"
                style={{
                  width: width * 0.14,
                  height: height * 0.065,
                  borderRadius: 15,
                }}
                source={image !== null ? {uri: image?.path} : ''}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={{position: 'absolute', right: -5, top: -5}}
                onPress={() => setImage(null)}>
                <AntDesign name="closecircle" size={20} color={'red'} />
              </TouchableOpacity>
            </View>
          ) : null}
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery(path, mime, type);
            }}>
            <View
              style={{
                backgroundColor: colors.lightGray,
                padding: 10,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 15,
                ...Shadows.shadow0,
              }}>
              <Image
                source={appIcons.uploadGray}
                style={{width: width * 0.09, height: height * 0.045}}
              />
            </View>
          </ImagePicker>
        </View>
        <View style={{marginTop: 20}}>
          <CustomButton
            title="CREATE GROUP"
            onPress={() => NavService.goBack()}
            buttonStyle={{borderRadius: 10, width: width - 70}}
            textStyle={{fontSize: 18}}
          />
        </View>
      </View>
    </AppBackground>
  );
}
