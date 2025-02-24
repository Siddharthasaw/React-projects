import React, { useEffect, useState } from "react";
import { Container, Paper, Typography, Grid, Card, CardContent } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    // Fetch data from Google Analytics API (Backend should handle authentication and fetching)
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/analytics"); // Replace with actual backend endpoint
        const data = await response.json();
        setAnalyticsData(data);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      }
    };
    fetchAnalytics();
  }, []);

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          Website Analytics
        </Typography>
        {analyticsData ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Page Views</Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData.pageViews}>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="views" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">User Sessions</Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={analyticsData.sessions}>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="sessions" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Typography>Loading analytics data...</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Analytics;
