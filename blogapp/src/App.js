
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './ui-components/Login';
import Signup from './ui-components/Signup';
import Main from './ui-components/Main';
import Addpost from './elements/Addpost';
import Viewall from './elements/Viewall';
import Myprofile from './elements/Myprofile';
import { useState } from 'react';
import { Requireauth } from './Auth';
import { Logout } from './Logout';

function App() {

  return (
    <div className="App">
      <Routes>
      
      <Route path = '/' element={<Login/>}></Route>
      <Route path = '/sign' element={<Signup/>}></Route>
      <Route path = '/Logout' element={<Logout/>}></Route>
      <Route path = '/addpost' element={<Requireauth><Main child ={<Addpost/>}/></Requireauth>}></Route> 
      <Route path = '/viewall' element={<Requireauth><Main child ={<Viewall/>}/></Requireauth>}></Route>
      <Route path = '/myprofile' element={<Requireauth><Main child ={<Myprofile/>}/></Requireauth>}></Route>
      <Route path = '/' element={<Main child ={<Login/>}/>}></Route>
    </Routes>
  
      
    </div>
  );
}

export default App;
