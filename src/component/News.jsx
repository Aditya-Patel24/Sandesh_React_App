import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const categories = {
    business: "lightblue",
    entertainment: "lightgreen",
    general: "lightyellow",
    health: "lightpink",
    science: "lightgray",
    sports: "lightcoral",
    technology: "lightgoldenrodyellow",
  };

  const newsStyle = {
    backgroundColor: categories[props.category] || "white",
  };

  useEffect(() => {
    document.title = `Sandesh - ${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    }`;
    update();
  }, []);

  const update = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39b492da28fa492995bea597ec322fbd&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39b492da28fa492995bea597ec322fbd&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();

    // Check if all articles have been fetched
    if (articles.length + parseData.articles.length >= parseData.totalResults) {
      setHasMore(false);
    }
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    
    <div style={newsStyle}>
      <h1 className="text-center text-primary py-2" style={{marginTop:"55px", textShadow:"1px 1px 2px black, 0 0 1em blue,  0 0 0.2em white", font: "italic 3em Georgia, serif"}}>
        Sandesh1 from{" "}
        {props.category.charAt(0).toUpperCase() +
          props.category.slice(1)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner/>}
      >
        <div className="container">
          <div className="row">
            {articles &&
              articles.map((element, index) => {
                return (
                  <div key={element.url} className="col-md-4">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageurl={element.urlToImage}
                      urlId={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
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