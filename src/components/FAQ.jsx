import React, { useState } from "react";

const FAQ = ({ que }) => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div>
      {que.map((b, idx) => {
        const question = Object.keys(b)[0];
        const answer = b[question];

        const isOpen = openIdx === idx;

        return (
          <div key={idx}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <strong>{question}</strong>
              <button onClick={() => setOpenIdx(isOpen ? null : idSx)}>
                {isOpen ? "−" : "+"}
              </button>
            </div>

            {isOpen && <p>{answer}</p>}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
