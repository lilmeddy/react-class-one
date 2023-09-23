import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import App from './App';
import First  from './First';
import About  from './About';
import NotFound  from './NotFound';
import Datatypes from './Datatypes';
import Button from './Button';
import User from './User';
import Validate from './Validate';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import InfoNeeded from './StateLifting/InfoNeeded';
import Fetch from './UseEffect/Fetch';
import Signup from './Validation/Signup';
import Signin from './Validation/Signin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav/>
    <Routes>
      
      <Route path='/' element={<App/>}/>
      <Route path='/dashboard' element={<Button/>}/>
      <Route path='/home' element={<Navigate to ="/"></Navigate>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/first' element={<First/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/validate' element={<Validate/>}/>
      <Route path='/stateLifting' element={<InfoNeeded/>}/>
      <Route path='/useEffect' element={<Fetch/>}/>
      <Route path='/signup' element={<Signup />} />
       <Route path='/signin' element={<Signin />} />
      <Route path='/datatypes' element={<Datatypes/>}/>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
     {/* <First/> */}

    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
