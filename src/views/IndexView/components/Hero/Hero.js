import React from 'react';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import Banner from '../../../../../public/mulher-match-pay.png';
import Container from 'components/Container';
import Image from 'next/image';



const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}

  
    >
      <Box
       paddingY={{ xs: 0, sm: '2rem', md: '2rem' }}
      
       
       >
        <Container display={{sm: 'flex'}}>
          <Box maxWidth={{ xs: 1, sm: '50%' }} >

          <Typography
              variant="h1"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: '16px !important',
              }}
            >
              A sua plataforma de produtos digitais

            </Typography>
            
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: '30px !important',
              }}
             
            >
              Transforme seu curso em vendas de alta performance e escala com a MatchPay
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              A MatchPay é uma plataforma feita para quem quer empreender de forma rápida, simples e segura. Aumente seu faturamento e suba igual a um foguete! 
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
             
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href={'/#saiba-mais'}
              >
                Iniciar meu negócio online grátis

              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  href={'/#contato'}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Cadastrar agora
                </Button>
              </Box>
            </Box>
          </Box>

          <Box 
          maxWidth={{ sm: '50%' }} 
          display={{xs: 'block', sm: 'block'}} 
          alignItems={{sm: 'right'}}  
          marginBottom={{
                sm: '-102px',
                xs: '-40px'
              }}>
          <Image

            src={Banner}
            alt='Afiliados -matchpay'
            width={'600px'}
            height={'500px'}
            objectFit={'contain'}


          
          />
         
        </Box>
        </Container>
       
      </Box>
      
    </Box>
  );
};

export default Hero;
