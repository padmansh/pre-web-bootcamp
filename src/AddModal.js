import { useState } from "react";
import { addFlashCard } from "./services";

const AddModal = ({ setShowModal, refresh, setRefresh }) => {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formState.que !== undefined &&
      formState.ans !== undefined &&
      formState.ans !== "" &&
      formState.que !== ""
    ) {
      try {
        const res = await addFlashCard({
          question: formState.que,
          answer: formState.ans,
        });
        if (res.error === false) {
          setRefresh(!refresh);
          setFormState({});
          setShowModal(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleClose = (e) => {
    if (e.target.id === "container") {
      setFormState({});
      setShowModal(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.25)",
        zIndex: "9999",
      }}
      id="container"
      onClick={handleClose}
    >
      <div className="modal">
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <label>
            <div style={{ margin: "0px 0px 4px 0px" }}>Question</div>
            <input
              type="text"
              name="que"
              placeholder="Question"
              style={{ width: "97%" }}
              onChange={handleChange}
              value={formState.que ? formState.que : ""}
            />
          </label>
          <label>
            <div style={{ margin: "16px 0px 4px 0px" }}>Answer</div>
            <input
              type="text"
              name="ans"
              placeholder="Answer"
              style={{ width: "97%" }}
              onChange={handleChange}
              value={formState.ans ? formState.ans : ""}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddModal;
