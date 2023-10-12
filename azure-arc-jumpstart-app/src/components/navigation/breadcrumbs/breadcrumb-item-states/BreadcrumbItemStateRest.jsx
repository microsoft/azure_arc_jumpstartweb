import "./BreadCrumbItemStateRest.css";

const BreadCrumbItemStateRest = ({ state = "rest", ...props }) => {
  return (
    <div className="breadcrumb-item-state-rest">
      <div className="breadcrumb-item-state-rest-breadcrumb">Breadcrumb </div>
    </div>
  );
};

export default BreadCrumbItemStateRest;


