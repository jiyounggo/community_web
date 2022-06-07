import './App.css';
import React,{useState} from "react";
import { Routes,Route,Link} from 'react-router-dom';

import Heading from './Component/Heading';
import List from './Component/List';
import Upload from './Component/Upload';


function App() {
  const [ContentList, setContentList] = useState([]);

  return(
    <div>
    <Heading/>
    <Routes>
       <Route path="/list" element={ <List contentList={ContentList} setContentList={setContentList}/>}/>
       <Route path="/upload" element={ <Upload  contentList={ContentList} setContentList={setContentList}/>}/> 
    </Routes>
    </div>
  )
}

export default App;
