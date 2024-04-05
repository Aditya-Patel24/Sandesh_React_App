import './App.css';
import React, { useState, useRef } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const ref = useRef();
  const pageSize = 6;
  // fc3bc4327aafba7c1e0f7041d"
  const [state, setState] = useState({progress: 0});

  const setProgress = (progress) => {
    setState({progress: progress});
  }
  
  return (
    <div style={{backgroundColor:"rgb(188 223 255)"}}>    
      <Router>
        <LoadingBar color='#f11946' progress={state.progress} />
        <Navbar/>
        <Routes>
            <Route path="/" element={<News  setProgress={setProgress}  key="home" pageSize={pageSize}  category="general"/>} />
            <Route path="/business" element={<News  setProgress={setProgress}  key="business" pageSize={pageSize}  category="business"/>}/>
            <Route path="/entertainment" element={<News  setProgress={setProgress}  key="entertainment" pageSize={pageSize}  category="entertainment"/>}/>
            <Route path="/general" element={<News  setProgress={setProgress}  key="general" pageSize={pageSize}  category="general"/>}/>
            <Route path="/health" element={<News  setProgress={setProgress}  key="health" pageSize={pageSize}  category="health"/>}/>
            <Route path="/science" element={<News  setProgress={setProgress}  key="science" pageSize={pageSize}  category="science"/>}/>
            <Route path="/sports" element={<News  setProgress={setProgress}  key="sports" pageSize={pageSize}  category="sports"/>}/>
            <Route path="/technology" element={<News  setProgress={setProgress}  key="technology" pageSize={pageSize}  category="technology"/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
