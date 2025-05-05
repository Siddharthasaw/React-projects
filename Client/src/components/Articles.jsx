import { Box } from "@mui/material";

import { useEffect, useState } from "react";

import { getNews } from "../service/api";

import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
    console.log(response.data); // Log the response to check the data
    setNews(response.data);
  };

  return (
    <>
      <Box>
        {
          news.map(data  => (
            <Article data={data}/> // Pass `data` as a prop
          ))
        }
      </Box>
    </>
  );
};

export default Articles;
