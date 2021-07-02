import React from "react";

export default function Stats({ value, name }) {
  return (
    <div className="stat">
      <div>{name}</div>
      <div>{value.toLocaleString("en-US")}</div>
    </div>
  );
}
