import React from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import BreadcrumbBar from './components/navigation/breadcrumbs/BreadcrumbBar';
import MenuDrawer from './components/navigation/menu/MenuDrawer';

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);

  return (
    <>
      <NavBar selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
      {
        selectedMenuItem ? (
          <MenuDrawer selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
        ) : (
          <BreadcrumbBar />
          
        )
      }
    </>
  );
}

export default App;
