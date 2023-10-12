import './BreadcrumbItem.css';

const BreadcrumbItem = ({ children, current }) => {
    return (
        <>
            {
                current ? (
                    <div className="breadcrumb-item">
                        <div className="breadcrumb2">
                            {children}
                        </div>
                    </div>
                ) : (
                    <div className="breadcrumb-item">
                        <div className="breadcrumb">
                            {children}
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default BreadcrumbItem;
