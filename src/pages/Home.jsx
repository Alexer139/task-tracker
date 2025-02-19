import React from "react";
import { Typography, Box, Button, Link } from "@mui/material";
import Doska from "../components/Doska";
import taskButton from "../assets/task-button.png";
import calendarButton from "../assets/calendar-button.png";
import knowledgeButton from "../assets/knowledge-button.png";


function Home() {

  return (
    <Box sx={{ p: 3,
               textAlign: 'center',
               pt: 12,
               fontFamily: 'Montserrat Alternates',
            }}>
      
      <Typography variant="h3" sx={{fontWeight: 500}}>планируйте в</Typography>
      <Typography variant="h2" sx={{ color: 'rgb(247, 175, 175)', fontWeight: 700  }}>
        удобной
      </Typography>
      <Typography variant="h2" sx={{fontWeight: 400}}>обстановке</Typography>

      <Typography component="div" variant="h5" sx={{
        mt: 2,
        fontWeight: 500
      }}>
        здесь вы найдете удобный инструмент для управления задачами и проектами
      </Typography>

      <Box sx={{ mt: 7 }}>
        <Typography variant="h4" gutterBottom>
          Попробовать
        </Typography>
        <Button
          className="app_button"
          variant="contained" 
          sx={{
            width: 290,
            height: 100,
            borderRadius: 3,
            boxShadow: '6px 13px 6px rgba(0, 0, 0, 0.3)',
            bgcolor: 'rgb(202, 57, 57)',
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
        <Typography sx={{fontSize: 28}} gutterBottom>
          Возможности сайта
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: -2 }}>
          <Doska 
            title="Задачи" 
            description="твои запланированные задачи и не только (напоминалки)" 
            image={taskButton}
            height={198}
            bgcolor={'rgb(216, 69, 69)'}
            colorTitel={'rgba(50, 34, 40, 1)'}
            colorDesc={'rgb(54, 22, 22)'}
          />
          <Doska 
            title="Календарь" 
            description="твои возможные задачи/мероприятия запланированые на месяц" 
            image={calendarButton}
            height={280}
            bgcolor={'rgb(82, 30, 30)'}
            colorTitel={'rgb(236, 151, 151)'}
            colorDesc={'rgb(180, 82, 82)'}
          />
          <Doska 
            title="База знаний" 
            description="твои блоги и статьи по улучшению продуктивности" 
            image={knowledgeButton}
            height={286}
            bgcolor={'rgb(207, 80, 80)'}
            colorTitel={'rgba(15, 11, 12, 0.76)'}
            colorDesc={'rgb(56, 37, 44)'}
          />
        </Box>
      </Box>


    </Box>
  );
}

export default Home;