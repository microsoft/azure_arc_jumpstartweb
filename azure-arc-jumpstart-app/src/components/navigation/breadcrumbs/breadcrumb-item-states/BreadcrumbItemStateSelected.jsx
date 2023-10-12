import "./BreadcrumbItemStateSelected.css";

const BreadCrumbItemStateSelected = ({ children }) => {
  return (
    <div className="breadcrumb-item-state-selected">
      <div className="breadcrumb-item-state-selected-breadcrumb"> 
        {children}
      </div>
    </div>
  );
};

export default BreadCrumbItemStateSelected;

