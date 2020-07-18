import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './Pages/Home'
import {PlantPage} from './Pages/PlantPage'
import {Header} from './Components/Header'
import Tabletop from 'tabletop';
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [plantsData, setPlantsData] = useState([]);
    useEffect(()=>{
        Tabletop.init({
            key: '1ebCYHung4m4wnVzKzxzyb-XTKvrimzYOPkz4FDp7GkQ',
            callback: googleData => {
                setPlantsData(googleData)
        },
        simpleSheet: true
        })
    }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home plantsData={plantsData}/>} />
        <Route path="/plantpage/:id" exact element={<PlantPage plantsData={plantsData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
