/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';


const QuickStart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Venda seus produtos e faça uma legião de fãs. Você só paga quando vender!  

          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            A MatchPay se compromete em manter seu produto no ar, sempre com ética e facilidade de uso para todos. 

          </Typography>
        </Box>
        
       

      </Box>

    
    </Box>
  );
};

export default QuickStart;
