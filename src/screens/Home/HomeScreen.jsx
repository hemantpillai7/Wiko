import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeIcon from '../../assets/images/ic_btm_Home.svg';
import MessageIcon from '../../assets/images/ic_btm_Message.svg';
import NotificationIcon from '../../assets/images/ic_btm_Noti.svg';
import OrderStatusIcon from '../../assets/images/ic_btm_Order.svg';
import InfoIcon from '../../assets/images/ic_btm_Info.svg';
import Colors from '../../constants/Colors';
import { appThemeConfiguration } from '../../utils/AppThemeConfiguration';
import Constants from '../../constants/Constants';
import HomeFragment from './HomeFragment';
import MessageFragment from './MessageFragment';
import NotificationFragment from './NotificationFragment';
import OrderFragment from './OrderFragment';
import InfoFragment from './InfoFragment';
import ProdFilterBtmNavItem from '../../components/CustomRenderItem/ProdFilterBtmNavItem';

const ICON_SIZE = 25; // Define icon size
const TAB_BAR_HEIGHT = 70; // Fixed height for proper alignment

// Dummy screens
const HomePage = () => (
  <HomeFragment />
);

const MessagePage = () => (
  <MessageFragment />
);

const NotificationPage = () => (
  <NotificationFragment />
);

const OrderPage = () => (
  <OrderFragment />
);

const InfoPage = () => (
  <InfoFragment />
);

const Tab = createBottomTabNavigator();

const HomeScreen = () => {

  const themeConfig = appThemeConfiguration(Constants.CurrentAppTheme);

  const refFilterBtmNav = useRef(null);

  const onPressFilterProd = () => {
    const isActive = refFilterBtmNav?.current?.isActive?.();

    if (isActive) {
      refFilterBtmNav?.current?.scrollTo?.(0);
    } else {
      refFilterBtmNav?.current?.scrollTo?.(-400);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            keyboardHidesTabBar: true,
            tabBarIcon: ({ focused }) => {
              let IconComponent;

              switch (route.name) {
                case 'Home':
                  IconComponent = HomeIcon;
                  break;
                case 'Message':
                  IconComponent = MessageIcon;
                  break;
                case 'Notification':
                  IconComponent = NotificationIcon;
                  break;
                case 'Order Status':
                  IconComponent = OrderStatusIcon;
                  break;
                case 'Info':
                  IconComponent = InfoIcon;
                  break;
                default:
                  IconComponent = HomeIcon;
              }

              return (
                <View style={styles.iconContainer}>
                  <IconComponent width={ICON_SIZE} height={ICON_SIZE} color={focused ? themeConfig.AppPrimaryColor : Colors.BtmDisable} />
                </View>
              );
            },

            tabBarShowLabel: true, // Show labels
            tabBarStyle: styles.tabBar, // Custom tab bar style
            tabBarItemStyle: styles.tabBarItem, // Align icons and labels
            tabBarActiveTintColor: themeConfig.AppPrimaryColor, // Orange when focused
            tabBarInactiveTintColor: Colors.BtmDisable, // Gray when not focused
            tabBarLabelStyle: styles.tabBarLabel, // Apply font styles
            headerShown: false, // Hide top bar

          })}
        >
          {/* <Tab.Screen name="Home" component={HomePage} /> */}
          <Tab.Screen name="Home">
            {() => <HomeFragment
              onPressFilterProd={onPressFilterProd}
            />}
          </Tab.Screen>
          <Tab.Screen name="Message" component={MessagePage} />
          <Tab.Screen name="Notification" component={NotificationPage} />
          <Tab.Screen name="Order Status" component={OrderPage} />
          <Tab.Screen name="Info" component={InfoPage} />
        </Tab.Navigator>
      </View>

      <ProdFilterBtmNavItem
        ref={refFilterBtmNav}
      // onFilterSubmit={onFilterSubmit} 
      // onFilterCancel={onFilterCancel} 
      />

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'white', // Ensure background is set
  },
  tabBar: {
    height: TAB_BAR_HEIGHT, // Set fixed height manually
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    // alignItems: "center",
    flexDirection: 'row',
  },
  tabBarItem: {
    justifyContent: 'center', // Ensure items are centered
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
