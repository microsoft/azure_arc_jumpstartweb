import "./BreadCrumbItemStateHover.css";

const BreadCrumbItemStateHover = ({ state = "rest", ...props }) => {
  return (
    <div className="menu-item-state-hover">
      <div className="menu-item-state-hover-breadcrumb">Breadcrumb </div>
    </div>
  );
};

export default BreadCrumbItemStateHover;


