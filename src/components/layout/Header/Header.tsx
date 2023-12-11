import { useMediaQuery } from '@mui/material';
import Box from '@mui/system/Box';
import { Logo } from '../../../assets/icons';

function Header() {
  const isNotMobile = useMediaQuery('(min-width:375px)');
  
  return (
    <Box sx={{
      height: '60px', 
      display: 'flex', 
      alignItems: 'center', 
      paddingLeft: isNotMobile ? '27px' : '16px', 
    }}>
      <Logo />
    </Box>
  );
}

export default Header;
