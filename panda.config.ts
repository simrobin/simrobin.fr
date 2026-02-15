import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{astro,ts,tsx,js}'],
  exclude: [],
  outdir: 'styled-system',

  conditions: {
    extend: {
      dark: '.dark &',
    },
  },

  globalCss: {
    html: {
      boxSizing: 'border-box',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    body: {
      backgroundColor: 'bg',
      color: 'text',
      fontFamily: 'body',
      fontSize: '0.675rem',
      fontWeight: 'regular',
      lineHeight: '1',
    },
    'ol, ul': {
      listStyle: 'none',
    },
    strong: {
      fontWeight: 'bold',
    },
    em: {
      fontStyle: 'italic',
    },
  },

  theme: {
    tokens: {
      colors: {
        gray: { value: '#2b2b2b' },
        lightGray: { value: '#f7f7f7' },
        yellow: { value: '#ffdc00' },
        white: { value: '#ffffff' },
      },
      fontWeights: {
        light: { value: '300' },
        regular: { value: '400' },
        bold: { value: '500' },
      },
      fonts: {
        body: { value: "'Montserrat Variable', sans-serif" },
      },
    },

    semanticTokens: {
      colors: {
        bg: {
          value: { base: '{colors.lightGray}', _dark: '#1a1a1a' },
        },
        'bg.header': {
          value: { base: '{colors.gray}', _dark: '#111111' },
        },
        'bg.section': {
          value: { base: '{colors.lightGray}', _dark: '#222222' },
        },
        'bg.card': {
          value: { base: '{colors.white}', _dark: '#2b2b2b' },
        },
        text: {
          value: { base: '{colors.gray}', _dark: '#e5e5e5' },
        },
      },
    },

    breakpoints: {
      sm: '321px',
      md: '768px',
      lg: '1025px',
      xl: '1281px',
    },
  },
});
