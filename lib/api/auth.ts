import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import User from '../interfaces/user';

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
  const {mail, password} = user;
  try {
    return auth().createUserWithEmailAndPassword(mail, password);
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
