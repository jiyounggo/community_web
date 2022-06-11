import React , {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import axios from 'axios';

import {Spinner} from "react-bootstrap";
import { PostDiv, Post, BtnDiv, SpinnerDiv } from "../../Style/PostDetailCSS.js";

function Detail() {
    let params = useParams();
    const [PostInfo, setPostInfo] =useState({})
    const [Flag, setFlag] = useState(false)
    useEffect(()=>{
        let body={
            postNum : params.postNum,
        }
       axios
       .post("/api/post/detail" ,body)
       .then((response)=>{
         if(response.data.success){
          setPostInfo(response.data.post);
          setFlag(true)
         }  
       })
       .catch((err)=>{
        console.log(err) ;
       })
    },[])
    useEffect(()=>{
      console.log(PostInfo);
    },[PostInfo])
  return (
    <PostDiv>
      {Flag ? (
        <div>
        <Post>
        <p>{PostInfo.postNum}</p>
        <h1>{PostInfo.title}</h1>
        <h2>{PostInfo.content}</h2>
        </Post>
        <BtnDiv>
          <Link to={`/edit/${PostInfo.postNum}`}><button className="edit">수정</button></Link>
          <button className="delete">삭제</button>
        </BtnDiv>
        </div>
        ):(
      <SpinnerDiv>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
       </Spinner>
      </SpinnerDiv>
      )}
      
      </PostDiv>
    )
        }
   
export default Detail