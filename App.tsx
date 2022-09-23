import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import AuthNavigation from './components/auth/AuthNavigation';
import auth from '@react-native-firebase/auth';
import MainNavigation from './components/main/MainNavigator';
import navigationTheme from './lib/theme/navigationTheme';
import {View} from 'react-native';
import colors from './lib/colors/colors';
import LoadingAnimation from './components/shared/LoadingAnimation';
import AppStore from './lib/contexts/AppContext';
import {firebase} from '@react-native-firebase/database';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  firebase
    .app()
    .database(
      'https://gympal-581df-default-rtdb.europe-west1.firebasedatabase.app',
    )
    .ref('/users')
    .once('value')
    .then(snapshot => {
      console.log('The value is read: ', snapshot.val());
    });

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
    <AppStore>
      <View style={{backgroundColor: colors.background, flex: 1}}>
        <NavigationContainer theme={navigationTheme}>
          {!user && <AuthNavigation />}
          {user && <MainNavigation />}
        </NavigationContainer>
        <LoadingAnimation />
      </View>
    </AppStore>
  );
};

export default App;
