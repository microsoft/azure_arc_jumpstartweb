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
            <span style={{ position: 'absolute', top: '48px', right: '71px'}}>
              <Dropdown>Jump to section</Dropdown>
            </span>
          </>
        )
      }
    </>
  );
}

export default App;
