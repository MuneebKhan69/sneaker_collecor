import React, {useState} from 'react';
import {View, Text, Dimensions, ImageBackground} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import CustomButton from '../../../components/CustomButton';
import NavService from '../../../helpers/NavService';
import ImagePicker from '../../../components/ImagePicker';
import {appImages} from '../../../assets';
import {colors} from '../../../utils';
import styles from './styles';

const {width, height} = Dimensions.get('screen');

const CheckOutfit = () => {
  const [outfitImage, setOutfitImage] = useState(null);
  const [shoeImage, setShoeImage] = useState(null);
  const updateImageInGallery = (path, mime, type, name) => {
    const images = {path, mime, type};
    if (name == 'outfit') {
      setOutfitImage(images);
    } else {
      setShoeImage(images);
    }
  };
  return (
    <AppBackground
      menu
      title={'CHECK OUTFIT'}
      notification
      marginHorizontal={false}>
      <View style={{alignItems: 'center'}}>
        <ImagePicker
          onImageChange={(path, mime, type) => {
            updateImageInGallery(path, mime, type, 'outfit');
          }}>
          <ImageBackground
            source={
              outfitImage == null
                ? appImages.checkOutfitOne
                : {uri: outfitImage?.path}
            }
            resizeMode={'contain'}
            style={{
              backgroundColor: colors.gray,
              width: width - 80,
              height: height * 0.18,
              borderRadius: 20,
            }}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.6)',
                width: width - 80,
                height: height * 0.18,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.white, fontSize: 18}}>
                CHOOSE OUTFIT
              </Text>
            </View>
          </ImageBackground>
        </ImagePicker>
        <ImagePicker
          onImageChange={(path, mime, type) => {
            updateImageInGallery(path, mime, type, 'shoe');
          }}>
          <ImageBackground
            source={
              shoeImage == null
                ? appImages.checkOutfitTwo
                : {uri: shoeImage?.path}
            }
            resizeMode={'contain'}
            style={{
              backgroundColor: colors.gray,
              width: width - 80,
              height: height * 0.18,
              borderRadius: 20,
              marginTop: 10,
            }}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.6)',
                width: width - 80,
                height: height * 0.18,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.white, fontSize: 18}}>
                CHOOSE SHOE
              </Text>
            </View>
          </ImageBackground>
        </ImagePicker>
        <CustomButton
          title="VIEW COMBINATION"
          onPress={() => NavService.navigate('Combination')}
          buttonStyle={{borderRadius: 10, width: width - 75, marginTop: 20}}
          textStyle={{fontSize: 18}}
        />
      </View>
    </AppBackground>
  );
};

export default CheckOutfit;
