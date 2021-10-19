import { useState, useEffect } from "react";
import AddButton from "./AddButton";
import AddModal from "./AddModal";
import Card from "./Card";
import { deleteFlashCard, getFlashCards } from "./services";

const FlashCards = () => {
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const { res } = await getFlashCards();
        setCardData(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      const { res } = await deleteFlashCard(id);
      if (res.error === false) {
        setRefresh(!refresh);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="main-container">
        <AddButton setShowModal={setShowModal} />
        <div className="cards">
          {cardData.map((data) => (
            <Card
              key={data._id}
              data={data}
              handleDelete={handleDelete}
              canDel={true}
            />
          ))}
          {cardData.length === 0 && (
            <Card
              data={{ question: "demo", answer: "demo" }}
              key={0}
              canDel={false}
            />
          )}
        </div>
      </section>
      {showModal && (
        <AddModal
          setShowModal={setShowModal}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      )}
    </>
  );
};

export default FlashCards;
