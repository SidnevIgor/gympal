import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  mail: Yup.string().required().email().label('Email'),
  age: Yup.number().label('Age'),
  password: Yup.string().required().min(4).label('Password'),
});

export default RegisterSchema;
