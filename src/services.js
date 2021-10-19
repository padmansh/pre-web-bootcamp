import axios from "axios";

const BASE_URL = "https://c4ec-103-160-65-60.ngrok.io";
axios.defaults.baseURL = BASE_URL;

export async function getFlashCards() {
  try {
    const response = await axios.get("/flashcards");
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
    const response = await axios.post("/flashcards", data);
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
    const response = await axios.delete(`/flashcards/${id}`);
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
