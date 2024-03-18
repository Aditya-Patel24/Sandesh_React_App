import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  ref = React.createRef();
  pageSize=6;
  // apikey="6f85f05fc3bc4327aafba7c1e0f7041d"
 
  
  state={progress:0}
  setProgress=(progress)=>{
    this.setState({progress:progress})}
  render() {
    return (
      <div style={{backgroundColor:"rgb(188 223 255)"}}>    
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar/>
          <Routes>
              <Route path="/" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="home" pageSize={this.pageSize}  category="general" />} />
              <Route path="/business" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize}  category="business"/>}/>
              <Route path="/entertainment" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize}  category="entertainment"/>}/>
              <Route path="/general" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize}  category="general"/>}/>
              <Route path="/health" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize}  category="health"/>}/>
              <Route path="/science" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize}  category="science"/>}/>
              <Route path="/sports" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize}  category="sports"/>}/>
              <Route path="/technology" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize}  category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )/*  */
  }
}
