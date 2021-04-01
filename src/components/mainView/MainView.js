import React, { useEffect, useState } from "react";
import { Card } from "../cards/Card";

export const MainView = () => {
  const [info, setInfo] = useState([]);
  const getData = () => {
    fetch("data-cards.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        if (myJson.status_code === 200) setInfo(myJson.result);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const cards = info.map((card, idx) => (
    <div key={idx}>
      <Card
        path={card.path}
        title={card.title}
        footer={card.status}
        icon={card.type}
      />
    </div>
  ));

  return (
    <main className="container p-4">
      <div className="row d-flex justify-content-center">{cards}</div>
    </main>
  );
};
