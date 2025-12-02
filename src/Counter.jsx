import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(
    function myEffect() {
      console.log("エフェクト発動!!!");
    },
    [count, name]
  );
  const increment = () => {
    setCount((c) => c + 1);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <p>{name}</p>
      <input value={name} onChange={handleChange} type="text" />
    </div>
  );
};

export default Counter;
