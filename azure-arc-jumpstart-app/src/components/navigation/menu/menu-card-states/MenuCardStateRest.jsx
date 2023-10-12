import "./MenuCardStateRest.css";

const MenuCardStateRest = ({ state = "rest", ...props }) => {
  return (
    <div className="menu-card-state-rest">
      <div className="menu-card-state-rest-card">
        <div className="menu-card-state-rest-header">
          <div className="menu-card-state-rest-text">
            <div className="menu-card-state-rest-object-counting">Object Counting </div>
          </div>
        </div>
        <div className="menu-card-state-rest-detect-and-count-objects-or-people">
          Detect and count objects or people.{" "}
        </div>
      </div>
    </div>
  );
}

export default MenuCardStateRest;


