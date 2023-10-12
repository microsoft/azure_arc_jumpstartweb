import "./MenuCardStateSelected.css";

const MenuCardStateSelected = ({ state = "rest", ...props }) => {
  return (
    <div className="menu-card-state-selected">
      <div className="menu-card-state-selected-glow"></div>
      <div className="menu-card-state-selected-card">
        <div className="menu-card-state-selected-header">
          <div className="menu-card-state-selected-text">
            <div className="menu-card-state-selected-object-counting">Object Counting </div>
          </div>
        </div>
        <div className="menu-card-state-selected-detect-and-count-objects-or-people">
          Detect and count objects or people.{" "}
        </div>
      </div>
    </div>
  );
};

export default MenuCardStateSelected;


