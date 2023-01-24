import React from 'react';
import { View, Text, Dimensions, FlatList, Image } from 'react-native';
import AppBackground from '../../../../components/AppBackground';
import CustomButton from '../../../../components/CustomButton';
import NavService from '../../../../helpers/NavService';
import { colors } from '../../utils';
import styles from './styles';
import { appImages } from '../../../../assets';
const { width } = Dimensions.get('screen');

export default function Combination() {

  const data = [
    {},
    {},
    {},
    {},
  ]
  return (
    <AppBackground back title={'COMBINATION'} marginHorizontal={false}>
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1,height:300 }}
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <>
                <View style={styles.card}>
                  <View style={styles.imgBackground}>
                    <Image style={styles.img} source={appImages.shoes} />
                  </View>
                </View>
              </>
            )
          }}
        >
        </FlatList>
        <CustomButton
          title="CHANGE COMBINATION"
          onPress={() => NavService.goBack()}
          buttonStyle={{ borderRadius: 10, width: width - 75,bottom:"12%" }}
          textStyle={{ fontSize: 18 }}
        />
      </View>
    </AppBackground>
  );
}
