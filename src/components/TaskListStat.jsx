import React from 'react';
import { List, ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskListStat({ tasks, onTaskToggle, onTaskDelete }) {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} divider>
          <Checkbox
            checked={task.completed}
            onChange={() => onTaskToggle(task.id)}
          />
          <ListItemText primary={task.title} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => onTaskDelete(task.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskListStat;