import React from "react";
import Dictionary from "./Dictionary";
import logo from "./rw-logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="RW-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Roksolana Woloszyn and is open-sourced on{" "}
            {""}
            <a href="https://github.com/rokwol/dictionary-project"> Github.</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
