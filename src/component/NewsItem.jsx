import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, urlId, date, author, source} = this.props;
    return (
      <div className="my-3">
        <div className="card ">
        <span className="position-absolute center-100 translate-middle badge bg-dark " style={{left:'50%',top:'10px',width:"100%",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px "}}>{source} </span>
          <img src={ imageurl ? imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0-82ELFvRIrelvLXTK7rKvja6eGcLn82vyqEO7Zpwg&s"}className="card-img-top"alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="card-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a href={urlId} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm" >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
