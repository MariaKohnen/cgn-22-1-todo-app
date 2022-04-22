import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <h1>Hier kommt der Titel</h1>
      <Routes>
        <Route path={"/"} element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  );
}
