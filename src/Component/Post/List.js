import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import {ListDiv,ListItem} from "../../Style/ListCSS.js"
import axios from 'axios';


function List(){ 
  const [PostList, setPostList] = useState([]);
  useEffect(()=>{
   axios
    .post("/api/post/list")
    .then((response) => {
        if(response.data.success){
           setPostList([...response.data.postList])
        }
    }).catch((err)=>{
        console.log(err);
    })
},[]);

    return(
        <ListDiv>
          <h3>List</h3>
           {PostList.map((a,idx)=>{
            return (
            <ListItem key={idx}>
            <Link to = {`/post/${a.postNum}`}>
            <p>번호 : {a.postNum}</p>
            <p className="title">{a.title}</p>
            <p>{a.content}</p>
            </Link>
        
            </ListItem>)
        })}
        
        </ListDiv>
 
       
    
)
}

export default List;