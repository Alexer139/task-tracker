import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem, Select } from "@mui/material";

const themes = {
  black: { background: "#000", color: "#fff" },
  white: { background: "#fff", color: "#000" },
  purple: { background: "#6a0dad", color: "#fff" },
  red: { background: "#d32f2f", color: "#fff" },
};

const Settings = () => {
  const [profile, setProfile] = useState({ name: "", email: "", password: "" });
  const [theme, setTheme] = useState("red");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.style.background = themes[e.target.value].background;
    document.body.style.color = themes[e.target.value].color;
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
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Эл. почта"
          variant="outlined"
          name="email"
          value={profile.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Пароль"
          type="password"
          variant="outlined"
          name="password"
          value={profile.password}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained">Сохранить</Button>
      </Box>
      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Выбор цветовой схемы</Typography>
      <Select value={theme} onChange={handleThemeChange}>
        <MenuItem value="black">Черный</MenuItem>
        <MenuItem value="white">Белый</MenuItem>
        <MenuItem value="purple">Фиолетовый</MenuItem>
        <MenuItem value="red">Красный (по умолчанию)</MenuItem>
      </Select>
    </Box>
  );
};

export default Settings;
