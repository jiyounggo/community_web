import React,{useState ,useEffect} from "react";

function Upload(props){
    const [content,setContent] = useState("");

    const onSubmit =()=>{
        let tempArr = [...props.contentList];
        tempArr.push(content);
        props.setContentList([...tempArr]);  
        setContent("");
    };

    return(
        <div>
         <input type="text" value={content}
         onChange={(e)=>setContent(e.target.value)} />
     
        <button 
        onClick={()=>{
            {onSubmit()}
        }}
        style={{marginTop:"1rem"}}>제출</button>
        </div>
    )
}

export default Upload;