import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {WebView} from 'react-native-webview';
import AppBackground from '../../../components/AppBackground';
import CustomButton from '../../../components/CustomButton';
import NavService from '../../../helpers/NavService';
import {appImages} from '../../../assets';
import {colors} from '../../../utils';
import styles from './styles';

const {width, height} = Dimensions.get('screen');

export default function Category() {
  return (
    <AppBackground
      menu
      title={'CATEGORY'}
      notification
      marginHorizontal={false}>
      <WebView
        style={{
          flex: 1,
        }}
        source={{uri: 'https://api.myprojectstaging.com/webgl/'}}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.uploadImagePlacement}
        onPress={() => NavService.navigate('AddShoe')}>
        <AntDesign name={'pluscircle'} size={60} color={colors.primary} />
      </TouchableOpacity>
    </AppBackground>
  );
}
