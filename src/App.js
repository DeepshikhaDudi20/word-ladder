import React from "react";
import "./styles/App.scss";
import WordLadderCard from "./components/WordLadder/WordLadderCard";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Word Ladder</h1>
      </header>
      <main className="app-content">
      <WordLadderCard />
      </main>
      <footer className="footer">
        UI task
      </footer>
    </div>
  );
};

export default App;
