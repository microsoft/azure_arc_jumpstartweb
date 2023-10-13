import "./BreadcrumbItemStateHover.css";

const BreadCrumbItemStateHover = ({ children }) => {
  return (
    <div className="breadcrumb-item-state-hover">
      <div className="breadcrumb-item-state-hover-breadcrumb"> 
        {children}
      </div>
    </div>
  );
};

export default BreadCrumbItemStateHover;


