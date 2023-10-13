import "./MenuDrawer.css";
import MenuCard from "./MenuCard";

const MenuDrawer = ({ selectedMenuCard, setSelectedMenuCard }) => {
  return (
    <div className="frame-2018775984">
      <div className="sub-menu">
        <div className="tab-line"></div>
        <div className="sub-menu-body">
          <div className="sub-menu-items">
            <div className="overview">Overview </div>
          </div>
          <div className="sub-menu-items">
            <div className="overview2">Jumpstart Scenarios </div>
          </div>
          <div className="sub-menu-items">
            <div className="overview2">Additional resources </div>
          </div>
          <div className="sub-menu-items">
            <div className="overview2">About </div>
          </div>
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


