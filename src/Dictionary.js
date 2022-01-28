import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function HandleResponse(response) {
    setResults(response.data[0]);
  }

  function Search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(HandleResponse);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function HandleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function Load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Which word would you like to learn more about?</h1>
          <form onSubmit={HandleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={HandleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    Load();
    return "Loading";
  }
}
