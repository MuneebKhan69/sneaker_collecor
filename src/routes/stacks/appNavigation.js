// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// drawerComponentt
import UserAppStack from '../drawer/appDrawer';
// @stack screens
import HomeStack from '.././stacks/HomeStack';
import GroupStack from '.././stacks/GroupStack';
import CategoryStack from '.././stacks/CategoryStack';
import CheckOutfitStack from './CheckOutfitStack';
// screens
import Home from '../../screens/Main/Home';
import Profile from '../../screens/Main/Profile';
import OtherProfile from '../../screens/Main/OtherProfile';
import EditProfile from '../../screens/Main/EditProfile';
import Favourites from '../../screens/Main/Favourites';
import Notification from '../../screens/Main/Notification';
import ProductDetail from '../../screens/Main/ProductDetail';
import Settings from '../../screens/settings';
import PrivacyPolicy from '../../screens/Agreements/PrivacyPolicy';
import TermsAndCondition from '../../screens/Agreements/TermsAndCondition';
import ChangePassword from '../../screens/Main/ChangePassword/ChangePassword';
import CreateGroup from '../../screens/Main/Groups/CreateGroup';
import Conversation from '../../screens/Main/Groups/Conversation';
import Combination from '../../screens/Main/CheckOutfit/Combination';
import AddShoe from '../../screens/Main/AddShoe';
import Comments from '../../screens/Main/Home/Comments';
import CreatePost from '../../screens/Main/CreatePost';
import Likes from '../../screens/Main/Home/Likes';
import ScanQR from '../../screens/Main/ScanQR';

const Stack = createNativeStackNavigator();

const AppNavigation = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="UserAppStack"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="UserAppStack" component={UserAppStack} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GroupStack" component={GroupStack} />
      <Stack.Screen name="CategoryStack" component={CategoryStack} />
      <Stack.Screen name="CheckOutfitStack" component={CheckOutfitStack} />

      <Stack.Screen name="CreateGroup" component={CreateGroup} />
      <Stack.Screen name="Conversation" component={Conversation} />
      <Stack.Screen name="Combination" component={Combination} />
      <Stack.Screen name="AddShoe" component={AddShoe} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="ScanQR" component={ScanQR} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="OtherProfile" component={OtherProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
