import "./BreadcrumbItemStateRest.css";

const BreadcrumbItemStateRest = ({ children, selected }) => {
  return (
    <div className="breadcrumb-item-state-rest">
      <div className="breadcrumb-item-state-rest-breadcrumb">
        {children}
      </div>
    </div>
  );
};

export default BreadcrumbItemStateRest;


