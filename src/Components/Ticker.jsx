import React, { useEffect } from "react";

const Ticker = () => {
  useEffect(() => {
    if (!document.getElementById("tradingview-script-forex")) {
      const script1 = document.createElement("script");
      script1.id = "tradingview-script-forex";
      script1.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script1.async = true;
      script1.innerHTML = JSON.stringify({
        symbols: [
          { proName: "FX:EURUSD", title: "EUR/USD" },
          { proName: "FX:GBPUSD", title: "GBP/USD" },
          { proName: "FX:USDJPY", title: "USD/JPY" },
          { proName: "OANDA:XAUUSD", title: "Gold" },
        ],
        colorTheme: "light",
        isTransparent: false,
        displayMode: "adaptive",
        locale: "en",
      });
      document.getElementById("tradingview-widget-forex").appendChild(script1);
    }
  }, []);

  useEffect(() => {
    if (!document.getElementById("tradingview-script-crypto")) {
      const script2 = document.createElement("script");
      script2.id = "tradingview-script-crypto";
      script2.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script2.async = true;
      script2.innerHTML = JSON.stringify({
        symbols: [
          { proName: "CRYPTO:BTCUSD", title: "Bitcoin" },
          { proName: "CRYPTO:ETHUSD", title: "Ethereum" },
          { proName: "CRYPTO:LTCUSD", title: "Litecoin" },
          { proName: "CRYPTO:XRPUSD", title: "Ripple" },
        ],
        colorTheme: "light",
        isTransparent: false,
        displayMode: "adaptive",
        locale: "en",
      });
      document.getElementById("tradingview-widget-crypto").appendChild(script2);
    }
  }, []);

  return (
    <div>
      <div id="tradingview-widget-forex" style={{ width: "100%", marginBottom: "20px" }}>
        {/* Forex and Gold Widget will be loaded here */}
      </div>
      <div id="tradingview-widget-crypto" style={{ width: "100%", marginBottom: "20px" }}>
        {/* Crypto Widget will be loaded here */}
      </div>
    </div>
  );
};

export default Ticker;
