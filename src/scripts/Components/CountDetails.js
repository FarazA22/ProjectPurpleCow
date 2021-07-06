import React from "react";

export default function CountDetails({ countInfo }) {
  const { namespace, key, value } = countInfo;
  return (
    <div className="result">
      <div>NameSpace:</div>
      <div>{namespace}</div>
      <div>Key:</div>
      <div>{key}</div>
      <div>Value:</div>
      <div>{value.toLocaleString("en-US")}</div>
    </div>
  );
}
