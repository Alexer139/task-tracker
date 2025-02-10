import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Calendar from "./pages/Calendar";
import KnowledgeBase from "./pages/KnowledgeBase";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import { CssBaseline, Container, Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ bgcolor: '#942929', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;