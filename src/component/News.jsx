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
      business: '#000066',
      technology: '#66ccff',
      health: '#009900',
      entertainment: '#ff3300',
      sports: '#ff6600',
      science: '#660066',
      general: '#8a90ff',
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
    backgroundColor: props.mode === 'dark' ? '#212529' : categories[props.category] || "white",
    color: props.mode === 'dark' ? 'white' : 'black'
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
      <h1 className="text-center  pt-3" style={{marginTop:"55px", color: "rgba(255, 255, 255, 0.88)", textShadow:"2px 2px 2px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.5)"}}>
        Sandesh from{" "}
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
        <div className="container ">
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