import del from "./delete.svg";
import { useState } from "react";

const Card = ({ data, handleDelete, canDel }) => {
  const [flip, setFlip] = useState(false);
  return (
    <>
      <div className="card-container">
        <div
          className={`card card-que ${flip ? "flip" : "anti-flip"}`}
          onClick={() => setFlip(true)}
        >
          <div className="text-container">{data.question}</div>
          {canDel && (
          <div>
            <img
              src={del}
              alt="delete"
              width="24px"
              height="24px"
              onClick={() => handleDelete(data._id)}
              className={`del-icon`}
            />
          </div>
        )}
        </div>
        <div
          className={`card card-ans ${flip ? "anti-flip" : "flip"}`}
          onClick={() => setFlip(false)}
        >
          <div className="text-container">{data.answer}</div>
          {canDel && (
          <div>
            <img
              src={del}
              alt="delete"
              width="24px"
              height="24px"
              onClick={() => handleDelete(data._id)}
              className={`del-icon`}
            />
          </div>
        )}
        </div>
        
      </div>
    </>
  );
};

export default Card;
