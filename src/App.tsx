import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {calculateTotal,calculateTotalCash,calculateTotalCredit,GroupBuyer,maxBuyer} from './util'
import { Greet, ReactGreet } from './GreetProps';

export interface Sales {
  name: string,
  amount: number,
  cash: boolean
}


function App() {

  // const [data , setdata] = useState<Sales[]>([]);
  
  // // useEffect(()=>{},[]);
  // useEffect(()=>{
  //   (
  //     async ()=>{
  //       const result = await axios.get<Sales[]>('./sales.json');
  //       // await fetch('./sales.json').then(Response=>Response.json()).then(data=>setdata(data));
  //       console.log(result);
        
  //       setdata(result.data);
  //      }
  //   )();
  // },[]);






  const [data, setData] = useState<Sales[]>([]);

  useEffect(() => {
    (async()=>{
      const res = await axios.get<Sales[]>('./sales.json');
      console.log(res);
      setData(res.data);
    })();
  },[]);
  

return (
  <>
  <Greet name="viswa"/>
  <ReactGreet><Greet name="viswa"/></ReactGreet>
    <div className="App">
      <h1>total transaction</h1> {calculateTotal(data)}
      <h1>total transaction in cash</h1> {calculateTotalCash(data)}
      <h1>total transaction in credit</h1> {calculateTotalCredit(data)}
      <h1>maximum transaction</h1> {maxBuyer(data)}
      <h1>Group transaction</h1> {GroupBuyer(data)}
    </div>
  </>
  );
}

export default App;