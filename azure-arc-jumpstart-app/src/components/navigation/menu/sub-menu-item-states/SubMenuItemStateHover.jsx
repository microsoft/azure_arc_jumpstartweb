import "./SubMenuItemStateHover.css";

const SubMenuItemStateHover = ({ state = "rest", ...props }) => {
  return (
    <div className="sub-menu-item-state-hover">
      <div className="sub-menu-item-state-hover-overview">Overview </div>
    </div>
  );
};

export default SubMenuItemStateHover;


