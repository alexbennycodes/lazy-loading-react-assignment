import axios from "axios";

export const getUsers = async ({ pageNum }) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?_limit=3&_page=${pageNum}`
  );
  console.log(response);
  return response.data;
};
