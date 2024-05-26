import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



import Spinner from "./Spinner";

const News = ({ country, pageSize, category, heading, ProgressBar, mode, mode1 }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  
  const fetchNews = async () => {
    ProgressBar(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=bb5ec218bfeb405db658994716df66c9&pageSize=${pageSize}&page=${page}`;
    setLoading(true);
    ProgressBar(30);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      ProgressBar(100);
      setLoading(false);
      ProgressBar(100);
  };
    
      useEffect(() => {
        document.title = heading; 
        fetchNews();
      },[]); 

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=bb5ec218bfeb405db658994716df66c9&pageSize=${pageSize}&page=${nextPage}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
  };

  return (
    <div className={`container text-${mode1}`} style={{ background: mode1 }}>
      <h1 className={`text-center text-${mode === "dark" ? "white" : "dark"} my-4`}>
        Newswave {heading} - Top Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="mx-2 row">
          {articles.map((element) => (
            <div className="col-md-3" key={element.url}>
              <NewsItem
                mode={mode}
                mode1={mode === "dark" ? "light" : "dark"}
                title={element.title ? element.title.slice(0, 45) : ""}
                source={element.source.name}
                Date={element.publishedAt ? element.publishedAt.slice(0, 10) : ""}
                author={element.author ? element.author : ""}
                description={element.description ? element.description.slice(0, 70) : ""}
                imageUrl={element.urlToImage ? element.urlToImage : "https://static.dw.com/image/69054620_6.jpg"}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  heading: PropTypes.string,
  ProgressBar: PropTypes.func,
  mode: PropTypes.string,
  mode1: PropTypes.string,
};

export default News;
