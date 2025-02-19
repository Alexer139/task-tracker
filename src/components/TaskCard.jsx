import React from "react";
import { Box, Typography } from "@mui/material";

const TaskCard = ({ title, description, onClick }) => {
  return (
    <Box 
      sx={{ 
        width: 350, 
        height: 150, 
        bgcolor: 'rgb(202, 57, 57)', 
        p: 2, 
        borderRadius: 2,
        boxShadow: '3px 10px 20px rgba(0, 0, 0, 0.3)',
        transition: '0.3s',
        '&:hover': { bgcolor: 'rgb(202, 57, 57)' },
        cursor: "pointer" 
      }} 
      onClick={onClick}
    >
      <Typography variant="h4" sx={{ }}>{title}</Typography>
      <Typography variant="h6" sx={{ display: "-webkit-box", mt: 1, overflow: "hidden", textOverflow: "ellipsis", WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
        {description}
      </Typography>
    </Box>
  );
};

export default TaskCard;
