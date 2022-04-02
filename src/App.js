import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Profile from './Components/Profile';

import { Navigate, Route, Routes } from 'react-router-dom';
import Users from './Components/Users';
import Posts from './Components/Posts';
import Footer from './Components/Footer';
import Login from './Components/login/Login';
import Error from './Components/Error';
import Details from "./Components/Details"
import { useState } from 'react';
function App() {
  let [body, setBody] = useState("");
  let [title, setTitle] = useState("");

  let onBody = (data) => {
    setBody(data);
  }

  let onTitle = (tData) => {
    setTitle(tData);
  }
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<Posts onBody={onBody} onTitle={onTitle} />} />
        <Route path='/posts/:id' element={<Posts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details body={body} title={title} />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>


  );
}

export default App;
