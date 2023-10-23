import "./MenuItemButtonExpandPressed.css";

const MenuItemButtonExpandPressed = ({
  state = "rest",
  type = "collapse",
  ...props
}) => {
  return (
    <div className="menu-item-button-expand-pressed">
      <div className=".menu-item-button-expand-pressed-rectangle-34656628"></div>
      <svg
        className=".menu-item-button-expand-pressed-chevron"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L18.5858 12L12.2929 5.7071C11.9024 5.3166 11.9024 4.6834 12.2929 4.2929C12.6834 3.9024 13.3166 3.9024 13.7071 4.2929L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default MenuItemButtonExpandPressed;


