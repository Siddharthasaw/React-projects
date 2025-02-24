import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Grid,
} from "@mui/material";

const Settings = () => {
  const [settings, setSettings] = useState({
    siteTitle: "",
    siteDescription: "",
    enableDarkMode: false,
    analyticsTrackingID: "",
  });

  useEffect(() => {
    // Fetch existing settings from backend
    const fetchSettings = async () => {
      try {
        const response = await fetch("/api/settings"); // Replace with actual backend endpoint
        const data = await response.json();
        setSettings(data);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch("/api/settings", {
        method: "POST", // or PUT depending on backend
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (!response.ok) {
        throw new Error("Failed to save settings");
      }
      alert("Settings saved successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          Website Settings
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Site Title"
              name="siteTitle"
              value={settings.siteTitle}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Site Description"
              name="siteDescription"
              multiline
              rows={3}
              value={settings.siteDescription}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Analytics Tracking ID"
              name="analyticsTrackingID"
              value={settings.analyticsTrackingID}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.enableDarkMode}
                  onChange={handleChange}
                  name="enableDarkMode"
                />
              }
              label="Enable Dark Mode"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Settings
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Settings;
