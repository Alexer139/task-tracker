import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem, Select } from "@mui/material";



const themes = {
  black: { background: "#000", color: "#000" },
  white: { background: "#fff", color: "#fff" },
  purple: { background: "#6a0dad", color: "#6e2092" },
  red: { background: "#d32f2f", color: "red" },
};

const Settings = () => {
  const [profile, setProfile] = useState({ name: "", email: "", password: "" });
  const [theme, setTheme] = useState("red");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleThemeChange = (themeKey) => {
    setTheme(themeKey);
    document.body.style.background = themes[themeKey].background;
    document.body.style.color = themes[themeKey].color;
  };

  return (
    <Box sx={{ p: 3, pt: 9 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>Настройки</Typography>
      <Box sx={{ mb: 3, maxWidth: 400, mx: "auto" }}>
        <Typography sx={{ fontSize: 23, fontWeight: 600 }}>Профиль</Typography>
    
        <TextField
          fullWidth
          label="Имя"
          variant="outlined"
          name="name"
          value={profile.name}
          onChange={handleChange}
          sx={{ mb: 2, mt: 1,
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
          label="Эл. почта"
          variant="outlined"
          name="email"
          value={profile.email}
          onChange={handleChange}
          sx={{ mb: 2,
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
          label="Пароль"
          type="password"
          variant="outlined"
          name="password"
          value={profile.password}
          onChange={handleChange}
          sx={{ mb: 2,
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
        <Button className="app_button" variant="contained" sx={{ 
          bgcolor: 'rgb(194, 69, 69)',
          color: 'rgb(44, 13, 13)',
          fontSize: 15
        }}>Сохранить</Button>
      </Box>
      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Выбор цветовой схемы</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {Object.keys(themes).map((key) => (
          <Box
            key={key}
            onClick={() => handleThemeChange(key)}
            sx={{
              width: 60,
              height: 60,
              borderRadius: 2,
              background: themes[key].background,
              cursor: "pointer",
              mb: 30
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Settings;
