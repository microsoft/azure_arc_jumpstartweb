import "./BreadCrumbItemStatePressed.css";

const BreadCrumbItemStatePressed = ({ state = "rest", ...props }) => {
  return (
    <div className="breadcrumb-item-state-pressed">
      <div className="breadcrumb-item-state-pressed-breadcrumb">Breadcrumb </div>
    </div>
  );
};

export default BreadCrumbItemStatePressed;


