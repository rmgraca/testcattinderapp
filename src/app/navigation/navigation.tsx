import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '~app/constants/navigation';
import { MainScreen } from '~screens/mainScreen';
import { ChatScreen } from '~screens/chatScreen';
import { ProfileScreen } from '~screens/profileScreen';
import { NavigationParams } from '~types/navigation';
import { PawIcon } from '~assets/svg/paw';
import { ChatBubbleIcon } from '~assets/svg/chatBubble';
import { UserIcon } from '~assets/svg/user';

const Tab = createBottomTabNavigator<NavigationParams>();

export function Navigation() {
  const styles = useStyles();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            alignSelf: 'center',
            alignContent: 'space-around',
            width: '40%',
            position: 'relative',
            bottom: 40,
            backgroundColor: 'white',
            borderRadius: 50,
            height: 52,
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5
          }
        }}
      >
        <Tab.Screen
          name={Screens.MainScreen}
          component={MainScreen}
          options={{
            tabBarIcon: ({ focused }) => <PawIcon style={styles.pawIcon} width={25} height={25} fill={focused ? '#EC537E' : '#000'} />,
            headerShown: false
          }}
        />
        <Tab.Screen
          name={Screens.ChatScreen}
          component={ChatScreen}
          options={{
            tabBarIcon: ({ focused }) => <ChatBubbleIcon width={25} height={25} strokeWidth={2.5} color={focused ? '#EC537E' : '#000'} />,
            headerShown: false
          }}
        />
        <Tab.Screen
          name={Screens.ProfileScreen}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => <UserIcon style={styles.userIcon} width={25} height={25} strokeWidth={2.5} color={focused ? '#EC537E' : '#000'} />,
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function useStyles() {
  return StyleSheet.create({
    pawIcon: {
      marginLeft: 15
    },
    userIcon: {
      marginRight: 15
    }
  });
}
