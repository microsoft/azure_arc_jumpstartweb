import "./MenuCardStateHover.css";

const MenuCardStateHover = ({ state = "rest", ...props }) => {
  return (
    <div className="menu-card-state-hover">
      <div className="menu-card-state-hover-glow"></div>
      <div className="menu-card-state-hover-card">
        <div className="menu-card-state-hover-header">
          <div className="menu-card-state-hover-text">
            <div className="menu-card-state-hover-object-counting">Object Counting </div>
          </div>
        </div>
        <div className="menu-card-state-hover-detect-and-count-objects-or-people">
          Detect and count objects or people.{" "}
        </div>
      </div>
    </div>
  );
};

export default MenuCardStateHover;

