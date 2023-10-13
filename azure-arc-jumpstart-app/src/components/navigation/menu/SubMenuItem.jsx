import "./SubMenuItem.css";

const SubMenuItem = ({ children, isSelected, onClick }) => {
    return (
        <div className={isSelected ? "sub-menu-item-selected" : "sub-menu-item"} onClick={onClick}>
            {
                isSelected && <div className="sub-menu-tab-line"></div>
            }
            <div className={isSelected ? "sub-menu-item-overview-selected" : "sub-menu-item-overview"}>
                {children}
            </div>
        </div>
    );
};

export default SubMenuItem;

