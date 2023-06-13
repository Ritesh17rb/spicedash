import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

// import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been enabled', "success");

      document.title = 'TextUtils-Dark Mode';



      //  setInterval(() => {

      //   document.title='TextUtils-is Amazing';

      //  }, 2000);

      //  setInterval(() => {

      //   document.title='Install TextUtils Now';

      //  }, 1500);



    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');

      document.title = 'TextUtils-Light Mode';

    }
  }
  return (
    // <Router>
    <>
      <Navbar title="To Do List" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">



        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text" mode={mode} />} />
        </Routes> */}

   


        {/* <Switch>

          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter The Text" mode={mode} />

          {/* </Route>
          
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> */}
       

      </div>
    {/* </Router> */}
    </>
  );
}

export default App;