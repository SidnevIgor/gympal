import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  mail: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default LoginSchema;
