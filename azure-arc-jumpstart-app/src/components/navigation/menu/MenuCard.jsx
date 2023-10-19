import './MenuCard.css';

const MenuCard = ({item, children, selectedMenuCard, setSelectedMenuCard}) => {
    return (
        <div className={selectedMenuCard === item ? "menu-card-selected" : "menu-card"} onClick={() => setSelectedMenuCard(item)}>
            <div className={selectedMenuCard === item ? "menu-card-card-selected" : "menu-card-card"}>
                <div className={selectedMenuCard === item ? "menu-card-header-selected" : "menu-card-header"}>
                    <div className={selectedMenuCard === item ? "menu-card-text-selected" : "menu-card-text"}>
                        <div className={selectedMenuCard === item ? "menu-card-object-counting-selected" : "menu-card-object-counting"}>
                             {item.Title}
                        </div>
                    </div>
                </div>
                <div className={selectedMenuCard === item ? "menu-card-detect-and-count-objects-or-people-selected" : "menu-card-detect-and-count-objects-or-people"}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
