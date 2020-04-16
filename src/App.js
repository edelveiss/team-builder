import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import TeamList from "./components/TeamList";
import Member from "./components/Member";
import "./App.css";
import teamData from "./teamData";

function App() {
  const [team, setTeam] = useState(teamData);

  return (
    <div className="App">
      <nav>
        <div className="header">
          <img
            src="https://fontmeme.com/permalink/200415/2effd0cf8d4200f925fba5b5e6f2cbeb.png"
            alt="Professiona Software Development logo"
            height="35"
          ></img>
        </div>

        <div className="nav-links">
          <Link to="/" style={{ fontSize: "1.3rem" }}>
            Home
          </Link>

          <Link to="/team-list" style={{ fontSize: "1.3rem" }}>
            Team
          </Link>
        </div>
      </nav>

      <Switch>
        <Route path="/team-list/:memberID">
          <Member member={team} />
        </Route>

        <Route path="/team-list">
          <TeamList team={team} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//height="42"
