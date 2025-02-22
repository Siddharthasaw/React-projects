import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rebecca",
    image: "https://via.placeholder.com/50",
    rating: "⭐⭐⭐⭐⭐",
    text: "I'll be using this app on all of my stores and the stores I build for my students. Y'all are literally the best thing I have found for automating my sales.",
  },
  {
    name: "Josmar",
    image: "https://via.placeholder.com/50",
    rating: "⭐⭐⭐⭐⭐",
    text: "Works like a charm. I love the ease of the app and would highly recommend purchasing their monthly program to create a perfect selling opportunity for yourself.",
  },
  {
    name: "Kimberley",
    image: "https://via.placeholder.com/50",
    rating: "⭐⭐⭐⭐⭐",
    text: "I didn’t even know where to start as far as advertising goes or how to reach people. This really made this part so easy and effective, thank you!",
  },
  {
    name: "Michael",
    image: "https://via.placeholder.com/50",
    rating: "⭐⭐⭐⭐⭐",
    text: "This app has transformed my business. The automation features are top-notch and have saved me so much time.",
  },
];

export default function Testimonials() {
  return (
    <Box
      sx={{
        margin: "auto",
        textAlign: "center",
        p: 3,
        padding: "100px 0 100px 0",
        backgroundColor: "#ecf0f6",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#3b6ea5" }}>
          What Our Clients Say About VIP Signals, Gold & Crypto
        </Typography>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            600: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1500: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Avatar
                  src={review.image}
                  sx={{
                    width: 56,
                    height: 56,
                    margin: "auto",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "2px solid #3b6ea5",
                  }}
                />
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold", color: "#3b6ea5" }}>
                  {review.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.rating}
                </Typography>
                <CardContent>
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    {review.text}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
