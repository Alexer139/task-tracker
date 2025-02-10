import React from "react";
import { Typography, Box, Button } from "@mui/material";

function Home() {
  return (
    <Box sx={{ p: 3, textAlign: 'center', mt: -5 }}>
      <Typography variant="h4" component="div" sx={{
        whiteSpace: 'pre-line',
        p: 10,
        }}>
        планируйте в 
        <Typography
        component="span"
        sx={{ color: '#FF9D9D', fontSize: 34, p: 1}}
        >
        удобной
        </Typography> обстановке
      </Typography>

      <Typography component="div" variant="h6" sx={{
        mt: -4
      }}>
        здесь вы найдете удобный инструмент для управления задачами и проектами
      </Typography>

      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" gutterBottom>
          Попробовать
        </Typography>
        <Button 
          variant="contained" 
          sx={{
            height: 120,
            borderRadius: 3,
            boxShadow: '6px 13px 6px rgba(0, 0, 0, 0.3)',
            bgcolor: 'rgba(174, 59, 59, 1)',
            color: 'black',
            fontSize: 25,
            '&:hover': { bgcolor: 'rgb(104, 27, 27)' }
          }}
        >
          Создать первую задачу
        </Button>
      </Box>
    </Box>
  );
}

export default Home;