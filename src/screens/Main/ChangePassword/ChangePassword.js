import React, {Component} from 'react';
import {View} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInputView from '../../../components/CustomTextInputView';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {schema} from '../../../utils/validation';
import styles from './styles';
import { appIcons } from '../../../assets';
class ChangePassword extends Component {
  state = {
    currentPassword: '',
    password: '',
    confirmPassword: '',
  };

  onSubmit = () => {
    const {currentPassword, password, confirmPassword} = this.state;
    if (currentPassword == '' || password == '' || confirmPassword == '') {
      Toast.show({
        text1: 'Please enter all fields',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!schema.validate(password)) {
      Toast.show({
        text1:
          'Password not valid (Use atleast one UpperCase Letter, one number and one special character)',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (password != confirmPassword) {
      Toast.show({
        text1: 'Confrim password does not match',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: 'Password updated successfully',
        type: 'success',
        visibilityTime: 3000,
      });
      NavService.goBack();
    }
  };

  render() {
    const {currentPassword, password, confirmPassword} = this.state;
    return (
      <AppBackground back title={'Change Password'} marginHorizontal={false}>
        <View style={styles.container}>
          <View style={styles.textNormal}>
            <CustomTextInputView
              placeholder={'Current Password'}
              leftIcon={appIcons.lock}
              Onchange={value => this.setState({currentPassword: value})}
              label={'Current Password'}
              lock={'Lock'}
              value={currentPassword}
              rightIcon
              containerStyle={{
                width: '100%',
              }}
            />
            <CustomTextInputView
              placeholder={'New Password'}
              leftIcon={appIcons.lock}
              Onchange={value => this.setState({password: value})}
              label={'New Password'}
              lock={'Lock'}
              value={password}
              rightIcon
              containerStyle={{
                width: '100%',
              }}
            />
            <CustomTextInputView
              placeholder={'Confirm Password'}
              leftIcon={appIcons.lock}
              Onchange={value => this.setState({confirmPassword: value})}
              label={'Confirm Password'}
              lock={'Lock'}
              value={confirmPassword}
              rightIcon
              containerStyle={{
                width: '100%',
              }}
            />

            <CustomButton
              title="SAVE"
              onPress={this.onSubmit}
              buttonStyle={{borderRadius: 10}}
              textStyle={{fontSize: 22}}
            />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default ChangePassword;
