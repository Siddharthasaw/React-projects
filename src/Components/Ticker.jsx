import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Grid } from "@mui/material";

const initialData = [
  { name: "EUR/USD", price: 1.04277 },
  { name: "GBP/USD", price: 1.26055 },
  { name: "USD/JPY", price: 151.803 },
  { name: "XAU/USD", price: 2944.35 },
  { name: "SILVER", price: 32.982 },
  { name: "BITCOIN", price: 96318.36 },
];

const MarketTicker = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => {
          const change = (Math.random() * 0.5 - 0.25).toFixed(5); // Random price change
          const newPrice = parseFloat((item.price + parseFloat(change)).toFixed(5));
          return { ...item, price: newPrice, change: parseFloat(change) };
        })
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: "100%", padding: "20px", backgroundColor: "#f8f9fa" }}>
      <Grid container spacing={2} justifyContent="center">
        {data.map((item) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={item.name}>
            <motion.div
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#333",
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: "white",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="body1">{item.name}</Typography>
              <motion.span
                key={item.price}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: item.change >= 0 ? "green" : "red",
                  fontSize: "20px",
                }}
              >
                {item.price} {item.change >= 0 ? "🔼" : "🔽"}
              </motion.span>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MarketTicker;
