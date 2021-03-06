/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const Form = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={1}
        component={Card}
        boxShadow={1}
        marginBottom={4}
      >
        <form noValidate autoComplete="off">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Nome"
                variant="outlined"
                color="primary"
                size="medium"
                name="nome"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Sobrenome"
                variant="outlined"
                color="primary"
                size="medium"
                name="sobrenome"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mensagem"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                name="mensagem"
                fullWidth
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
                fullWidth
              >
                Enviar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  Ao enviar voc?? concorda com nossos {' '}
                  <Link
                    
                    href={'/politica-e-termos-de-uso'}
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    termos de uso,
                  </Link>
                  {' '}
                  <Link
                    
                    href={'/politica-e-termos-de-uso'}
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Pol??tica de privacidade
                  </Link>{' '}
                  e{' '}
                  <Link
                    
                    href={'/politica-e-termos-de-uso'}
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Pol??tica de Cookies
                  </Link>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={'center'}>
          N??s entramos em contato entre 1 e 2 dias ??teis
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
