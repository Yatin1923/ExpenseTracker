import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7F3DFF', // Your custom primary color
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color
    },
    background: {
      default: '#f5f5f5', // Customize your background color
    },
    text: {
      primary: '#333', // Customize your primary text color
      secondary: '#555', // Customize your secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize your font family
    h1: {
      fontSize: '2.5rem', // Customize your heading styles
    },
    body1: {
      fontSize: '1rem', // Customize your body text styles
    },
  },
});

export default theme;