import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static" sx={{ display: { xs: 'block', sm: 'flex' } }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', sm: 'block' } }}>Главная</Button>
          <Button color="inherit" component={Link} to="/categories" sx={{ display: { xs: 'none', sm: 'block' } }}>Категории</Button>
          <Button color="inherit" component={Link} to="/add-task" sx={{ display: { xs: 'none', sm: 'block' } }}>Добавить задачу</Button>
          <Button color="inherit" component={Link} to="/dashboard" sx={{ display: { xs: 'none', sm: 'block' } }}>Дэшборд</Button>
          <Button color="inherit" component={Link} to="/settings" sx={{ display: { xs: 'none', sm: 'block' } }}>Настройки</Button>
          <Button color="inherit" component={Link} to="/about" sx={{ display: { xs: 'none', sm: 'block' } }}>О проекте</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem component={Link} to="/" onClick={() => setOpen(false)}>
            <ListItemText primary="Главная" />
          </ListItem>
          <ListItem component={Link} to="/categories" onClick={() => setOpen(false)}>
            <ListItemText primary="Категории" />
          </ListItem>
          <ListItem component={Link} to="/add-task" onClick={() => setOpen(false)}>
            <ListItemText primary="Добавить задачу" />
          </ListItem>
          <ListItem component={Link} to="/dashboard" onClick={() => setOpen(false)}>
            <ListItemText primary="Дэшборд" />
          </ListItem>
          <ListItem component={Link} to="/settings" onClick={() => setOpen(false)}>
            <ListItemText primary="Настройки" />
          </ListItem>
          <ListItem component={Link} to="/about" onClick={() => setOpen(false)}>
            <ListItemText primary="О проекте" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
export default Navbar;