import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import AuthNavigation from './components/auth/AuthNavigation';
import auth from '@react-native-firebase/auth';
import MainNavigation from './components/main/MainNavigator';
import navigationTheme from './lib/theme/navigationTheme';

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
    <NavigationContainer theme={navigationTheme}>
      {!user && <AuthNavigation />}
      {user && <MainNavigation />}
    </NavigationContainer>
  );
};

export default App;
