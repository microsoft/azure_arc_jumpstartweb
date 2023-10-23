import "./MenuItemButtonCollapseSelected.css";

const MenuItemButtonCollapseSelected = ({
  state = "rest",
  type = "collapse",
  ...props
}) => {
  return (
    <div className="menu-item-button-collapse-selected">
      <div className="menu-item-button-collapse-selected-rectangle-34656628"></div>
      <svg
        className="menu-item-button-collapse-selected-chevron"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default MenuItemButtonCollapseSelected;


