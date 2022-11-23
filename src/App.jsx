import React, { useState, useRef, useCallback } from "react";
import useAvatars from "./useAvatars";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { loading, error, data, hasMore } = useAvatars(pageNum);
  const intObserver = useRef();
  const lastUserRef = useCallback(
    (user) => {
      if (loading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((users) => {
        if (users[0].isIntersecting && hasMore) {
          setPageNum((prev) => prev + 1);
        }
      });

      if (user) intObserver.current.observe(user);
    },
    [loading, hasMore]
  );

  return (
    <div className="App text-7xl container mx-auto flex flex-col items-center py-36">
      {data.map((user, i) => {
        if (data.length === i + 1) {
          return (
            <img
              src={`https://avatars.dicebear.com/api/bottts/${user.username}.svg`}
              className="h-[50vh] border-2 border-black p-5 mb-5"
              key={user.id}
              ref={lastUserRef}
            />
          );
        }
        return (
          <img
            src={`https://avatars.dicebear.com/api/bottts/${user.username}.svg`}
            className="h-[50vh] border-2 border-black p-5 mb-36"
            key={user.id}
          />
        );
      })}
      {loading && <p className="center">Loading More Posts...</p>}
      {error && <p className="center">Error</p>}
    </div>
  );
}

export default App;
