import "./BreadcrumbItemStatePressed.css";

const BreadCrumbItemStatePressed = ({ children }) => {
  return (
    <div className="breadcrumb-item-state-pressed">
      <div className="breadcrumb-item-state-pressed-breadcrumb"> 
        {children}
      </div>
    </div>
  );
};

export default BreadCrumbItemStatePressed;


