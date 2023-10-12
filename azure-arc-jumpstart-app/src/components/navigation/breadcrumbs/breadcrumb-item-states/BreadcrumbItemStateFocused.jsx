import "./BreadCrumbItemStateFocused.css";

const BreadCrumbItemStateFocused = ({ state = "rest", ...props }) => {
  return (
    <div className="breadcrumb-item-state-focused">
      <div className="breadcrumb-item-state-focused-breadcrumb">Breadcrumb </div>
    </div>
  );
};

export default BreadCrumbItemStateFocused;

