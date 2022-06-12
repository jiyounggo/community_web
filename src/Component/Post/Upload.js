import React,{useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import {UploadDiv,UploadForm,UploadButtonDiv} from "../../Style/UploadCSS.js"
import axios from "axios"
function Upload(props){
    const [Title, setTitle] = useState("");
    const [content,setContent] = useState("");
    const [Image,setImage] = useState("");
    let navigate = useNavigate();

    const onSubmit =(e)=>{
        e.preventDefault();
        if(Title === "" || content ===""){
            return alert("모든항목을 채워주세욤!");
        }
        let body = {
            title : Title,
            content :content,
            image:Image,
        }
        axios.post("/api/post/submit", body)
        .then((response)=>{
            if(response.data.success){
                alert("글작성이 완료 되었습니다")
                navigate("/")
            }else{
                alert("글작성이 실패 하였습니다")
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    };
    return(
        <UploadDiv>
            <UploadForm>
            <label htmlFor="">제목</label>
            <input
                id="title"
                type="text"
                value={Title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                    }}/>
            <ImageUpload setImage={setImage}/>
            <label htmlFor="">내용</label>
            <textarea
            value={content}
            onChange={(e)=>{
                setContent(e.target.value)
                }}
            />
            <UploadButtonDiv>
            <button
             onClick={(e)=>{
                {onSubmit(e)}
                }}>
            제출
            </button>
        </UploadButtonDiv>
        </UploadForm>
        </UploadDiv>
    )
}

export default Upload;