import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import User from '../interfaces/User';
import {firebase} from '@react-native-firebase/database';
import config from '../config/config';

export const signInEmailAndPassword = (
  email: string,
  password: string,
): Promise<FirebaseAuthTypes.UserCredential> => {
  try {
    return auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    throw new Error('Could not complete signin process' + err);
  }
};

export const signUpEmailAndPassword = (
  user: User,
): Promise<FirebaseAuthTypes.UserCredential> => {
  const {mail, password, name, age} = user;
  try {
    return auth()
      .createUserWithEmailAndPassword(mail, password)
      .then(val => {
        console.log('User id', val.user);
        firebase
          .auth()
          .currentUser?.updateProfile({displayName: name})
          .then(() => {
            firebase
              .app()
              .database(config.realtimeDb)
              .ref('/users/' + val.user.uid)
              .set({
                uid: val.user.uid,
                email: val.user.email,
                displayName: name,
                age: age,
              });
          });
        return val;
      });
  } catch (err: any) {
    if (err.code === 'auth/email-already-in-use') {
      throw new Error('That email address is already in use!');
    }

    if (err.code === 'auth/invalid-email') {
      throw new Error('That email address is invalid!');
    }
    throw new Error('Could not complete signup process' + err);
  }
};
