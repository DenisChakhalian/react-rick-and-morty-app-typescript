import Box from '@mui/system/Box';
import { Github, Heart, IncodeLogo, Twitter } from '../../../assets/icons/';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{
      width: '100%',
      height: 'fit-content', 
      display: 'flex', 
      alignItems: 'center',
      backgroundColor: '#202329',
      flexDirection: 'column',
      paddingTop: '47px',
      paddingBottom: '54px',
      textAlign: 'center',
    }}
    >
      <Typography variant="h4" sx={{maxWidth: '212px', marginBottom: '34px'}}>
        PERFORMED AS PART OF A TEST CASE FOR THE COMPANY
      </Typography>

      {/* <Box sx={{
        boxShadow: '0px 0px 46px 0px #FFFFFF',
      }}> */}
      <IncodeLogo />
      {/* </Box> */}

      <Box sx={{
        width: '100%',
        marginBottom: '27px', 
        marginTop: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '27px',
      }}>
        <Github />
        <Twitter />
        <Heart />
      </Box>

      <Typography variant="h4">
        2023
      </Typography>
    </Box>
  );
}

export default Footer;
