import "./BreadcrumbItemStateFocused.css";

const BreadCrumbItemStateFocused = ({ children }) => {
  return (
    <div className="breadcrumb-item-state-focused">
      <div className="breadcrumb-item-state-focused-breadcrumb"> 
        {children}
      </div>
    </div>
  );
};

export default BreadCrumbItemStateFocused;

