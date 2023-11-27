import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, useOutletContext } from 'react-router-dom';

const App:React.FC = () => {
  return (
    <Outlet />
  );
}

export default App;
