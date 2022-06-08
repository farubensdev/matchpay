/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Bgimage from '../../../../../public/img-homem.png';

const mock = [
  {
    title: 1000,
    subtitle:
      'Podemos receber mais de 1000 tipos de produtos',
    suffix: '+',
  },
  {
    title: 10,
    subtitle:
      'Disponibilizamos mais de 10 meios de pagamentos para maior leque de escolhas para nosso cliente',
    suffix: '+',
  },
  {
    title: 30,
    subtitle: 'Mais de 30 plugins e recursos para cada um dos nossos produtores e afiliados',
    suffix: '+',
  },
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
            Uma plataforma poderosa que facilita a venda dos produtos e inscrição de afiliados. Cresça de forma meteórica com a MatchPay!
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
            Crie sua página de venda de forma rápida e segura, tenha um checkout de alta performance e conversão em vendas, transforme seu conteúdo e comece a vender online. Se torne um empreendedor digital hoje. Liberdade e dinheiro no bolso! 

            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'secondary'} gutterBottom sx={{
                  fontWeight: '900 !important',
                  fontSize: '44px !important',
                  
                }}>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      duration={2}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'block', md: 'flex' },
          }}
        >
          <Box height={1} width={1} >
            <Image src={Bgimage} />
           
          </Box>
        </Grid>
      </Grid>
     
    </Box>
  );
};

export default Features;
