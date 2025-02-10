import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Block } from "@mui/icons-material";

function Home() {
  return (
    <Box sx={{ p: 3, textAlign: 'center', pt: 12 }}>
      
      <Typography variant="h3">планируйте в</Typography>
      <Typography variant="h2" sx={{ color: 'rgb(247, 175, 175)' }}>
        удобной
      </Typography>
      <Typography variant="h2">обстановке</Typography>

      <Typography component="div" variant="h5" sx={{
        mt: 2
      }}>
        здесь вы найдете удобный инструмент для управления задачами и проектами
      </Typography>

      <Box sx={{ mt: 7 }}>
        <Typography variant="h4" gutterBottom>
          Попробовать
        </Typography>
        <Button 
          variant="contained" 
          sx={{
            width: 290,
            height: 100,
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

      <Box sx={{ mt: 6 }}>
        <Typography sx={{ fontSize: 27, color: 'rgb(255, 255, 255)', WebkitTextStroke: '0.8px black' }}>
          Возможности сайта
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          <Box sx={{ width: 320,
                     height: 180,
                     bgcolor: 'rgb(190, 66, 66)',
                     borderRadius: 2,
                     p: 2,
                     textAlign: 'center'
                  }}>
            <Typography sx={{ textAlign: 'start', fontSize: 27, color: '#322228' }}>Задачи</Typography>
            <Typography sx={{ textAlign: 'start', fontSize: 18 }}>
              твои запланированные задачи и не только (напоминалки)
            </Typography>
            <Box sx={{ mt: 2, overflow: 'hidden' }}>
              <img src="/task-button.png" alt="Кнопка задачи" style={{ width: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Box>
      </Box>

      
    </Box>
  );
}

export default Home;