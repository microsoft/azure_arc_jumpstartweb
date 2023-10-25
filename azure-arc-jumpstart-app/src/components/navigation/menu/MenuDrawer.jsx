import React, { useEffect, useState } from "react";
import "./MenuDrawer.css";
import MenuCard from "./MenuCard";
import SubMenuItem from "./SubMenuItem";
import { Link } from "react-router-dom";

const MenuDrawer = ({ menuItem, setSelectedMenuItem }) => {
  const [subMenuItems, setSubMenuItems] = useState([]);
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState(null);
  const [selectedMenuCard, setSelectedMenuCard] = useState(null);

  useEffect(() => {
    if (menuItem && menuItem.Items && menuItem.Items.length > 0) {
      setSubMenuItems(menuItem.Items);
      setSelectedSubMenuItem(menuItem.Items[0]);
      setSelectedMenuCard(null);
    } else {
      setSubMenuItems([]);
      setSelectedSubMenuItem(null);
      setSelectedMenuCard(null);
    }
  }, [menuItem]);

  const handleOnClick = (menuItem) => {
    setSelectedSubMenuItem(menuItem);
    setSelectedMenuCard(null);
  };

  const handleOnClickMenuCard = (menuItem) => {
    setSelectedMenuCard((prev) => {
      if (prev !== menuItem && menuItem.hasOwnProperty("Link")) {
        return menuItem;
      }
      return null;
    });
  };

  return (
    <div className="frame-2018775984" onMouseLeave={()=> setSelectedMenuItem(null)}>
      <div className="sub-menu">
        <div className="sub-menu-body">
          {
            subMenuItems.map((subMenuItem, index) => {
              return (
                <SubMenuItem
                  isSelected={selectedSubMenuItem === subMenuItem}
                  onClick={() => handleOnClick(subMenuItem)}
                >
                  {subMenuItem.Title}
                </SubMenuItem>
              )
            })
          }
        </div>
      </div>
      <div className="frame-2018775955">
        <div className="frame-2018775954">
          {
            selectedSubMenuItem && (
              <>
                <div className="frame-59895">
                  <div className="overview3">
                    {selectedSubMenuItem.Title}
                  </div>
                  <div className="view-all">View all </div>
                </div>
                <div className="description">
                  {selectedSubMenuItem.Description}
                </div>
              </>
            )
          }
        </div>
        <div className="frame-59653">
          <div className="row-1">
            {
              selectedSubMenuItem && selectedSubMenuItem.Items
                .filter((item) => item.hasOwnProperty('Link'))
                .map((item, index) => {
                  return (
                    <Link to={item.Link} onClick={() => setSelectedMenuItem(null)}>
                      <MenuCard
                        item={item}
                        selectedMenuCard={selectedMenuCard}
                        setSelectedMenuCard={handleOnClickMenuCard}
                      >
                        {item.Description}
                      </MenuCard>
                    </Link>
                  )
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;


