import React from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import BreadcrumbBar from './components/navigation/breadcrumbs/BreadcrumbBar';
import MenuDrawer from './components/navigation/menu/MenuDrawer';
import Dropdown from './components/navigation/dropdown/Dropdown';

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);
  const [selectedMenuCard, setSelectedMenuCard] = React.useState(null);

  return (
    <>
      <NavBar selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
      {
        selectedMenuItem ? (
          <MenuDrawer selectedMenuCard={selectedMenuCard} setSelectedMenuCard={setSelectedMenuCard} />
        ) : (
          <>
            <BreadcrumbBar />
            <Dropdown>Jump to section</Dropdown>
          </>
        )
      }
    </>
  );
}

export default App;
