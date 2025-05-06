import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const Article = ({ data }) => {
  return (
    <Card sx={{ width: "50%", margin: "30px auto", boxShadow: 3, display: "flex", flexDirection: "row" }}>
      {/* Content on the Left */}
      <CardContent sx={{ flex: 1 }}>
        {/* Title */}
        <Typography variant="h5" gutterBottom>
          {data.title}
        </Typography>

        {/* Description */}
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {data.description}
        </Typography>

        {/* Author and Publisher */}
        <Typography variant="subtitle2" color="textSecondary">
          Author: {data.author || "Unknown"} | Publisher: {data.publisher}
        </Typography>

        {/* Timestamp */}
        <Typography variant="subtitle2" color="textSecondary">
          Published At: {new Date(data.timestamp).toLocaleString()}
        </Typography>

        {/* Read More Button */}
        <Button
          variant="contained"
          color="primary"
          href={data.link}
          target="_blank"
          sx={{ marginTop: "10px" }}
        >
          Read More
        </Button>
      </CardContent>

      {/* Image on the Right */}
      <CardMedia
        component="img"
        sx={{ width: "40%", height: "auto" }}
        image={data.url}
        alt={data.title}
      />
    </Card>
  );
};

export default Article;