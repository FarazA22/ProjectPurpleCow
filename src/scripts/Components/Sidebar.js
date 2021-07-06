import React, { useState, useEffect } from "react";
import Stats from "./Stats";

export default function Sidebar() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [statsOfAPICounter, setStatsOfAPICounter] = useState(null);
  useEffect(() => {
    async function fetchCountAPIStats() {
      try {
        const res = await fetch("https://api.countapi.xyz/stats");
        if (!res.ok) {
          throw Error(`System issue: ${res.status} error code`);
        }
        const json = await res.json();
        setStatsOfAPICounter(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    // Setting interval to handle instances where the component does not unmount (i.e. no change in state)
    const interval = setInterval(() => {
      fetchCountAPIStats();
    }, 1000);

    // clear interval if an error was returned
    if (error !== null) {
      clearInterval(interval);
    }

    // clear interval on every unmount
    return () => clearInterval(interval);
  }, [error, isLoading, statsOfAPICounter]);

  if (isLoading) return <h1 className="sidebar">Loading...</h1>;
  else if (error) return <div className="sidebar">{error.message}</div>;
  else {
    return (
      <div className="sidebar">
        <h1>Count API Stats</h1>
        <Stats value={statsOfAPICounter.keys_created} name="Keys Created" />
        <Stats value={statsOfAPICounter.keys_updated} name="Keys Updated" />
        <Stats value={statsOfAPICounter.requests} name="Request Made" />
      </div>
    );
  }
}
