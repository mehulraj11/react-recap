import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
// console.log("k");

  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    const response = await fetch("/users.json"); // public folder
    const data = await response.json();
    setData(data);
  };

  // Pagination logic
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div style={{ color: "white" }}>
      {currentData.map((i, idx) => (
        <div
          key={idx}
          style={{ border: "1px solid white", margin: "10px", padding: "10px" }}
        >
          <p>Name: {i.name}</p>
          <p>Email: {i.email}</p>
          <p>Age: {i.age}</p>
          <p>City: {i.city}</p>
        </div>
      ))}

      <p>
        Page {page} of {totalPages}
      </p>

      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Prev
      </button>

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
