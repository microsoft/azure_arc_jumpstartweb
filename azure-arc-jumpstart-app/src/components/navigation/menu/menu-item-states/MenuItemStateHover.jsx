import "./MenuItemStateHover.css";

const MenuItemStateHover = ({
  showIcon = true,
  state = "rest",
  action = "closed",
  tab = "getting-started",
  ...props
}) => {
  return (
    <div className="menu-item-state-hover">
      <div className="menu-item-state-hover-frame-59941">
        <div className="menu-item-state-hover-solutions">Solutions </div>
        <svg
          className="menu-item-state-hover-chevron"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.50484 5.66255C2.73265 5.43475 3.10199 5.43475 3.3298 5.66255L7.00065 9.33342L10.6715 5.66255C10.8993 5.43475 11.2687 5.43475 11.4965 5.66255C11.7243 5.89036 11.7243 6.2597 11.4965 6.48751L7.41313 10.5708C7.18533 10.7986 6.81597 10.7986 6.58818 10.5708L2.50484 6.48751C2.27703 6.2597 2.27703 5.89036 2.50484 5.66255Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default MenuItemStateHover;


