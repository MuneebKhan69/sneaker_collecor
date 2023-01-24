import { StyleSheet } from 'react-native';
import { colors, HP, WP, size } from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 10,
    width: 210,
    height: 230,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop:"25%"
  },
  img: {
    width: 145,
    height: 145,
    resizeMode: "contain"
  },
  imgBackground: {
    backgroundColor: "#FFBC00",
    width: 115,
    height: 115,
    borderRadius: 10
  }
});

export default styles;
