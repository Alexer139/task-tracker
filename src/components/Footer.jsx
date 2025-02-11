import React from "react";
import {Box, Typography, Link} from "@mui/material";

function Footer() {
    return (
        <Box 
        sx={{
            bgcolor: 'rgb(48, 14, 14)',
            width: '100%',
            mt: 2,
            textAlign: 'center',
            height: 70,
            pt: 2.3
        }}
      >
        <Typography
          variant="h5"
        >
          <Link href="https://github.com/Alexer139" target="_blank" rel="noopener noreferrer" sx={{
            textDecoration: 'none',
            color: 'rgb(214, 162, 162)',
            }} >my github</Link>
        </Typography>
      </Box>
    );
}

export default Footer;