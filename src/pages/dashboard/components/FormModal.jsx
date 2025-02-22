import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const FormModal = ({ open, onClose, onSave, blog }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
  });

  useEffect(() => {
    if (blog) {
      setFormData(blog);
    } else {
      setFormData({
        title: "",
        author: "",
        date: "",
        content: "",
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 4, backgroundColor: "white", margin: "auto", mt: 10, width: 400 }}>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default FormModal;