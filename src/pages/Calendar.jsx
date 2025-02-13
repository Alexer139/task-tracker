import React, { useState } from "react";
import { Box, Typography, Modal, Button, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [notes, setNotes] = useState({});

  const handleOpen = (date) => {
    setSelectedDate(date);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDate(null);
  };

  const handleSaveNote = (event) => {
    setNotes({ ...notes, [`${currentYear}-${currentMonth}-${selectedDate}`]: event.target.value });
  };

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth(currentMonth, currentYear) }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear(currentYear - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear(currentYear + 1);
  };

  return (
    <Box sx={{ p: 3, mt: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Календарь</Typography>

      <Box sx={{bgcolor: 'rgb(82, 30, 30)', px: 3, py: 3, borderRadius: 3, width: 380, ml: -3}}>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Button sx={{ color: 'rgb(214, 162, 162)' }} onClick={handlePrevMonth}><ArrowBackIcon sx={{ fontSize: 45, color: 'rgb(214, 162, 162)' }}/></Button>
        <Typography sx={{ fontSize: 35, fontWeight: 500, color: 'rgb(214, 162, 162)' }}>
          {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" }) .replace(/^./, (char) => char.toUpperCase())}
        </Typography>
        <Button sx={{ color: 'rgb(214, 162, 162)' }} onClick={handleNextMonth}><ArrowForwardIcon sx={{ fontSize: 45, color: 'rgb(214, 162, 162)' }}/></Button>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2.5, }}>
        {days.map((day) => {
          const hasNote = notes.hasOwnProperty(`${currentYear}-${currentMonth}-${day}`);
          return (
            <Box
              key={day}
              sx={{ 
                p: 1,
                width: 70, 
                border: "2px solid rgb(197, 46, 46)",
                borderRadius: 2,
                boxShadow: '2px 5px 15px rgba(0, 0, 0, 0.66)',
                fontSize: 34,
                fontWeight: 500,
                textAlign: "center",
                cursor: "pointer", 
                bgcolor: hasNote ? "rgb(197, 46, 46)" : "transparent" 
              }}
              onClick={() => handleOpen(day)}
            >
              {day} {hasNote}
            </Box>
          );
        })}
      </Box>

      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{timeout: 500,}}
      > 

        <Box sx={{
            width: 300,
            p: 3,
            bgcolor: "rgb(197, 65, 65)",
            mx: "auto",
            mt: "20vh",
            borderRadius: 2,
            transform: open ? "scale(1)" : "scale(0.9)",
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
            opacity: open ? 1 : 0
            
            }}>
          <Typography variant="h6" >Заметки на {selectedDate} число</Typography>
          <TextField
            fullWidth
            multiline
            rows={10}
            variant="outlined"
            value={notes[`${currentYear}-${currentMonth}-${selectedDate}`] || ""}
            onChange={handleSaveNote}
            sx={{ mt: 2,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(65, 26, 26)",
                }
              }
            }}
          />
          <Button onClick={handleClose} variant="contained" sx={{
            mt: 2,
            mr: 1,
            bgcolor: 'rgb(194, 69, 69)',
            color: 'rgb(44, 13, 13)',
            fontSize: 18
          }}>Закрыть</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Calendar;
