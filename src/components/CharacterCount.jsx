import React, { useState } from "react";

const CharacterCount = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const handleChange = (e) => {
    if (count >= 100) return;
    setData(e.target.value);
    setCount(e.target.value.length);
  };
  return (
    <>
      <input
        type="text"
        value={data}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Character Count: {count}</p>
    </>
  );
};

export default CharacterCount;
