import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textfom";
// import Footer from './components/Footer';
import React, { useState } from "react";
import Alert from "./components/Alert";
import Bodycolor from "./components/Bodycolor";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const darkmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#042743";
      showalert("Dark mode has enabled", "success:");
    } else {
      setmode("light");
      document.body.style.background = "white";
      showalert("Light mode has enabled", "success:");
    }
  };
  const showalert = (messeage, type) => {
    setAlert({
      msg: messeage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (

    <Router>
    <div>

<Navbar
        title="Textutils"
        mode={mode}
        darkmode={darkmode}
      ></Navbar>
      <Alert alert={alert}></Alert>

      {/* <Navbar title="MY app" aboutText="About us" home="Ghar"></Navbar> */}
    
        <Routes>

          <Route path="/bodycolor" element={ <Bodycolor mode={mode}></Bodycolor>}>
           
          </Route>

          <Route path="/" element={ <Textform
              heading="Textutils-word counter,character counter,remove extre space"
              mode={mode}
              showalert={showalert}
            ></Textform>}>
           
          </Route>
        </Routes>
      
     
    </div>
    </Router>
  );
}

export default App;
