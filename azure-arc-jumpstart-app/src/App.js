import React from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import BreadcrumbBar from './components/navigation/breadcrumbs/BreadcrumbBar';
// import { Container } from './components/Container';
const App = () => {
  return (
    <>
      <NavBar />
      <BreadcrumbBar />
    </>
  );
}

export default App;
