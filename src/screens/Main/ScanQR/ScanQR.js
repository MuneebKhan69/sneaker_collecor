import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import AppBackground from '../../../components/AppBackground';
import styles from './styles';

export default function ScanQR() {
  let scannerRef = useRef();
  const onSuccess = async e => {
    const id = e?.data;
    // const payload = {
    //   user_id: loginData.data._id,
    //   event_id: id,
    // };
    // try {
    //   const response = await postReq(`api/v1/verifyBuyTicket`, payload);
    //   if (response?.status == 1) {
    //     navigation.navigate('EventDetails', {
    //       ticketInfo: response?.data[0]?.event_id,
    //     });
    //   }
    // } catch (error) {
    //   //   const {message} = error;
    //   //   Toast.show({
    //   //     type: 'error',
    //   //     text1: 'Error',
    //   //     text2: message,
    //   //   });
    // } finally {
    // }
    scannerRef.reactivate();
  };

  return (
    <AppBackground back title={'SCAN QR'} marginHorizontal={false}>
      <View style={styles.container}>
        <QRCodeScanner
          ref={node => {
            scannerRef = node;
          }}
          onRead={onSuccess}
        />
      </View>
    </AppBackground>
  );
}
