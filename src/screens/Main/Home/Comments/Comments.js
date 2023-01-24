import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import moment from 'moment';
import AppBackground from '../../../../components/AppBackground';
import Devices from '../../../../helpers/Devices';
import {appImages, appIcons} from '../../../../assets';
import {colors} from '../../../../utils';

const {width, height} = Dimensions.get('screen');

const Comments = () => {
  const [comment, setComment] = useState('');
  const [key, setKey] = useState('');
  const [commentList, setCommentList] = useState([
    {
      image: appImages.groupChatOne,
      name: 'test',
      message: 'lorem impsum',
      createdAt: '2022-11-20',
    },
    {
      image: appImages.groupChatTwo,
      name: 'test',
      message: 'lorem impsum',
      createdAt: '2022-11-20',
    },
    {
      image: appImages.groupChatThree,
      name: 'test',
      message: 'lorem impsum',
      createdAt: '2022-11-20',
    },
    {
      image: appImages.groupChatFour,
      name: 'test',
      message: 'lorem impsum',
      createdAt: '2022-11-20',
    },
    {
      image: appImages.groupChatFive,
      name: 'test',
      message: 'lorem impsum',
      createdAt: '2022-11-20',
    },
  ]);
  const CommentList = ({item}) => {
    const {message, createdAt, image, name} = item;
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <Image
          source={image}
          style={{
            width: width * 0.1,
            height: height * 0.05,
            borderRadius: 45 / 2,
            resizeMode: 'contain',
          }}
        />
        <View
          style={{
            backgroundColor: colors.white,
            borderRadius: 20,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 20,
            width: width - 160,
            padding: 10,
          }}>
          <Text style={{color: colors.black, fontSize: 15}}>{message}</Text>
          <Text
            style={{
              color: colors.gray,
              fontSize: 12,
              marginTop: 5,
            }}>
            {moment(createdAt).format('h:mm a')}
          </Text>
        </View>
      </View>
    );
  };
  const sendNewComment = () => {
    const currentComment = [
      {
        image: appImages.groupChatOne,
        name: 'test',
        message: comment,
        createdAt: new Date(),
      },
    ];
    setCommentList(prevCommentList => [...prevCommentList, ...currentComment]);
    setComment('');
    setKey(!key);
  };
  return (
    <AppBackground back title={'COMMENTS'} marginHorizontal={false}>
      <FlatList
        data={commentList}
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginBottom: 10}}
        key={key}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 3,
        }}
        renderItem={({item}) => <CommentList item={item} />}
      />
      <View
        style={{
          height: 60,
          width: width - 33,
          backgroundColor: colors.white,
          ...Shadows.shadow5,
          paddingHorizontal: 30,
          flexDirection: 'row',
          marginBottom: Devices.isIphoneX ? 15 : 0,
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <TextInput
          style={{flex: 1, height: '100%', color: colors.black}}
          placeholder="Type your comment here..."
          placeholderTextColor={colors.black}
          value={comment}
          onChangeText={text => setComment(text)}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => sendNewComment()}
          style={{
            height: 48,
            width: 48,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
            borderRadius: 24,
            marginRight: -20,
          }}>
          <Image
            source={appIcons.send}
            style={{
              height: 28,
              width: 28,
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
      </View>
    </AppBackground>
  );
};

export default React.memo(Comments);
