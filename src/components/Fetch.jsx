import React, { useEffect, useState } from "react";
//IN REACT useEFFECT INTENTIONALLY MOUNTS -> UNMOUNTS -> MOUNTS THE API TO CHECK THE SIDE EFFECT
// WE CAN STOP IS BY DISABLING STRICT MODE IN INDEX.JSX
const Fetch = () => {
  const [next, setNext] = useState(0);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const api = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const data = await response.json();
      setData(data.data[0]);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    api();
  }, [next]);
  const handleClick = (e) => {
    e.preventDefault();
    setNext((prevState) => prevState + 1);
  };
  return (
    <div>
      <h1>{loading ? "Loading..." : data}</h1>
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default Fetch;
