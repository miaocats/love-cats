import React, {useState} from 'react';
import FirstPages from "./components/FirstPages";
import CatHeader from "./components/CatHeader";
import './App.css';

function App() {
    const [catType,setCatType]=useState();
    const handleChange=(e)=>{
       setCatType(e);
       // console.log(e);

    };
  return (
    <div className="App">
    <CatHeader clicks={handleChange}/>
      <FirstPages catTypes={catType}/>
      <p>If you wanna more cats imgs just reflash this pages</p>
    </div>
  );
}

export default App;
