import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import Container from 'components/Container';

const SingleChoiceOption = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  return (
    <Container>
      <Grid container spacing={isMd ? 0 : 2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ padding: { sm: 4 } }}>
              <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
               
              </Box>
              <Box marginBottom={4}>
                <Typography
                variant={'h3'}
                textAlign={'center'}
                sx={{
                  fontSize: '22px !important'
                }}

                
                >
                  Confira as taxas da MATCHPAY 

                </Typography>
                <Typography
                  fontWeight={600}
                  fontSize={'24px !important'}
                  variant={'h2'}
                  align={'center'}
                  gutterBottom
                >
                  6,49% + R$ 1,89 por venda aprovada
                </Typography>
                <Typography color="text.secondary" align={'center'}>
                Prazos de recebimento:
                </Typography>
                
              </Box>
              <Grid container spacing={1}>
                {[
                  'Cartão: 15 dias ',
                  'Boleto: 1 dia ',
                  'Pix: na hora ',
                  'Você só paga, quando vende!',
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
            
          </Card>
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box component={Card} bgcolor={theme.palette.primary.main}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: { sm: 4 },
              }}
            >
              <Box color={theme.palette.common.white} marginBottom={''}>
                
              </Box>
              <Typography
                textAlign={'center'}
                variant={'h4'}
                gutterBottom
                sx={{ fontWeight: 600, color: theme.palette.common.white }}
              >
                Cadastre-se e saiba mais
              </Typography>
              <Typography
                gutterBottom
                align={'center'}
                sx={{ color: theme.palette.common.white }}
              >
                Ao participar da MatchPay você encontra muitos outros benefícios
              </Typography>
              <Typography
                align={'center'}
                sx={{ color: theme.palette.common.white }}
              >
                Além de estarmos alinhados ao seu objetivo ainda possuímos muitas outras oportunidades para você.
              </Typography>
            </CardContent>
            <Divider />
            
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleChoiceOption;
