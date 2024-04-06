import React from "react";
const NewsItem = (props) => {
    let { title, description, imageurl, urlId, date, author, source} = props;
    const newsStyle = {
      backgroundColor: props.mode === 'dark' ? '#28292a' : "white",
      color: props.mode === 'dark' ? 'white' : 'black'
    };
  
    return (
      <div className="card-deck my-3" >
        <div className="card card-deck" style={{height:"700px", ...newsStyle}} >
        <span className="position-absolute center-100 translate-middle badge  " style={{left:'50%',top:'10px',width:"100%",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",backgroundColor: props.mode === "light" ? "black" : "white",color: props.mode === "dark" ? "black" : "white"}}>{source} </span>
          <img src={ imageurl ? imageurl: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="}className="card-img-top" style={{height:"300px"}} alt="..."/>
          <div className="card-body card-deck" >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="card-muted" style={{color :"red"}}>By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a href={urlId} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm" >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
export default NewsItem;