import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, CardMedia, Box, TextField, Button, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function BlogDetails() {
  const { state } = useLocation();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  console.log(state);

  if (!state) {
    return <Typography variant="h6">Blog not found</Typography>;
  }

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "50px 0" }}>
      <Container maxWidth="md" sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 3, padding: "20px" }}>
        <CardMedia
          component="img"
          height="300"
          image={state.image}
          alt={state.title}
          sx={{ borderRadius: 2, boxShadow: 2 }}
        />
        <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
          {state.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
          {state.category} | {state.date}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
          {state.content}
        </Typography>

        {/* Likes/Dislikes Section */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <IconButton onClick={handleLike}>
            <ThumbUpIcon color="primary" />
          </IconButton>
          <Typography variant="body2" sx={{ mr: 2 }}>
            {likes}
          </Typography>
          <IconButton onClick={handleDislike}>
            <ThumbDownIcon color="error" />
          </IconButton>
          <Typography variant="body2">
            {dislikes}
          </Typography>
        </Box>

        {/* Comment Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Comments
          </Typography>
          {comments.map((comment, index) => (
            <Box key={index} sx={{ mb: 2, p: 2, backgroundColor: "#f0f0f0", borderRadius: 1 }}>
              <Typography variant="body2">{comment}</Typography>
            </Box>
          ))}
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
