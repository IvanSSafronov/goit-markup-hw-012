import axios from "axios";

const API_KEY = "55875706-c6fa52b10f2b0b0fddf74a165";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}