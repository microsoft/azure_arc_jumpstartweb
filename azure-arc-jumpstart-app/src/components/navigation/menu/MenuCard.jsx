import './MenuCard.css';

const MenuCard = ({label, children}) => {
    return (
        <div className="menu-card-state-rest">
            <div className="menu-card-state-rest-card">
                <div className="menu-card-state-rest-header">
                    <div className="menu-card-state-rest-text">
                        <div className="menu-card-state-rest-object-counting">
                             {label}
                        </div>
                    </div>
                </div>
                <div className="menu-card-state-rest-detect-and-count-objects-or-people">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
