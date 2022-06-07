import React,{useState , useEffect} from "react";


function List(props){
 
    return(
        <div>
            <h3>List</h3>
           {props.contentList.map((content,idx)=>{
            return (<div 
            key={idx}
             style={{ width:"100%",
             marginLeft:"1rem"}}
             >내용{content}
            <hr/>
            </div>)
        })}
        </div>
 
       
    
)
}

export default List;