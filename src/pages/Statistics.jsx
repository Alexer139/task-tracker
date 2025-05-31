import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, CircularProgress } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Statistics({ tasks }) {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Рассчитываем статистику при изменении задач
    const completed = tasks.filter(task => task.completed).length;
    setCompletedTasks(completed);
    setTotalTasks(tasks.length);

    // Статистика по категориям
    const categoryCounts = {};
    tasks.forEach(task => {
      if (task.category) {
        categoryCounts[task.category] = (categoryCounts[task.category] || 0) + 1;
      }
    });

    const data = Object.entries(categoryCounts).map(([category, count]) => ({
      name: category,
      value: count
    }));
    setCategoryData(data);
    setLoading(false);
  }, [tasks]);


  const chartData = categoryData.length > 0 ? categoryData : [{ name: 'No categories', value: 1 }]; // Display a default chart if no categories exist.

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Statistics
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Total Tasks</Typography>
            <Typography variant="body1">{totalTasks}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Completed Tasks</Typography>
            <Typography variant="body1">{completedTasks}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Remaining Tasks</Typography>
            <Typography variant="body1">{totalTasks - completedTasks}</Typography>
          </Paper>
        </Grid>
        {categoryData.length > 0 && (
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Tasks by Category</Typography>
              {loading ? (
                <CircularProgress />
              ) : (
                <BarChart
                  width={700}
                  height={300}
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              )}
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Statistics;