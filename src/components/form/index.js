import React, { useState } from 'react';

import './form.scss';


export default  function Form(props)  {

  const[url,setUrl]=useState("")
  const[methode,setMethode]=useState("GET")
  const[textArea,setTextArea]=useState(false)
  const[request,setRequest]=useState("")



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
  };

  const textAreaHandler = (e) => {
    setTextArea(true);
    setMethode(e.target.id);
  };

  const requestHandler = (e) => {
    setRequest(e.target.value);
  };

  
    return (
      <>
        <form onSubmit={handleSubmit}>s
          <label >
            <span>URL: </span>
            <input name='url' type='text'onChange={URLHandler} />
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

