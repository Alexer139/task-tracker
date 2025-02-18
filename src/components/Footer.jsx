import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import {Box, Typography, Link, Icon} from "@mui/material";

function Footer() {
    return (
        <Box 
        sx={{
            bgcolor: 'rgb(48, 14, 14)',
            width: '100%',
            mt: 2,
            height: 70,
            pt: 2.3,
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 'inset 0px 10px 14px rgba(0, 0, 0, 0.31)',
        }}
      >
        <GitHubIcon sx={{ fontSize: 31, color: 'rgb(214, 162, 162)' }} />
        <Typography
          variant="h5"
        >
          <Link href="https://github.com/Alexer139" target="_blank" rel="noopener noreferrer" sx={{
            textDecoration: 'none',
            color: 'rgb(214, 162, 162)',
            ml: 1,
            }} >my github</Link>
        </Typography>
      </Box>
    );
}

export default Footer;