/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import ImageFooter from '../../../../../../public/contato-s.png';
import Image from 'next/image';

const Map = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
           Cadastre-se!   

          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'text.secondary'}>
          Faça a melhor escolha para seu produto. Escolha a MATCHPAY, feita para você crescer!
          </Typography>
        </Box>
      </Box>
      <Box marginY={3}>
        <Image 
          src={ImageFooter}
          alt="imagem de contato"
          />
      </Box>
      <Grid container spacing={2}>
       
        <Grid item xs={12}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            
          </Typography>
          <Typography variant={'subtitle1'}><strong>Email:</strong><br />contato@matchpay.com.br</Typography>
          <Typography variant={'subtitle1'}><strong>Suporte:</strong><br />suporte@matchpay.com.br</Typography>
          
          <Typography variant={'subtitle1'}><strong>Endereço:</strong><br />
          Av. Orosimbo Maia, 360 - Sala 514 - Cambuí, Campinas - SP, 13010-211
          </Typography>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Map;
