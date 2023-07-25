import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null); 

  const showAlert = (message,type)=>{
      setAlert({
        message: message,
        type: type,
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  const colorMode = (cls)=>{
    if(mode === 'dark'){
      showAlert("Disable Dark Mode First","warning");
    }
    else{
      removeBodyClasses();
      document.body.classList.add('bg-'+cls);
      showAlert("Color Mode has been Enabled","success");
    }
  }
  const toggleMode = ()=>{
    removeBodyClasses();
    if(mode !=='dark'){
      setMode('dark');
      document.body.style.backgroundColor='#050627';
      document.body.style.color='white';
      showAlert("Dark Mode has been Enabled","success");
    }
    else if(mode !=='light'){
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode has been Enabled","success");
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title="ContentServes" aboutText="About Us" mode={mode} toggleMode={toggleMode} colorMode={colorMode}/>
    <Alert alert={alert}/>
    <div className="container my=8">
      {/* <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <TextArea showAlert={showAlert} heading="Enter The Text to Analyze and Manipulate"/>
        </Route>
      </Switch> */}
      <TextArea showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
