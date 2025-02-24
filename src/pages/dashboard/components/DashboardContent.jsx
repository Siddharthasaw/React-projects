import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { People, Article, Comment, BarChart } from "@mui/icons-material";

const stats = [
  { label: "Total Users", value: 1200, icon: <People /> },
  { label: "Total Blogs", value: 350, icon: <Article /> },
  { label: "Total Comments", value: 850, icon: <Comment /> },
  { label: "Total Views", value: "50K", icon: <BarChart /> },
];

const chartData = [
  { month: "Jan", views: 4000 },
  { month: "Feb", views: 3000 },
  { month: "Mar", views: 5000 },
  { month: "Apr", views: 7000 },
  { month: "May", views: 6000 },
  { month: "Jun", views: 8000 },
];

const activities = [
  { id: 1, text: "User John posted a new blog." },
  { id: 2, text: "Admin approved a new comment." },
  { id: 3, text: "User Sarah updated her profile." },
  { id: 4, text: "New user Mark registered." },
];

const DashboardContent = () => {
  return (
    <Grid container spacing={3}>
      {/* Stats Section */}
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper style={{ padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {stat.icon}
            <div>
              <Typography variant="h6">{stat.value}</Typography>
              <Typography variant="subtitle1">{stat.label}</Typography>
            </div>
          </Paper>
        </Grid>
      ))}

      {/* Charts Section */}
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: 20, height: "100%" }}>
          <Typography variant="h6" gutterBottom>
            Monthly Views
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#3f51b5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      {/* Recent Activity Section */}
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: 20, height: "100%" }}>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          {activities.map((activity) => (
            <Typography key={activity.id} variant="body2">
              - {activity.text}
            </Typography>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardContent;
