import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../../../public/logo-g.svg';
import Image from 'next/image';


const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
 

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
         
          height={1}
          width={1}
        >

          <Image 
            src={Logo}
            alt='img-logo'

          />

        

        </Box>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
    
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="/#contato"
            size="large"
          >
            Cadastre-se agora
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
