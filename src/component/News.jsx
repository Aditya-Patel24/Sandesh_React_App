import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const categories = {
    business: "#000066",
    technology: "#66ccff",
    health: "#009900",
    entertainment: "#ff3300",
    sports: "#ff6600",
    science: "#660066",
    general: "#8a90ff",
  };
  // const categoriesdark = {
  //   business: "gray",
  //   entertainment: "black",
  //   general: "darkblue",
  //   health: "darkgreen",
  //   science: "darkgray",
  //   sports: "darkcoral",
  //   technology: "darkgoldenrodyellow",
  //   general: "lightgray",
  // };

  const newsStyle = {
    backgroundColor:
      props.mode === "dark" ? "#212529" : categories[props.category] || "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  useEffect(() => {
    update();
  }, []);
  const update = async () => {
    try {
      setLoading(true);
      props.setProgress(10);

      let url = `https://newsapi.org/v2/top-headlines?category=${
        props.category
      }&apiKey=${import.meta.env.VITE_APP_KEY}&page=${page}`;
      let response = await axios.get(url);
      console.log("data", response.data); // Check the structure here

      props.setProgress(30);

      if (response.data.status !== "ok") {
        throw new Error(`API error: ${response.data.message}`);
      }

      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const fetchMoreData = async () => {
    try {
      setPage(page + 1);
      let url = `https://newsapi.org/v2/top-headlines?category=${
        props.category
      }&apiKey=${import.meta.env.VITE_APP_KEY}&page=${page + 1}`;

      let response = await axios.get(url);
      console.log("More data response:", response.data); // Check the structure here

      if (response.data.status !== "ok") {
        throw new Error(`API error: ${response.data.message}`);
      }

      if (
        articles.length + response.data.articles.length >=
        response.data.totalResults
      ) {
        setHasMore(false);
      }

      setArticles((prevArticles) => [
        ...prevArticles,
        ...response.data.articles,
      ]);
      setTotalResults(response.data.totalResults);
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
    finally {
      setLoading(false);
      props.setProgress(100);
    }
  };

  return (
    <div style={newsStyle}>
      <h1
        className="text-center  pt-3"
        style={{
          marginTop: "55px",
          color: "rgba(255, 255, 255, 0.88)",
          textShadow:
            "2px 2px 2px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.5)",
        }}
      >
        Sandesh from{" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
      </h1>
      {loading}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
      >
        <div className="container ">
          <div className="row">
            {articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title || "No Title Available"}
                    description={
                      element.description || "No Description Available"
                    }
                    imageurl={element.urlToImage || "default-image-url.jpg"} // Add a fallback image if needed
                    urlId={element.url}
                    author={element.author || "Unknown"}
                    date={element.publishedAt}
                    source={element.source?.name || "Unknown Source"} // Safe access
                    mode={props.mode}
                  />
                </div>
              );
            })}
          </div>
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
};

export default News;
