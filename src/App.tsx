import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {calculateTotal,calculateTotalCash,calculateTotalCredit,maxBuyer} from './util'

export interface Sales {
  name: string,
  amount: number,
  cash: boolean
}


function App() {

  const [data , setdata] = useState<Sales[]>([]);
  
  useEffect(()=>{
    (
      async ()=>{
        const result = await axios.get<Sales[]>('./sales.json');
        console.log(result);
        
        setdata(result.data);
      }
    )();
  },[]);

  

return (
    <div className="App">
      <h1>total transaction</h1> {calculateTotal(data)}
      <h1>total transaction in cash</h1> {calculateTotalCash(data)}
      <h1>total transaction in credit</h1> {calculateTotalCredit(data)}
      <h1>maximum transaction</h1> {maxBuyer(data)}
    </div>
  );
}

export default App;