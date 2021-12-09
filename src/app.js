import React, { useState,  useReducer } from 'react';
import axios from 'axios';
import History from './components/history/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Spinner from 'react-bootstrap/Spinner';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results/index';
const initialState = [];

function reducer(history = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'AddToHistory':
      console.log(history);
      history = [...history, payload];
      return history;
    default:
      return history;
  }
}
function addToHistory(url, method, result) {

  return ({
    type: 'AddToHistory',
    payload: {
      url,
      method,
      result
    }
  })
}
export default function App(props) {

  const [data1, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});
  const [history, dispatch] = useReducer(reducer, initialState)
  const [loading, setloading] = useState(false);


  const callApi = (requestParams) => {
    setloading(true)
    console.log(loading, "hhhh")

    setTimeout(() => {
      axios(requestParams).then(res => {
        let newres = res.data;


        setdata(newres)
        console.log(newres)






        setrequestParams(requestParams)
        dispatch(addToHistory(requestParams.url, requestParams.method, data1));

      });
      setloading(false)

    }, 500);


    console.log(loading)

  }


  console.log(history);
  console.log(data1)

  return (
    <React.Fragment>

      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div data-testid="url">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {history && <History historyfunc={callApi} history={history} />}

      {loading && <>
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" /></>}
      <Results data={data1} />
      <Footer />
    </React.Fragment>
  );
}

