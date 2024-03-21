import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/main.css';
import HTMLComp from './HTMLComp';
import CSScomp from './CSSComp';
import JavaScriptComp from './JavaScriptComp';
import ReactComp from './ReactComp';
import SanityComp from './SanityComp';

function App() {
  return (
    <div>
      {/* Legg til header-komponenten din her hvis du har en */}
      <Routes>
        <Route path="/html" element={<HTMLComp />} />
        <Route path="/css" element={<CSScomp />} />
        <Route path="/javascript" element={<JavaScriptComp />} />
        <Route path="/react" element={<ReactComp />} />
        <Route path="/sanity" element={<SanityComp />} />
      </Routes>
      {/* Legg til footer- eller informasjonskomponenten din her hvis du har en */}
    </div>
  );
}

export default App;






