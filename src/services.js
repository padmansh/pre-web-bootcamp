import axios from "axios";

const BASE_URL = "https://dscbootcamp.herokuapp.com";
axios.defaults.baseURL = BASE_URL;

const config = {
  headers: {
    "api-key": "pudmaansh@gmail.com",
  },
};

export async function getFlashCards() {
  try {
    const response = await axios.get("/flashcards", config);
    if (response.status === 200 && response.data.error === false) {
      return {
        res: response.data,
      };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
}

export async function addFlashCard(data) {
  try {
    const response = await axios.post("/flashcards", data, config);
    if (response.status === 200 && response.data.error === false) {
      return {
        res: response.data,
      };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
}

export async function deleteFlashCard(id) {
  try {
    const response = await axios.delete(`/flashcards/${id}`, config);
    if (response.status === 200 && response.data.error === false) {
      return {
        res: response.data,
      };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
}
