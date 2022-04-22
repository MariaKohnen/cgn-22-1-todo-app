import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Title from "./components/Title";

export default function App() {
  return (
    <BrowserRouter>
      <Title />
      <Routes>
        <Route path={"/"} element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  );
}
