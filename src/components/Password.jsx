import React, { useState } from "react";

const Password = () => {
  const [psType, setPsType] = useState(true);
  return (
    <>
      <div>
        <input type={psType ? "password" : "text"} />
        <button onClick={() => setPsType((prevState) => !prevState)}>
          Toggle
        </button>
      </div>
    </>
  );
};

export default Password;
