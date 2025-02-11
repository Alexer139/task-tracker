import React from "react";
import { Typography, Box, Button, Link } from "@mui/material";
import Doska from "../components/Doska";

function Home() {
  return (
    <Box sx={{ p: 3,
               textAlign: 'center',
               pt: 12,
               fontFamily: 'Montserrat',  }}>
      
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

                                      {/* Возможности сайта */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Возможности сайта
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 2 }}>
          <Doska 
            title="Задачи" 
            description="твои запланированные задачи и не только (напоминалки)" 
            image="/public/task-button.png"
            height={198}
            bgcolor={'#BE4242'}
            colorTitel={'rgba(50, 34, 40, 1)'}
            colorDesc={'rgb(54, 22, 22)'}
          />
          <Doska 
            title="Календарь" 
            description="твои возможные задачи/мероприятия запланированые на месяц" 
            image="/public/calendar-button.png"
            height={280}
            bgcolor={'rgb(82, 30, 30)'}
            colorTitel={'rgb(236, 151, 151)'}
            colorDesc={'rgb(180, 82, 82)'}
          />
          <Doska 
            title="База знаний" 
            description="твои блоги и статьи по улучшению продуктивности" 
            image="/public/knowledge-button.png"
            height={246}
            bgcolor={'rgb(218, 103, 103)'}
            colorTitel={'rgba(15, 11, 12, 0.76)'}
            colorDesc={'rgb(56, 37, 44)'}
          />
        </Box>
      </Box>


    </Box>
  );
}

export default Home;