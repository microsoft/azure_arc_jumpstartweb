import "./SubMenuItemStateRest.css";

const SubMenuItemStateRest = ({ state = "rest", ...props }) => {
  return (
    <div className="sub-menu-item-state-rest">
      <div className="sub-menu-item-state-rest-overview">Overview </div>
    </div>
  );
};

export default SubMenuItemStateRest;

