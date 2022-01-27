import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>rokwol</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sun" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Roksolana Woloszyn and is open-sourced on{" "}
            <a href="https://github.com/rokwol/dictionary-project"> Github.</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
