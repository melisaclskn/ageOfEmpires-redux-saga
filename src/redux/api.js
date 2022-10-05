import axios from "axios";

export const loadUsersApi = async () => {
  const { data } = await axios.get("/db/data.json");
  return data;
};

