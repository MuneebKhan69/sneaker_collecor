import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppBackground from '../../../components/AppBackground';
import NavService from '../../../helpers/NavService';
import {appImages} from '../../../assets';
import {colors} from '../../../utils';
import styles from './styles';

const {width, height} = Dimensions.get('screen');

const groupList = [
  {
    title: 'Jordan Discussion Group',
    image: appImages?.groupImageOne,
    memebersCount: 234,
    date: '22-11-2022',
  },
  {
    title: 'Jordan Discussion Group',
    image: appImages?.groupImageTwo,
    memebersCount: 234,
    date: '22-11-2022',
  },
  {
    title: 'Jordan Discussion Group',
    image: appImages?.groupImageThree,
    memebersCount: 234,
    date: '22-11-2022',
  },
  {
    title: 'Jordan Discussion Group',
    image: appImages?.groupImageFour,
    memebersCount: 234,
    date: '22-11-2022',
  },
  {
    title: 'Jordan Discussion Group',
    image: appImages?.groupImageFive,
    memebersCount: 234,
    date: '22-11-2022',
  },
  {
    title: 'Jordan Discussion Group',
    image: appImages?.groupImageSix,
    memebersCount: 234,
    date: '22-11-2022',
  },
];
export default function Groups() {
  return (
    <AppBackground menu title={'GROUP'} notification marginHorizontal={false}>
      <FlatList
        data={groupList}
        contentContainerStyle={{flexGrow: 1, paddingBottom: width * 0.265}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <GroupList item={item} />}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.uploadImagePlacement}
        onPress={() => NavService.navigate('CreateGroup')}>
        <AntDesign name={'pluscircle'} size={60} color={colors.primary} />
      </TouchableOpacity>
    </AppBackground>
  );
}

const GroupList = ({item}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        NavService.navigate('Conversation', {group_name: item?.title})
      }
      style={{
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        marginHorizontal: 3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        ...Shadows.shadow3,
      }}>
      <ImageBackground
        style={{
          flex: 1.5,
          padding: 3,
          width: width * 0.23,
          height: height * 0.1,
        }}
        imageStyle={{borderRadius: 25 / 2}}
        source={item?.image}
      />
      <View style={{flex: 5, marginLeft: 25, marginTop: 5}}>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: colors.black,
              fontSize: 18,
              fontWeight: '600',
              textTransform: 'capitalize',
            }}>
            {item?.title}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: colors.gray,
              fontSize: 14,
              marginTop: 7,
              marginLeft: 10,
            }}>
            {item?.memebersCount} Members
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: colors.gray,
              textAlign: 'right',
              fontSize: 14,
              marginTop: 7,
              marginLeft: 10,
            }}>
            {item?.date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
