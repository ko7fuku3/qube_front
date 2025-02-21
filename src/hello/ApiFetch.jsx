import React, { useState, useEffect } from 'react';

export const ApiFetch = () => {
  const [stones, setStone] = useState([]);

  useEffect(() => {
    // APIをfetchする
    fetch("http://localhost:8080/VirtualSQG/api", { method: "GET" })
      // レスポンスのデータ形式をjsonに設定
      .then((res) => res.json())
      // APIから渡されるレスポンスデータをstateにセットする
      .then((data) => {
        setStone(data);
      });
  }, []);

  return (
    <div>
      <ul>
        <li>{stones.month}</li>
        <li>{stones.color}</li>
        <li>{stones.name}</li>
      </ul>
    </div>
  );
};