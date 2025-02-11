import React from "react";
import { Box, Typography } from "@mui/material";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';

function Doska({ title, description, image, bgcolor, height, colorTitel, colorDesc }) {
    return(
            <Box sx={{ width: 340, height: height, bgcolor: bgcolor, borderRadius: 2, p: 1.5, mt: 2, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ textAlign: 'start', fontWeight: 600, color: colorTitel }}>
                {title}
                {/* <PlaylistAddCheckIcon /> */}
              </Typography> 
              <Typography sx={{ textAlign: 'start', fontWeight: 600, color: colorDesc }}>{description}</Typography>
              <Box sx={{ mt: 2, overflow: 'hidden' }}>
                <img src={image} alt={`Кнопка ${title}`} style={{ width: '100%', objectFit: 'cover' }} />
              </Box>
            </Box>
          );
}

export default Doska;

