import React, { useState } from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import TaskCard from "../components/TaskCard";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task one", description: "напиши хоть одну задачу" },
    { id: 2, title: "Task two", description: "вторую то желанию" },
    { id: 3, title: "Task three", description: "третью по просто так" },
    { id: 4, title: "Task four", description: "четвертую если бизнесмен" },
    { id: 5, title: "Task five", description: "лучше отдохни" },
  ]);

  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleOpen = (task) => {
    setSelectedTask({ ...task });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTask(null);
  };

  const handleSave = () => {
    setTasks(tasks.map(task => (task.id === selectedTask.id ? selectedTask : task)));
    handleClose();
  };

  return (
    <Box sx={{ p: 3, mt: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Задачи</Typography>
      
      <Box sx={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
        {tasks.map(task => (
          <TaskCard key={task.id} title={task.title} description={task.description} onClick={() => handleOpen(task)} />
        ))}
      </Box>

      {/* Модальное окно */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{
            width: 330,
            p: 3,
            bgcolor: "rgb(197, 65, 65)",
            mx: "auto",
            mt: "13.5vh",
            borderRadius: 3,

          }}>
          <TextField 
            fullWidth 
            label="Название" 
            value={selectedTask?.title || ""} 
            onChange={(e) => {
              if (e.target.value.length <= 16) {
                setSelectedTask({ ...selectedTask, title: e.target.value });
              }
            }}
            variant="outlined" 
            sx={{
              mb: 2,
              '& label.Mui-focused': {
                color: 'rgb(65, 26, 26)'
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(65, 26, 26)",
                }
              } 
            }} 
          />
          <TextField 
            fullWidth 
            label="Описание" 
            value={selectedTask?.description || ""} 
            onChange={(e) => setSelectedTask({ ...selectedTask, description: e.target.value })} 
            variant="outlined" 
            multiline 
            rows={21.5}
            sx={{
              mb: 2,
              '& label.Mui-focused': {
                color: 'rgb(65, 26, 26)'
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(65, 26, 26)",
                }
              }
            }} 
          />
          <Button onClick={handleSave} variant="contained" sx={{
            mt: 2,
            mr: 1,
            bgcolor: 'rgb(194, 69, 69)',
            color: 'rgb(44, 13, 13)',
            fontSize: 18
          }}>Сохранить</Button>
          <Button onClick={handleClose} variant="outlined" sx={{
            mt: 2,
            border: '2px solid black',
            color: 'rgb(44, 13, 13)',
            fontSize: 18
          }}>Отмена</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Tasks;
