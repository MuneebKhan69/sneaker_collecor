import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import Shadows from '../../../helpers/Shadows';
import {appImages} from '../../../assets';
import {colors} from '../../../utils';
import styles from './styles';

const recentActivity = [
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconOne,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconTwo,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconThree,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconFour,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconFive,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconSix,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconSeven,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconOne,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconTwo,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    image: appImages?.notificationIconThree,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconFour,
  },
  {
    title: 'John Doe',
    details: 'lorum ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '24 june, 2022',
    time: '10m ago',
    image: appImages?.notificationIconFive,
  },
];

export default function Notification() {
  return (
    <AppBackground back title={'Notification'} marginHorizontal={false}>
      <FlatList
        data={recentActivity}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <NotificationList item={item} />}
      />
    </AppBackground>
  );
}

const NotificationList = ({item}) => {
  return (
    <View
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
      <Image
        source={item?.image}
        style={{
          width: 45,
          height: 45,
          borderRadius: 45 / 2,
          resizeMode: 'contain',
        }}
      />
      <View style={{flex: 1, marginLeft: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text
            style={{
              color: colors.black,
              marginRight: 15,
              textTransform: 'capitalize',
            }}>
            {item?.details}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <Text style={{color: colors.gray, fontSize: 14}}>{item?.date}</Text>
          <Text style={{color: colors.gray, fontSize: 14}}>{item?.time}</Text>
        </View>
      </View>
    </View>
  );
};
