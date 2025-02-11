import React from "react";
import { Box, Typography } from "@mui/material";

function Doska({ title, description, image }) {
    return(
            <Box sx={{ width: 340, height: 200, bgcolor: '#D65656', borderRadius: 2, p: 2, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ textAlign: 'start', fontWeight: 600, color: '#322228' }}>{title}</Typography>
              <Typography sx={{ textAlign: 'start', fontWeight: 600, color: 'rgb(61, 26, 26)' }}>{description}</Typography>
              <Box sx={{ mt: 2, overflow: 'hidden' }}>
                <img src={image} alt={`Кнопка ${title}`} style={{ width: '100%', objectFit: 'cover' }} />
              </Box>
            </Box>
          );
}

export default Doska;

