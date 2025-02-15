import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Tooltip } from "@mui/material";

const BlogCard = ({ title, description, image, link, imageAsLink }) => {
  return (
    <Card sx={{ maxWidth: 400, mb: 2, p: 2, bgcolor: 'rgb(216, 69, 69)', borderRadius: 3 }}>
      <Tooltip title="Перейти на сайт" arrow>
      {imageAsLink ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardMedia component="img" height="130"  image={image} alt={title} sx={{borderRadius: 3}} />
        </a>
      ) : (
        <CardMedia component="img" height="130"  image={image} alt={title}  />
      )}
      </Tooltip>
      <Box sx={{ mt: 1 }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default BlogCard;
