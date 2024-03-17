import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      Loading: false,
    };
  }
  async update(){
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=39b492da28fa492995bea597ec322fbd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles, loading: false });
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=39b492da28fa492995bea597ec322fbd&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({ articles: parseData.articles, loading: false });
    this.update();
  }
  handleOnPrev = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=39b492da28fa492995bea597ec322fbd&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading: false,
    // });
    this.setState({
      page: this.state.page - 1
    });
    this.update();
  };
  handleOnNext = async () => {

//     if (
//       !Math.ceil(
//         this.state.page + 1 > this.state.totalResults / this.props.pageSize
//       )
//     ) {
//       let url = `https://newsapi.org/v2/top-headlines?7country=${
//         this.props.country
//       }&category=${this.props.category}&apiKey=39b492da28fa492995bea597ec322fbd
// &page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//       this.setState({ loading: true });
//       let data = await fetch(url);
//       let parseData = await data.json();

//       this.setState({
//         page: this.state.page + 1,
//         articles: parseData.articles,
//         loading: false,
//       });
//     }
this.setState({
  page: this.state.page + 1
});
this.update();
  };
  render() {
    const { articles } = this.state;
    return (
      <>
        {" "}
        <div className="container my-3 ">
          <h1 className=" text-center bg-primary text-light">Sandesh</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              articles &&
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
          <div
            className=" d-flex justify-content-between"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-danger"
              onClick={this.handleOnPrev}
            >
              ←Previous
            </button>
            <button
              disabled={
                articles &&
                Math.ceil(
                  this.state.page + 1 >
                    this.state.totalResults / this.props.pageSize
                )
              }
              type="button"
              className="btn btn-success"
              onClick={this.handleOnNext}
            >
              Next→
            </button>
          </div>
        </div>{" "}
      </>
    );
  }
}
export default News;
// render() {
//   const { articles } = this.state;
//   const pageSize = 21; // Assuming the page size is fixed

//   return (
//     <div className="container my-3">
//       <h1>Sandesh</h1 >
//       <div className="row">         {articles && articles.map((element) => (
//      <div key={element.url} className="col-md-4">             <NewsItem
// title={element.title} description={element.description}
// imageurl={element.urlToImage} urlId={element.url}/>           </div> ))}
// </div>       <div className="d-flex justify-content-between" role="group"
// aria-label="Basic mixed styles example">         <button
// disabled={this.state.page <= 1} type="button" className="btn btn-danger"
// onClick={this.handleOnPrev}>←Previous</button>         <button
// disabled={articles.length < pageSize} type="button" className="btn
// btn-success" onClick={this.handleOnNext}>Next→</button>       </div> </div>
// ); } } export default News
