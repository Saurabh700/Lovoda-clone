import React, { useEffect, useState } from "react";

const Trial = () => {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/jewelery")
      .then((res) => res.json())
      .then((res) => setProd(res));
  }, []);
  return (
    <div>
      <div>
        {prod.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Trial;
