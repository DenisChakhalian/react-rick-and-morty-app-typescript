import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  color: 'black',
  fontSize: '100px',
  lineHeight: '110px',
  fontWeight: 900,
  '@media (min-width:375px)': {
    fontSize: '101.25px',
    lineHeight: '111.38px',
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  color: '#F5F5F5',
  fontSize: '27px',
  lineHeight: '30px',
  fontWeight: 800,
};

theme.typography.h3 = {
  ...theme.typography.h3,
  color: '#F5F5F5',
  fontSize: '18px',
  lineHeight: '30px',
  fontWeight: 400,
};

theme.typography.h4 = {
  ...theme.typography.h4,
  color: '#9E9E9E',
  fontSize: '14px',
  lineHeight: '22px',
  fontWeight: 700,
};

theme.typography.h5 = {
  ...theme.typography.h5,
  color: '#9E9E9E',
  fontSize: '15px',
  lineHeight: '26px',
  fontWeight: 500,
};

export { theme };