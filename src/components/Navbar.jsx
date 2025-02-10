import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static" sx={{ display: { xs: 'block', sm: 'flex' }, bgcolor: '#942929' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)} sx={{ display: { sm: 'none' } }}>
            <img src="/logo.svg" alt="Menu" style={{ width: 90, height: 40 }} />
          </IconButton>
          <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center', color: 'black'}}>Task Tracker</Typography>
          <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', sm: 'block' } }}>Главная</Button>
          <Button color="inherit" component={Link} to="/tasks" sx={{ display: { xs: 'none', sm: 'block' } }}>Задачи</Button>
          <Button color="inherit" component={Link} to="/calendar" sx={{ display: { xs: 'none', sm: 'block' } }}>Календарь</Button>
          <Button color="inherit" component={Link} to="/knowledge-base" sx={{ display: { xs: 'none', sm: 'block' } }}>База знаний</Button>
          <Button color="inherit" component={Link} to="/settings" sx={{ display: { xs: 'none', sm: 'block' } }}>Настройки</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: {
          width: 180,
          bgcolor: 'rgb(177, 48, 48)',
          height: 'auto',
          maxHeight: '400px',
          borderRadius: '0 0 10px 0',
          transition: 'all 0.3s ease-in-out'
              } }}
      >
        <List>
          {[
            { text: "Главная", path: "/" },
            { text: "Задачи", path: "/tasks" },
            { text: "Календарь", path: "/calendar" },
            { text: "База знаний", path: "/knowledge-base" },
            { text: "Настройки", path: "/settings" }
          ].map(({ text, path }) => (
              <ListItem key={text} component={Link} to={path} onClick={() => setOpen(false)} sx={{ color: 'black', textDecoration: 'none' }}>
              <ListItemText primary={<Typography variant="h5">{text}</Typography>} />
              </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
export default Navbar;