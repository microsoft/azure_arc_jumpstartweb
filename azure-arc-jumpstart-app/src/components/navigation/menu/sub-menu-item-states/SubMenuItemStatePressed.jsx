import "./SubMenuItemStatePressed.css";

const SubMenuItemStatePressed = ({ state = "rest", ...props }) => {
  return (
    <div className="sub-menu-item-state-pressed">
      <div className="sub-menu-item-state-pressed-overview">Overview </div>
    </div>
  );
};

export default SubMenuItemStatePressed;

