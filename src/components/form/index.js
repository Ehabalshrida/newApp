import React, { useState,useEffect } from 'react';

import './form.scss';


export default  function Form(props)  {

  const[url,setUrl]=useState("")
  const[methode,setMethode]=useState("DELETE")
  const[textArea,setTextArea]=useState(false)
  const[request,setRequest]=useState("")
  
  const colors = {
    Sea: '#a2ccb6',
    Sand: '#fceeb5',
    Peach: '#ee786e',
  }
  const [color,setColor]=useState(colors.Sea);



  const handleSubmit = e => {
    e.preventDefault();
    const result={
      request:request,
    formData :{
      method:methode,
      url:url,
    }};
    props.handleApiCall(result.formData);
  }
  
  const URLHandler = (e) => {
    setUrl(e.target.value);

  };

  const methodeHandler = (e) => {
    setMethode(e.target.id);
    setTextArea(false);
    setColor('#fceeb5');
  };

  const textAreaHandler = (e) => {
    setTextArea(true);
    setMethode(e.target.id);
    setColor('#fceeb5');

  };

  const requestHandler = (e) => {
    setRequest(e.target.value);

  };
  


  useEffect(
    () => {
      document.getElementById('GET').style.background=colors.Sea;
      document.getElementById('POST').style.background=colors.Sea;
      document.getElementById('PUT').style.background=colors.Sea;
      document.getElementById('DELETE').style.background=colors.Sea;
      let v = document.getElementById(`${methode}`);
      v.style.background=color;
    },
    [methode]
  )
  
    return (
      <>
        <form onSubmit={handleSubmit}>s
          <label >
            <span>URL: </span>
            <input name='url' type='text'onChange={URLHandler}  />
            <button data-testid="submit" type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="GET" onClick={methodeHandler}>GET</span>
            <span id="POST"onClick={textAreaHandler}>POST</span>
            <span id="PUT"onClick={textAreaHandler}>PUT</span>
            <span id="DELETE"onClick={methodeHandler}>DELETE</span>
          </label>
          {textArea && (
          <textarea rows="15" cols="35" onChange={requestHandler}></textarea>)}
        </form>
      </>
    );
  
}
