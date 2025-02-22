import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const RiskDisclaimer = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "50px 0" }}>
      <Container maxWidth="md" >
        <Paper  >
          <Typography variant="h4" gutterBottom textAlign="center" fontWeight={600} sx={{ color: "#3b6ea5" }}>
            Risk Disclaimer
          </Typography>

          <Typography variant="body1" paragraph>
            Trading in financial markets, including Forex, CFDs, and cryptocurrencies, involves a high
            level of risk and may not be suitable for all investors. The leverage associated with
            trading can work both to your advantage and disadvantage. Before deciding to trade, you
            should carefully consider your investment objectives, experience level, and risk appetite.
          </Typography>

          <Typography variant="h6" fontWeight={600} sx={{ mt: 2, color: "#3b6ea5" }}>
            No Guarantees of Profit
          </Typography>
          <Typography variant="body1" paragraph>
            There are no guarantees of profits when trading financial instruments. Past performance
            does not indicate future results. Market conditions can change rapidly, affecting trading
            outcomes.
          </Typography>

          <Typography variant="h6" fontWeight={600} sx={{ mt: 2, color: "#3b6ea5" }}>
            Market Volatility
          </Typography>
          <Typography variant="body1" paragraph>
            Financial markets can be highly volatile, leading to rapid price movements that may result
            in significant gains or losses. It is essential to use risk management strategies such as
            stop-loss orders and position sizing.
          </Typography>

          <Typography variant="h6" fontWeight={600} sx={{ mt: 2, color: "#3b6ea5" }}>
            Seek Professional Advice
          </Typography>
          <Typography variant="body1" paragraph>
            We strongly recommend consulting a qualified financial advisor before engaging in trading.
            Ensure you fully understand the risks involved and only invest funds you can afford to lose.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default RiskDisclaimer;
