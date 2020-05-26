import React,{ useEffect, useState } from 'react';
import './App.css';
import Global from './components/Global';
import axios from 'axios';

function App() {

  const[latest, setLatest] = useState("");

  useEffect(()=>{
    axios
      .get("https://hpb.health.gov.lk/api/get-current-statistical")
      .then(res=>{
        setLatest(res.data);
      })
      .catch(err=>{
        console.log(err);
      });
  }, []);

  return(
    <div className="App">
        <Global latest={latest}/>
    </div>
  );
}

export default App;
