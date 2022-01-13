import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: any = {
  initialColorMode: 'dark',
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('gray.100', '#222224')(props),
    },
  }),
};

const colors = {
  highlight: {
    standard: '#533c99',
    hover: '#41369c',
    active: '#5637a1',
  },
  brandGray: {
    accent: '#ffffff',
    active: '#3b388f',
    light: '#192c5e',
    dark: '#172136',
    darker: '#231f2b',
    darkest: '#1e1f21',
    hover: '#03276e',
  },
  brandGreen: '#32ab3e',
  labelGray: '#655391',
  menuRed: '#f04747',
  brandBorder: '#1A202C',
  accountBar: '#504999',
  memberList: '#030f2e',
  iconColor: '#ba2d4b',
  messageInput: '#2b2c7a',
};

const fonts = {
  body: "'Karla', sans-serif",
};

const customTheme = extendTheme({
  colors,
  config,
  styles,
  fonts,
});

export default customTheme;

export const scrollbarCss = {
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#2f3136',
    width: '9px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'brandGray.darker',
    borderRadius: '17px',
  },
};
