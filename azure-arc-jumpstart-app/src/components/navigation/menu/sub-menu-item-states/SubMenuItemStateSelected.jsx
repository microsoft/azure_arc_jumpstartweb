import "./SubMenuItemStateSelected.css";

const SubMenuItemStateSelected = ({ state = "rest", ...props }) => {
  return (
    <div className="sub-menu-item-state-selected">
      <div className="sub-menu-item-state-selected-overview">Overview </div>
    </div>
  );
};

export default SubMenuItemStateSelected;