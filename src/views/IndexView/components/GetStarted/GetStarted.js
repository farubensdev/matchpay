import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Form from '../../../../blocks/formLayouts/Contact/index';
import Price from '../../../../blocks/pricing/SingleChoiceOption/index';


const GetStarted = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box id="contato">
      <Typography
        variant="h4"
        color="text.primary"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Cadastre-se e comece a vender hoje mesmo!<br />
        Nós recebemos e cuidamos dos seus pagamentos. Você vai focar apenas em vender! 


      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      >
        Além de plataforma de vendas, te auxiliamos e sua primeira venda
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
        marginTop={4}
      >
        
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          
        </Box>
      </Box>
      <Box>
        <Price />
        <Form />
      </Box>
    </Box>
  );
};

export default GetStarted;
