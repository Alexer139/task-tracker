import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function TaskItem({ title, description }) {
  return (
    <Card sx={{ marginBottom: 2, maxWidth: '100%', boxShadow: 3, bgcolor: 'red' }}>
      <CardContent>
        <Typography variant="h6" sx={{ wordWrap: 'break-word' }}>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ wordWrap: 'break-word' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default TaskItem;