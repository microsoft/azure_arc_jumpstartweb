import './MenuCard.css';

const MenuCard = ({label, children, selectedMenuCard, setSelectedMenuCard}) => {
    return (
        <div className={selectedMenuCard === label ? "menu-card-selected" : "menu-card"} onClick={() => setSelectedMenuCard(label)}>
            <div className={selectedMenuCard === label ? "menu-card-card-selected" : "menu-card-card"}>
                <div className={selectedMenuCard === label ? "menu-card-header-selected" : "menu-card-header"}>
                    <div className={selectedMenuCard === label ? "menu-card-text-selected" : "menu-card-text"}>
                        <div className={selectedMenuCard === label ? "menu-card-object-counting-selected" : "menu-card-object-counting"}>
                             {label}
                        </div>
                    </div>
                </div>
                <div className={selectedMenuCard === label ? "menu-card-detect-and-count-objects-or-people-selected" : "menu-card-detect-and-count-objects-or-people"}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
