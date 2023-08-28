import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from './component/home';
// import About from './component/about';
// import Contact from './component/contact';
import { jsQuizzhistory } from "./Topics/history";
import { jsQuizzbio } from "./Topics/biology";
import { jsQuizzcs } from "./Topics/constant";
import Quiz from "./components/Quiz/Quiz";
import "./App.css";
class Appi extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/cs">ReactJs</Link>
            </li>
            <li>
              <Link to="/Anatomy">Anatomy</Link>
            </li>
          </ul>
          <Routes>
            <Route
              exact
              path="/history"
              element={<Quiz questions={jsQuizzhistory.questions}></Quiz>}
            ></Route>
            <Route
              exact
              path="/cs"
              element={<Quiz questions={jsQuizzcs.questions}></Quiz>}
            ></Route>
            <Route
              exact
              path="/Anatomy"
              element={<Quiz questions={jsQuizzbio.questions}></Quiz>}
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Appi;
