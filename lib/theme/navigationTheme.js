import {DefaultTheme} from '@react-navigation/native';

import colors from '../colors/colors';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
  },
};
