import React from "react";

export default function Search({
  nameSpace,
  setNameSpace,
  keyword,
  setKeyword,
  setURL,
  setSearchResults,
  setIsLoading,
  setError,
  error,
  searchResults,
}) {
  const handleNameSpaceChange = (e) => {
    setNameSpace(e.target.value);
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleDemoClick = () => {
    if (error !== null) setError(null);
    if (searchResults !== null) setSearchResults(null);
    setIsLoading(true);
    setURL(["default", "1ccb732e-b55a-4404-ad3f-0f99c02fe44e"]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === "") return;
    nameSpace === ""
      ? setURL(["default", keyword])
      : setURL([nameSpace, keyword]);
    setError(null);
    setIsLoading(true);
    setNameSpace("");
    setKeyword("");
  };

  return (
    <div>
      <h1>View Individual Count Details</h1>
      <form onSubmit={onSubmit}>
        <label className="flexContainer">
          Name Space
          <input
            className="inputField"
            value={nameSpace}
            onChange={handleNameSpaceChange}
          ></input>
        </label>
        <label className="flexContainer">
          Keyword
          <input
            className="inputField"
            value={keyword}
            onChange={handleKeywordChange}
          ></input>
        </label>
        <input className="primaryButton" type="submit" value="Submit"></input>
        <button
          className="secondaryButton"
          type="button"
          value="Reset"
          onClick={handleDemoClick}
        >
          Demo
        </button>
      </form>
    </div>
  );
}
