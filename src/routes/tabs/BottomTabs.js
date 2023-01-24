import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../components/TabbarComponent';
import Home from '../../screens/Main/Home';
import CategoryStack from '../stacks/CategoryStack';
import GroupStack from '../stacks/GroupStack';
import CheckOutfitStack from '../stacks/CheckOutfitStack';
import TermsAndCondition from '../../screens/Agreements/TermsAndCondition';
import {HP, colors, platform} from '../../utils';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: colors.gray},
        animation: 'simple_push',
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CategoryStack" component={CategoryStack} />
      <Tab.Screen name="tabBar4" component={TermsAndCondition} />
      <Tab.Screen name="GroupStack" component={GroupStack} />
      <Tab.Screen name="CheckOutfitStack" component={CheckOutfitStack} />
    </Tab.Navigator>
  );
};
