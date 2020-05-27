import React,{ useEffect, useState } from 'react';
import './App.css';
import Global from './components/Global';
import axios from 'axios';
import Local from './components/Local';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigator from './components/Navigator';
import Pills from './components/Pills';

const App = () => {

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
        <Navigator/>
        <Pills latest={latest}/>
    </div>
  );
}

export default App;
