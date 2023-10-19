import "./Prerequisites.css";

const Prerequisites =
  ({ ...props }) => {
    return (
      <div className="prerequisites">
        <span>
          <span className="prerequisites-span">
            Prerequisites
            <br />
          </span>
          <span className="prerequisites-span2">
            Fork the{" "}
          </span>
          <span className="prerequisites-span3">
            jumpstart-agora-apps repo
          </span>
          <span className="prerequisites-span4">
            {" "}
            into your own GitHub account. If you do not have a GitHub account,
            visit{" "}
          </span>
          <span className="prerequisites-span5">
            this link
          </span>
          <span className="prerequisites-span6">
            {" "}
            to create one.
            <br />
          </span>
          <span className="prerequisites-span7">
            Open the{" "}
          </span>
          <span className="prerequisites-span8">
            jumpstart-Agora-apps repo
          </span>
          <span className="prerequisites-span9">
            {" "}
            while signed in to your GitHub account and click the “Fork” button
            in the upper-right corner.
          </span>
        </span>{" "}
      </div>
    );
  };

  export default Prerequisites;
