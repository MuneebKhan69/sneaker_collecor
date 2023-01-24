import {Dimensions, StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  uploadImagePlacement: {
    position: 'absolute',
    bottom: width * 0.265,
    right: 10,
  },
});

export default styles;
