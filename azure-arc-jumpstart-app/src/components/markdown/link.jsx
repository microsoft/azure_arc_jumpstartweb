import "./Link.css";

const Link =
  ({ ...props }) => {
    return (
      <div className="link">
        <span>
          <span className="link-span">
            Install or update Azure CLI to version 2.49.0 or above
          </span>
          <span className="link-span2">
            . Use the following command to check your current installed version.
          </span>
        </span>{" "}
      </div>
    );
  };

  export default Link;

  
