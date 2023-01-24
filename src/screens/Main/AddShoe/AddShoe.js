import React, { useState, useRef } from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  Keyboard,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppBackground from '../../../components/AppBackground';
import CustomButton from '../../../components/CustomButton';
import ActionSheetComponent from '../../../components/ActionSheetComponent';
import { categoriesData, colorData, sizeData } from '../../../utils/dummyData';
import Shadows from '../../../helpers/Shadows';
import NavService from '../../../helpers/NavService';
import { Image as ImageCompressor } from 'react-native-compressor';
import ImagePicker from '../../../components/ImagePicker';
import RNColorPicker from '../../../components/ColorPicker';
import { appIcons } from '../../../assets';
import { colors } from '../../../utils';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

export default function AddShoe() {
  const actionSheetCategoryRef = useRef();
  // const actionSheetColorRef = useRef();
  const actionSheetSizeRef = useRef();
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('Categories');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('Size');
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);

  const updateImageInGallery = async (path, mime, type) => {
    let multipleImages = [];
    if (Array.isArray(path)) {
      const arr = path?.map(async item => {
        const result = await ImageCompressor.compress(item?.path, {
          maxHeight: 400,
          maxWidth: 400,
          quality: 1,
        });
        let imageObject = {
          uri: result,
          name: `ShoeImage${Date.now()}${item?.filename}.${item?.mime.slice(
            item?.mime.lastIndexOf('/') + 1,
          )}`,
          type: item?.mime,
          tempType: 'photo',
        };
        multipleImages.push(imageObject);
      });
      await Promise.all(arr);
      console.log('multipleImages', multipleImages);
      const mergeImagesWithExistingGalleryAssets = [
        ...images,
        ...multipleImages,
      ];
      setImages(mergeImagesWithExistingGalleryAssets);
    } else {
      const getExistingGalleryAssets = [...images];
      const imageObject = {
        uri: path,
        name: `ShoeImage${Date.now()}.${mime.slice(mime.lastIndexOf('/') + 1)}`,
        type: mime,
        tempType: type,
      };
      getExistingGalleryAssets.push(imageObject);
      setImages(getExistingGalleryAssets);
    }
  };
  const removeSelectedAsset = asset => {
    const assetsWithoutTheCurrentAsset = images.filter(
      item => item.uri !== asset,
    );
    setImages(assetsWithoutTheCurrentAsset);
  };
  const togglePopUp = () => {
    setColorPickerVisibility(!colorPickerVisibility);
  };
  const selectedColorFromPaletter = color => {
    console.log('color', color);
    setColor(color);
  };
  return (
    <AppBackground back title={'ADD SHOE'} marginHorizontal={false}>
      <ActionSheetComponent
        ref={actionSheetCategoryRef}
        title="Select a Category"
        dataset={categoriesData}
        onPress={item => {
          setCategory(item);
        }}
      />
      {/* <ActionSheetComponent
        ref={actionSheetColorRef}
        title="Select a Color"
        dataset={colorData}
        onPress={item => {
          setColor(item);
        }}
      /> */}
      <ActionSheetComponent
        ref={actionSheetSizeRef}
        title="Select a Size"
        dataset={sizeData}
        onPress={item => {
          setSize(item);
        }}
      />
      <RNColorPicker
        isVisible={colorPickerVisibility}
        togglePopUp={togglePopUp}
        selectedColorFromPaletter={selectedColorFromPaletter}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <Text style={{ fontSize: 17, fontWeight: '600', marginBottom: 5 }}>
            Title:
          </Text>
          <View
            style={{
              height: 60,
              width: width - 70,
              backgroundColor: colors.white,
              ...Shadows.shadow0,
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
                color: colors.black,
              }}
              onBlur={() => Keyboard.dismiss()}
              placeholder="Title"
              placeholderTextColor={colors.black}
            />
          </View>
          <Text style={{ fontSize: 17, fontWeight: '600', marginVertical: 5 }}>
            Category:
          </Text>
          <TouchableOpacity
            onPress={() => actionSheetCategoryRef.current.show()}
            activeOpacity={0.6}
            style={{
              height: 60,
              width: width - 70,
              backgroundColor: colors.white,
              ...Shadows.shadow0,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Text style={{ color: colors.black }}>{category}</Text>
            <AntDesign name="caretdown" size={22} color={colors.gray} />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, fontWeight: '600', marginVertical: 5 }}>
            Color:
          </Text>
          <TouchableOpacity
            onPress={() => togglePopUp()}
            activeOpacity={0.6}
            style={{
              height: 60,
              width: width - 70,
              backgroundColor: color !== '' ? color : colors.white,
              ...Shadows.shadow0,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Text style={{ color: color !== '' ? colors.white : colors.black }}>
              {color !== '' ? color : 'Color'}
            </Text>
            <AntDesign name="caretdown" size={22} color={colors.gray} />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, fontWeight: '600', marginVertical: 5 }}>
            Size:
          </Text>
          <TouchableOpacity
            onPress={() => actionSheetSizeRef.current.show()}
            activeOpacity={0.6}
            style={{
              height: 60,
              width: width - 70,
              backgroundColor: colors.white,
              ...Shadows.shadow0,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Text style={{ color: colors.black }}>{size}</Text>
            <AntDesign name="caretdown" size={22} color={colors.gray} />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, fontWeight: '600', marginVertical: 5 }}>
            More Details:
          </Text>
          <View
            style={{
              height: 110,
              width: width - 70,
              backgroundColor: colors.white,
              ...Shadows.shadow0,
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
                color: colors.black
              }}
              onBlur={() => Keyboard.dismiss()}
              multiline
              placeholder="Details"
              placeholderTextColor={colors.black}
            />
          </View>
          <Text style={{ fontSize: 17, fontWeight: '600', marginVertical: 15 }}>
            Add Images:
          </Text>
          <View style={{ flexDirection: 'row' }}>
            {images?.length > 0 ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}>
                {images?.map((image, index) => {
                  return (
                    <View
                      key={index + 1}
                      style={{
                        position: 'relative',
                        marginRight: 15,
                        marginTop: 10,
                      }}>
                      <Image
                        resizeMode="cover"
                        style={{
                          width: width * 0.14,
                          height: height * 0.065,
                          borderRadius: 15,
                        }}
                        source={{ uri: image?.uri }}
                      />
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ position: 'absolute', right: -5, top: -5 }}
                        onPress={() => removeSelectedAsset(image?.uri)}>
                        <AntDesign name="closecircle" size={20} color={'red'} />
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>
            ) : null}
            <ImagePicker
              isMultiple={true}
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}>
              <View
                style={{
                  marginLeft: 10,
                  backgroundColor: colors.lightGray,
                  marginTop: 8,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 15,
                  ...Shadows.shadow0,
                }}>
                <Image
                  source={appIcons.uploadGray}
                  style={{ width: width * 0.09, height: height * 0.045 }}
                />
              </View>
            </ImagePicker>
          </View>
          <View style={{ marginTop: 20 }}>
            <CustomButton
              title="ADD TO COLLECTION"
              onPress={() => NavService.goBack()}
              buttonStyle={{ borderRadius: 10, width: width - 70 }}
              textStyle={{ fontSize: 18 }}
            />
          </View>
        </View>
      </ScrollView>
    </AppBackground>
  );
}
