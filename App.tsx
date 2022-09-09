import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import AuthNavigation from './components/auth/AuthNavigation';
import auth from '@react-native-firebase/auth';
import MainNavigation from './components/main/MainNavigator';
import navigationTheme from './lib/theme/navigationTheme';
import {View} from 'react-native';
import colors from './lib/colors/colors';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <NavigationContainer theme={navigationTheme}>
        {!user && <AuthNavigation />}
        {user && <MainNavigation />}
      </NavigationContainer>
    </View>
  );
};

export default App;
