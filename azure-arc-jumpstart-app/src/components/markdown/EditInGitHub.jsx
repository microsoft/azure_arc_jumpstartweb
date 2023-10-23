import "./EditInGitHub.css";

const EditInGitHub = ({ href }) => {
  return <div
    className="edit-in-git-hub"
    onClick={() => {
      window.open(href, "_blank");
    }}
  >
    Edit in GitHub
  </div>;
};

export default EditInGitHub;


