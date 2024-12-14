import Card from "../molecules/Card";

import React from "react";

function DefualtComponent() {
  return <div className="card--hovred">salam</div>;
}
function HoveredComponent() {
  return <div className="card--hovred">khodafez</div>;
}

export default function Portofolio() {
  return (
    <section
      id="Portofolio"
      className="flex justify-center items-center flex-1"
    >
      <Card
        defualtComponent={<DefualtComponent />}
        hoveredComponent={<HoveredComponent />}
      ></Card>
    </section>
  );
}
