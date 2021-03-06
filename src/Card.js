import del from "./delete.svg";
import { useState } from "react";

const Card = ({ data, handleDelete, canDel }) => {
  const [flip, setFlip] = useState(false);

  return (
    <>
      <div className="card-container">
        <div
          className={`card card-que ${flip ? "flip" : "anti-flip"}`}
          onClick={(e) => {
            if (e.target.id !== "del") {
              setFlip(true);
            }
          }}
        >
          <div className="text-container">{data.question}</div>
          {canDel && (
            <img
              id="del"
              src={del}
              alt="delete"
              width="24px"
              height="24px"
              onClick={() => handleDelete(data._id)}
              className={`del-icon`}
            />
          )}
        </div>
        <div
          className={`card card-ans ${flip ? "anti-flip" : "flip"}`}
          onClick={(e) => {
            if (e.target.id !== "del") {
              setFlip(false);
            }
          }}
        >
          <div className="text-container">{data.answer}</div>
          {canDel && (
            <img
              id="del"
              src={del}
              alt="delete"
              width="24px"
              height="24px"
              onClick={() => handleDelete(data._id)}
              className={`del-icon`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
