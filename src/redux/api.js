import axios from "axios";

export const loadUsersApi = async () => {
  console.log("apiiiiiiiiiiiiii")
  const { data } = await axios.get("/db/data.json");
  return data;
};

