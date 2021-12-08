
import React from 'react'

function History(props) {
   function viewResults(a,b){
       let result={
        method:a,
        url:b,
           
       }
         props.historyfunc(result);
    }
    
    return (
        <div>
            <ul>
               {props.history.map((item,index)=>{
                   console.log(item)
                   return(<li key={index} onClick={()=>{viewResults(item.method,item.url)}}>{item.method} {item.url}</li>)
               })} 
            </ul>
        </div>
    )
}
export default History