import React, { useState, useEffect } from "react";
import Search from "./Search";
import CountDetails from "./CountDetails";

export default function Main() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [nameSpace, setNameSpace] = useState("");
  const [keyword, setKeyword] = useState("");

  const [searchResults, setSearchResults] = useState(null);
  const [URL, setURL] = useState("");

  useEffect(() => {
    async function fetchPageCountDetails() {
      try {
        const res = await fetch(
          `https://api.countapi.xyz/info/${URL[0]}/${URL[1]}`
        );
        const json = await res.json();
        setIsLoading(false);
        if (!res.ok) {
          throw Error(`System issue: ${res.status} error code`);
        }
        setSearchResults(json);
      } catch (error) {
        setSearchResults(null);
        setError(error);
      }
    }

    // function will not run when URL is null (i.e. on initial page load)
    if (URL !== "") fetchPageCountDetails();
  }, [URL]);

  return (
    <div className="main">
      <Search
        nameSpace={nameSpace}
        setNameSpace={setNameSpace}
        keyword={keyword}
        setKeyword={setKeyword}
        setURL={setURL}
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
        setError={setError}
        error={error}
        searchResults={searchResults}
      />
      <hr />
      {isLoading ? <div>Loading... </div> : null}
      {error ? <div>{error.message}</div> : null}
      {searchResults ? <CountDetails countInfo={searchResults} /> : null}
    </div>
  );
}
