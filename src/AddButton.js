import plus from "./plus.svg";

const AddButton = ({ setShowModal }) => {
  return (
    <div className="add-button">
      <img
        src={plus}
        alt="plus"
        width="30px"
        height="30px"
        onClick={() => setShowModal(true)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default AddButton;
