import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Left from "./components/Left";
import QuizApp from "./QuizApp";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Left className="left" />
        <QuizApp/>
      </div>
    </div>
  );
};

export default App;