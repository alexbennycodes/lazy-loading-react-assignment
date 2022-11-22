import React, { useEffect, useState } from "react";
import { getUsers } from "./api/getUsers";

function App() {
  const [avatars, setAvatars] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
      // console.log(res);
      setAvatars([]);
      res.map((user) =>
        setAvatars((prev) => [
          ...prev,
          `https://avatars.dicebear.com/api/bottts/${user.username}.svg`,
        ])
      );
      // console.log(avatars);
    });
  }, []);

  return (
    <div className="App text-7xl container mx-auto flex flex-col items-center pt-5">
      {avatars
        ? avatars?.map((info, i) => (
            <img
              src={info}
              key={i}
              className="max-w-[300px] border-2 border-black p-5 mb-5"
            />
          ))
        : "Loading"}
    </div>
  );
}

export default App;
