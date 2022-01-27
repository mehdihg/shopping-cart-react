import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";
const Api = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default Api;
