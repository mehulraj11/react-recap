import React, { useState } from "react";

const SearchFilter = () => {
  const list = ["apple", "mango", "avacado", "mongoose", "cat", "caterpillar"];
  const [val, setVal] = useState("");
  const filteredList = list.filter((b) =>
    b.toLowerCase().includes(val.toLowerCase())
  );
  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      {val &&
        filteredList.map((b, idx) => (
          <li key={idx} style={{ listStyle: "none" }}>
            <p onClick={() => setVal(b)}>{b}</p>
          </li>
        ))}
    </div>
  );
};

export default SearchFilter;
