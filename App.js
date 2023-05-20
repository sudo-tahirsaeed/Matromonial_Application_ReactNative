import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements'
import 'react-native-gesture-handler';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Linking, Platform } from 'react-native';

import Signup1 from './Screens/signup1';

import Signup2 from './Screens/signup2';
import First from './Screens/first';
import Payment from './Screens/Payment';
import Transaction from './Screens/Transaction'

import Profile3 from './Screens/profile3';
import Profile4_img from './Screens/profile4_img';
import Signin from './Screens/signin';
import Signup3 from './Screens/Signup3';
import Profile1 from './Screens/profile1';

import Profile2 from './Screens/profile2';

import DisplayProf from './Screens/displayprof';
import Feed from './Screens/Feed';
import { useNavigation } from '@react-navigation/native';
import Feed2 from './Screens/Feed2';
import DisplayProf2 from './Screens/displayprof2';
// import { Linking, Platform } from 'react-native';
import { useState, useEffect } from "react";






const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


// const TAB_TO_RESET = 'First';
// const resetHomeStackOnTabPress = ({ navigation, route }) => ({
//   tabPress: (e) => {
//     const state = navigation.dangerouslyGetState();

//     if (state) {
//       // Grab all the tabs that are NOT the one we just pressed
//       const nonTargetTabs = state.routes.filter((r) => r.key !== e.target);

//       nonTargetTabs.forEach((tab) => {
//         // Find the tab we want to reset and grab the key of the nested stack
//         const tabName = tab?.name;
//         const stackKey = tab?.state?.key;

//         if (stackKey && tabName === TAB_TO_RESET) {
//           // Pass the stack key that we want to reset and use popToTop to reset it
//           navigation.dispatch({
//             ...StackActions.popToTop(),
//             target: stackKey,
//           });
//         }
//       });
//     }
//   },
// });

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
export default function App() {

  const [isReady, setIsReady] = React.useState(false);
  // const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
 

  
  return (
    <NavigationContainer
    initialState={initialState}
    onStateChange={(state) =>
      AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    }
    >
      <Stack.Navigator initialRouteName="Tabs"
          screenOptions={{
            headerShown: false,
        }}
      >
        
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Signup1></Signup1>
  );
}



const Tabs = () => {
  
  const data3={
    "username":"xx","password":"123","confirmPassword":"","errors":{}
    
  };
  function handleRefresh() {
    this.forceUpdate();
  }
  // 
  return (
    
      <Drawer.Navigator useLegacyImplementation={true}>
          <Drawer.Screen
              name='First'
              component={First}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
              }}
          />
          <Drawer.Screen
              name='Signup1'
              component={Signup1}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
                  
              }}
          />
          <Drawer.Screen
              name='Signup2'
              component={Signup2}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
              }}
          />
          <Drawer.Screen
              name='Signup3'
              component={Signup3}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
              }}
          />
          <Drawer.Screen
              name='Profile1'
              component={Profile1}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
                  
              }}
          />
          <Drawer.Screen
              name='Profile2'
              component={Profile2}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
              }}
          />
          <Drawer.Screen
              name='Profile3'
              component={Profile3}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
              }}
          />
          <Drawer.Screen
              name='Profile4'
              component={Profile4_img}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
              }}
          />
          <Drawer.Screen
              name='Signin'
              component={Signin}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' },
                // unmountOnBlur: true
                  
              }}
          />
          <Drawer.Screen
              name='Feed'
              component={Feed}
              options={{
                title: 'Feed',
                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#EF3D4E'},
                  unmountOnBlur: true
                  
              }}
          />
           <Drawer.Screen
              name='Feed2'
              component={Feed2}
              options={{
                title: 'Favourites',
                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#EF3D4E'},
                  unmountOnBlur: true
                  
              }}
          />
          <Drawer.Screen
              name='Displayprof'
              
              component={DisplayProf}
              options={({navigation, route}) => (  
              {
                

                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#EF3D4E'},
                headerLeft: (props) => (
                  <HeaderBackButton
                    {...props}
                  
                    onPress={() => navigation.navigate(('Feed'),{data3})}
                    // onPressIn={handleRefresh}
                  />
                ),
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
           })}
          />
           <Drawer.Screen
              name='Displayprof2'
              component={DisplayProf2}
              options={({navigation, route}) => (  
              {
                

                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#EF3D4E'},
                headerLeft: (props) => (
                  <HeaderBackButton
                    {...props}
                  
                    onPress={() => navigation.navigate(('Feed2'),{data3})}
                    // onPressIn={handleRefresh}
                  />
                ),
                drawerItemStyle: { display: 'none' },
                unmountOnBlur: true
           })}
          />
          {/* <Drawer.Screen
              name='Payments'
              component={Payment}
              options={{
                title: 'Payment Plans',
                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#EF3D4E'},
                  unmountOnBlur: true
                  
                  
              }}
          />
           <Drawer.Screen
              name='Verify Transactions'
              component={Transaction}
              options={{
                title: 'Verify Transactions',
                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#EF3D4E'},
                  unmountOnBlur: true
                  
                  
              }}
          /> */}
          <Drawer.Screen
              name='Log Out'
              component={First}
              // listeners={resetHomeStackOnTabPress}
              options={{
                headerShown: false,
               
                unmountOnBlur: true
                
              }}
          />
      </Drawer.Navigator>
  );
}


