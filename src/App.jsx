import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import { useState } from 'react';
import AppContext from './context/AppContext';

function App() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });
    const [selectedGenres, setSelectedGenres] = useState();

  return (
    <>
    <AppContext.Provider value = {{user, setUser, selectedGenres, setSelectedGenres}} >
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RegisterPage/>} />
            <Route path='/home' element={<RegisterPage/>} />
            <Route path='/dashboard' element={<RegisterPage/>} />
            <Route path='/genres' element={<RegisterPage/>} />
            <Route path='/carousel' element={<RegisterPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </BrowserRouter>
    </AppContext.Provider>
    </>
  )
}

export default App
