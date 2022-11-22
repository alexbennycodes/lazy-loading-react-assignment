import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users?_limit=3"
  );
  return response.data;
};
