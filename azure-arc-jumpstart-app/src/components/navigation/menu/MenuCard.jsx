import './MenuCard.css';

const MenuCard = ({ ...props }) => {
    return (
        <div className={"menu-card-state-hover"}>
            <div className={"menu-card-glow"}></div>
            <div className={"menu-card"}>
                <div className={"menu-card-header"}>
                    <div className={"menu-card-text"}>
                        <div className={"menu-card-object-counting"}>Object Counting </div>
                    </div>
                </div>
                <div className={"menu-card-detect-and-count-objects-or-people"}>
                    Detect and count objects or people.{" "}
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
