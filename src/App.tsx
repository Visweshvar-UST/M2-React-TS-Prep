import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

interface Sales {
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

  const res = data.reduce((max, obj)=> (max.amount<obj.amount)?obj:max,data[0]);

return (
    <div className="App">
      <h1>total transaction</h1> {data.reduce((acc, data)=> (acc+data.amount),0)}
      <h1>total transaction in cash</h1> {data.filter((obj) => obj.cash).reduce((acc, data) => (acc + data.amount), 0)}
      <h1>total transaction in credit</h1> {data.filter((obj) => !obj.cash).reduce((acc, data) => (acc + data.amount), 0)}
      <h1>maximum transaction</h1> {res && (<p>{res.name}{res.amount}</p>)}
    </div>
  );
}

export default App;
