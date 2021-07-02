import React, { useState, useEffect } from "react";
import Stats from "./Stats";

export default function Sidebar() {
  const [words, setWords] = useState(null);
  useEffect(() => {
    async function fetchAPIandUpdateWords() {
      const nameSpace = await fetch("https://api.countapi.xyz/stats");
      const json = await nameSpace.json();
      setWords(json);
    }

    const interval = setInterval(() => {
      fetchAPIandUpdateWords();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (words === null) return <h1 className="sidebar">Loading...</h1>;

  const { keys_created, keys_updated, requests } = words;
  return (
    <div className="sidebar">
      <h1>Stats</h1>
      <Stats value={keys_created} name="Keys Created" />
      <Stats value={keys_updated} name="Keys Updated" />
      <Stats value={requests} name="Request Made" />
    </div>
  );
}
