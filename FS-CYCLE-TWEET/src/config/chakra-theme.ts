import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
export const theme = extendTheme({
  config,
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    nav: {
      hover: '#005E0E',
    },
    tweet: {
      putih: '#FFFFFF',
      green: '#04A51E',
      bg: '#1D1D1D',
      post: '#005E0E',
      gray: '#909090',
      profiles: '#262626',
    },
    error: {
      primary: '#ff0000',
    },
  },
  fonts: {
    heading: 'Plus Jakarta Sans, sans-serif',
    body: 'Plus Jakarta Sans, sans-serif',
  },
  sizes: {
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      base: '412px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
});
