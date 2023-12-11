import { Box, Typography } from "@mui/material";
import { rick, morty } from '../../../assets/icons/';

function Heading() {
  return (
    <Box sx={{
      boxSizing: 'border-box',
      minHeight: '345px',
      padding: '1px',
      backgroundColor: 'white',
      backgroundImage: `url(${rick}), url(${morty})`,
      backgroundPosition: 
      'calc(50% - 68px) 10px, calc(50% - -86px) 136px',
      backgroundSize: '210px, 170px',
      backgroundRepeat: 'no-repeat, no-repeat',
    }}>
      <Typography variant="h1" sx={{ 
        marginTop: '115px', 
        // marginBottom: '97px',
        color: '#202329', 
        textAlign: 'center',
      }}>
        The Rick and Morty API
      </Typography>
    </Box>
  );
}

export default Heading;
