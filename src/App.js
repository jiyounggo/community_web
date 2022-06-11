import './App.css';
import React from "react";
import { Routes,Route,Link} from 'react-router-dom';

import Heading from './Component/Heading';
import List from './Component/Post/List';
import Upload from './Component/Post/Upload';
import Detail from './Component/Post/Detail';

function App() {
  return(
    <div>
    <Heading/>
    <Routes>
       <Route 
       path="/" 
       element={
          <List />}/>
       <Route 
       path="/upload" 
       element={ 
       <Upload  />}/> 
      <Route 
       path="/post/:postNum" 
       element={ 
       <Detail />}/> 
    </Routes>
    </div>
  )
}

export default App;
