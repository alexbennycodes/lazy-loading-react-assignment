import axios from "axios";
import React, { useEffect, useState } from "react";

const useAvatars = (pageNum) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?_limit=3&_page=${pageNum}`
      )
      .then((response) => {
        setData((prev) => [...prev, ...response.data]);
        setHasMore(Boolean(response.data.length));
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [pageNum]);
  return { loading, error, data, hasMore };
};

export default useAvatars;
