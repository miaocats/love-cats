import React, {useState} from 'react';
import FirstPages from "./components/FirstPages";
import CatHeader from "./components/CatHeader";
import './App.css';

function App() {
    const [catType,setCatType]=useState();
    const handleChange=(e)=>{
       setCatType(e);
        console.log(e);

    };
  return (
    <div className="App">
    <CatHeader clicks={handleChange}/>
      <FirstPages catTypes={catType}/>
    </div>
  );
}

export default App;
