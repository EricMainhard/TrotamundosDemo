import './App.css';
import React from 'react';
import {BrowserRouter as Router, 
  Routes,
  Link,
  Route
 } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NotFound from './Components/NotFound/NotFound.jsx';


function App() {
  const user = false;
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/post/:id" element={<Single />}/>
        <Route path="/write" element={user ? <Write /> : <Login/>}/>
        <Route path="/settings" element={user ?<Settings /> : <Login/>}/>
        <Route path="/register" element={user ? <Home/> : <Register />}/>
        <Route path="/login" element={user ? <Home/> : <Login />}/>
        <Route path="*"element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
