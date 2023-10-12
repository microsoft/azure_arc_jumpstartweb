import "./SubMenuItemStateFocused.css";

const SubMenuItemStateFocused = ({ state = "rest", ...props }) => {
  return (
    <div className="sub-menu-item-state-focused">
      <div className="sub-menu-item-state-focused-overview">Overview </div>
    </div>
  );
};

export default SubMenuItemStateFocused;

