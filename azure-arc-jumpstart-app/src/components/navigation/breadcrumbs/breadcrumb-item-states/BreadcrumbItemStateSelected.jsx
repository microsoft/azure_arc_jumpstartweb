import "./BreadCrumbItemStateSelected.css";

const BreadCrumbItemStateSelected = ({ state = "rest", ...props }) => {
  return (
    <div className="breadcrumb-item-state-selected">
      <div className="breadcrumb-item-state-selected-breadcrumb">Breadcrumb </div>
    </div>
  );
};

export default BreadCrumbItemStateSelected;

