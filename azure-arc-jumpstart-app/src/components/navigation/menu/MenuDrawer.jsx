import React, { useState } from "react";
import "./MenuDrawer.css";
import MenuCard from "./MenuCard";
import SubMenuItem from "./SubMenuItem";
import SubMenuItems from "../../../models/SubMenuItems";

const MenuDrawer = ({ selectedMenuCard, setSelectedMenuCard }) => {
  const [selectedSubMenuItem, setSelectedSubMenuItem] = React.useState(SubMenuItems.OVERVIEW);

  const handleOnClick = (subMenuItem) => {
    setSelectedSubMenuItem(selectedSubMenuItem === subMenuItem ? null : subMenuItem);
  };

  return (
    <div className="frame-2018775984">
      <div className="sub-menu">
        <div className="sub-menu-body">
          <SubMenuItem isSelected={selectedSubMenuItem === SubMenuItems.OVERVIEW} onClick={() => handleOnClick(SubMenuItems.OVERVIEW)}>
            {"Overview"}
          </SubMenuItem>
          <SubMenuItem isSelected={selectedSubMenuItem === SubMenuItems.JUMPSTART_SCENARIOS} onClick={() => handleOnClick(SubMenuItems.JUMPSTART_SCENARIOS)}>
            {"Jumpstart Scenarios"}
          </SubMenuItem>
          <SubMenuItem isSelected={selectedSubMenuItem === SubMenuItems.ADDITIONAL_RESOURCES} onClick={() => handleOnClick(SubMenuItems.ADDITIONAL_RESOURCES)}>
            {"Additional resources"}
          </SubMenuItem>
          <SubMenuItem isSelected={selectedSubMenuItem === SubMenuItems.ABOUT} onClick={() => handleOnClick(SubMenuItems.ABOUT)}>
            {"About"}
          </SubMenuItem>
        </div>
      </div>
      <div className="frame-2018775955">
        <div className="frame-2018775954">
          <div className="frame-59895">
            <div className="overview3">Overview </div>
            <div className="view-all">View all </div>
          </div>
          <div className="description">
            The goal of the repo is for you to have a working Azure Arc demo
            environment spun up in no-time so you can focus on playing, demoing,
            upskilling yourself and your team and see the core values of Azure
            Arc. Explore our different Jumpstart products.{" "}
          </div>
        </div>
        <div className="frame-59653">
          <div className="row-1">
            <MenuCard label="Jumpstart Solutions" selectedMenuCard={selectedMenuCard} setSelectedMenuCard={setSelectedMenuCard}>
              Accelerate your deployment with our Jumpstart solutions.
            </MenuCard>
            <MenuCard label="Jumpstart Agora" selectedMenuCard={selectedMenuCard} setSelectedMenuCard={setSelectedMenuCard}>
              Collection of industry verticals from cloud to edge scenarios.
            </MenuCard>
            <MenuCard label="Jumpstart ArcBox" selectedMenuCard={selectedMenuCard} setSelectedMenuCard={setSelectedMenuCard}>
              Explore Azure Arc capabilities with Azure Sandbox.
            </MenuCard>
            <MenuCard label="Jumpstart HCIBox" selectedMenuCard={selectedMenuCard} setSelectedMenuCard={setSelectedMenuCard}>
              Accelerate your deployment with our Jumpstart solutions.
            </MenuCard>
            <MenuCard label="Jumpstart Lightning" selectedMenuCard={selectedMenuCard} setSelectedMenuCard={setSelectedMenuCard}>
              Watch our show where people share their stories.
            </MenuCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;


