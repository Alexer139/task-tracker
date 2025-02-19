import React from "react";
import { Box, Typography } from "@mui/material";
import BlogCard from "../components/BlogCard";
import Todoist from "../assets/todoist.png";
import Zen from "../assets/Zen.png";
import Nir from "../assets/Nir.png";

const KnowledgeBase = () => {
  const articles = [
    {
      title: "Todoits blog",
      description: "Много статей о продуктивности, тайм-менеджменте и полезных привычках.",
      image: Todoist,
      link: "https://blog.doist.com/category/productivity/"
    },
    {
      title: "Zen Habits",
      description: "Блог о минимализме, привычках и продуктивности. Простые методы для улучшения жизни.",
      image: Zen,
      link: "https://zenhabits.net/"
    },
    {
      title: "Nir Eyal's blog",
      description: "Как справляться с отвлечением и сосредоточиться на важном",
      image: Nir,
      link: "https://www.nirandfar.com/"
    }
  ];

  return (
    <Box sx={{ mt: 6, pt: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>База знаний</Typography>
      {articles.map((article, index) => (
        <BlogCard 
          key={index} 
          title={article.title} 
          description={article.description} 
          image={article.image} 
          link={article.link} 
          imageAsLink={true}
        />
      ))}
    </Box>
  );
};

export default KnowledgeBase;
