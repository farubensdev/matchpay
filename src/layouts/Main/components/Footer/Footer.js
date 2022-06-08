import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Logo from '../../../../../public/logo-g.svg';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'block'}
            component="a"
            href="/"
            title="theFront"
            width={'100%'}
            textAlign={'center'}
          >
             <Image              
              src={Logo}
              alt="logo"
              maxWidth={'70px'}
             
            />
           
          </Box>
         
        </Box>
      </Grid>
      
      <Grid item xs={12}>
      <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          Precisa de suporte, <a href="https://help.matchpay.com.br" targe="blank_">acesse aqui</a> 
        </Typography>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
         Quer fazer um reembolso ou cancelar a compra de forma rápida,  <a href="https://help.matchpay.com.br" targe="blank_">acesse aqui</a> 
        </Typography>
       
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; MatchPay - Todos os direitos reservados | Desenvolvimento por Meme Digital

          Precisa de suporte, acesse aqui
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          Ao acessar nosso site você concede os direitos de uso dos cookies para fins de marketing.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
