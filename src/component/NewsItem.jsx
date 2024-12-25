import React from "react";
// import sandeshLogo from "../../src/assets/sandeshLogo.png";
import sandeshLogo from "..//assets/Sandeshbanner.png";
const NewsItem = (props) => {
  let { title, description, imageurl, urlId, date, author, source } = props;
  const newsStyle = {
    backgroundColor: props.mode === "dark" ? "#28292a" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  console.log(props.title, props.description, props.imageurl);

  return (
    <div className="card-deck my-3 ">
      <a href={urlId} target="_blank" rel="noreferrer">
        <div
          className="card card-deck"
          style={{ height: "700px", ...newsStyle }}
        >
          <span
            className="position-absolute center-100 translate-middle badge  "
            style={{
              left: "50%",
              top: "10px",
              width: "100%",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              backgroundColor: props.mode === "light" ? "black" : "white",
              color: props.mode === "dark" ? "black" : "white",
            }}>
            {source}{" "}
          </span>
          <img
            src={ imageurl == "default-image-url.jpg" ? sandeshLogo : sandeshLogo && imageurl ? imageurl : sandeshLogo}
            className="card-img-top"
            style={{ height: "300px" }}
            alt="..."/>
          <div
            className="card-body"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#28292a",
            }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="card-muted" style={{ color: "red" }}>By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              href={urlId}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};
export default NewsItem;
