import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel, Container, Typography, Paper, Grid } from "@mui/material";

const SeoSettings = () => {
  const [seoData, setSeoData] = useState({
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    slug: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonicalUrl: "",
    indexFollow: true,
  });

  const handleChange = (e) => {
    setSeoData({ ...seoData, [e.target.name]: e.target.value });
  };

  const handleSwitchChange = (e) => {
    setSeoData({ ...seoData, indexFollow: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEO Settings Submitted:", seoData);
    // Backend API Call here (POST/PUT request)
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          SEO Settings
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Meta Title" name="metaTitle" value={seoData.metaTitle} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={3} label="Meta Description" name="metaDescription" value={seoData.metaDescription} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Keywords (comma separated)" name="keywords" value={seoData.keywords} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Slug" name="slug" value={seoData.slug} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Open Graph Title" name="ogTitle" value={seoData.ogTitle} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={2} label="Open Graph Description" name="ogDescription" value={seoData.ogDescription} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Open Graph Image URL" name="ogImage" value={seoData.ogImage} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Canonical URL" name="canonicalUrl" value={seoData.canonicalUrl} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Switch checked={seoData.indexFollow} onChange={handleSwitchChange} />} label="Allow Indexing & Follow" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">Save Settings</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SeoSettings;
