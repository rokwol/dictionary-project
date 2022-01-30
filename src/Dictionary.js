import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function HandleResponse(response) {
    setResults(response.data[0]);
  }

  function HandlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function Search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(HandleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000011bd466de3b52488eac8c3a30a7527f66";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(HandlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    Load();
    return "Loading";
  }
}
