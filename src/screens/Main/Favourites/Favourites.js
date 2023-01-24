import React, {useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import SwipeableRow from '../../../components/SwipeableRow';
import {appImages} from '../../../assets';
import {colors} from '../../../utils';
import styles from './styles';

export default function Favourites() {
  const [key, setKey] = useState(false);
  const [favourites, setFavourites] = useState([
    {
      title: 'Jordan 1 High SE',
      image: appImages?.favouriteOne,
    },
    {
      title: 'Jordan 1 High SE',
      image: appImages?.favouriteTwo,
    },
  ]);
  const deleteItem = (item, index) => {
    const getCurrentFavouriteItem = favourites;
    getCurrentFavouriteItem.splice(index, 1);
    setFavourites(getCurrentFavouriteItem);
    setKey(!key);
  };
  const ListEmptyComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>
          No Favourite item found
        </Text>
      </View>
    );
  };
  return (
    <AppBackground back title={'Favourites'} marginHorizontal={false}>
      <FlatList
        data={favourites}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        key={key}
        renderItem={({item, index}) => (
          <SwipeableRow
            onDelete={() => deleteItem(item, index)}
            renderVisibleComponent={() => <FavouriteList item={item} />}
          />
        )}
        ListEmptyComponent={ListEmptyComponent}
      />
    </AppBackground>
  );
}

const FavouriteList = ({item}) => {
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
      <View
        style={{backgroundColor: colors.gray, padding: 3, borderRadius: 10}}>
        <Image
          source={item?.image}
          style={{
            width: 45,
            height: 45,
            borderRadius: 45 / 2,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{flex: 1, marginLeft: 25, marginTop: 12}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text
            style={{
              color: colors.black,
              fontSize: 17,
              fontWeight: '600',
              textTransform: 'capitalize',
            }}>
            {item?.title}
          </Text>
        </View>
      </View>
    </View>
  );
};
