import React, { useState } from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import TaskCard from "../components/TaskCard";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task one", description: "description" },
    { id: 2, title: "Task two", description: "description" },
    { id: 3, title: "Task three", description: "description" },
    { id: 4, title: "Task four", description: "description" },
    { id: 5, title: "Task five", description: "description" },
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
        <Box sx={{ width: 330, p: 3, bgcolor: "white", mx: "auto", mt: "13.5vh", borderRadius: 3 }}>
          <TextField 
            fullWidth 
            label="Название" 
            value={selectedTask?.title || ""} 
            onChange={(e) => setSelectedTask({ ...selectedTask, title: e.target.value })} 
            variant="outlined" 
            sx={{ mb: 2 }} 
          />
          <TextField 
            fullWidth 
            label="Описание" 
            value={selectedTask?.description || ""} 
            onChange={(e) => setSelectedTask({ ...selectedTask, description: e.target.value })} 
            variant="outlined" 
            multiline 
            rows={4} 
          />
          <Button onClick={handleSave} variant="contained" sx={{ mt: 2, mr: 1 }}>Сохранить</Button>
          <Button onClick={handleClose} variant="outlined" sx={{ mt: 2 }}>Отмена</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Tasks;
