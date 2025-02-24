import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";

const ManageComments = () => {
  const [comments, setComments] = useState([
    { id: 1, author: "John Doe", content: "Great blog post!", blog: "Forex Strategies" },
    { id: 2, author: "Jane Smith", content: "Very informative.", blog: "Crypto Basics" },
  ]);

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentComment, setCurrentComment] = useState({ id: null, content: "", author: "", blog: "" });

  const handleOpen = (comment = { id: null, content: "", author: "", blog: "" }) => {
    setCurrentComment(comment);
    setEditMode(!!comment.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentComment({ id: null, content: "", author: "", blog: "" });
  };

  const handleSave = () => {
    if (editMode) {
      setComments(comments.map(c => (c.id === currentComment.id ? currentComment : c)));
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setComments(comments.filter(c => c.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Comments
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>Blog Post</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((comment) => (
              <TableRow key={comment.id}>
                <TableCell>{comment.id}</TableCell>
                <TableCell>{comment.author}</TableCell>
                <TableCell>{comment.content}</TableCell>
                <TableCell>{comment.blog}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleOpen(comment)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(comment.id)}>
                    <Delete />
                  </IconButton>
                  <IconButton color="info">
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Comment Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Comment"
            type="text"
            fullWidth
            value={currentComment.content}
            onChange={(e) => setCurrentComment({ ...currentComment, content: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ManageComments;
