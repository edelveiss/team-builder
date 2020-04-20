import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import TeamList from "./components/TeamList";
import Member from "./components/Member";
import MemberEdit from "./components/MemberEdit";
import "./App.css";
import teamData from "./teamData";
import "bootstrap/dist/css/bootstrap.css";
import Select from "react-select";
import dog from "./components/dog.jpg";

function App() {
  const [team, setTeam] = useState(teamData);

  //useEffect(() => {}, [team]);

  const editMember = (member) => {
    setTeam((previousState) =>
      previousState.map((previousMember) => {
        if (member.id === previousMember.id) {
          return member;
        }
        return previousMember;
      })
    );
  };

  const addNewMember = (member) => {
    const newMember = {
      id: team.length,
      firstName: member.firstName,
      lastName: member.lastName,
      role: member.role,
      email: member.email,
      image: "https://loremflickr.com/320/240?random=" + team.length + 1,
      //image: { dog },
    };

    setTeam([...team, newMember]);
  };

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
          <Member
            member={team}
            addNewMember={addNewMember}
            editMember={editMember}
          />
        </Route>

        <Route path="/team-list">
          <TeamList team={team} addNewMember={addNewMember} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// const teamData = [
//   {
//     id: 1,
//     firstName: "Mario",
//     lastName: "Speedwagon",
//     role: "Project architect",
//     email: "marioSpeedwagon@gmail.com",
//     image: { dog },
//   },
//   {
//     id: 2,
//     firstName: "Petey",
//     lastName: "Cruiser",
//     role: "Project manager",
//     email: "peteyCruiser@gmail.com",
//     image: "https://images.dog.ceo/breeds/hound-english/n02089973_3307.jpg",
//   },
//   {
//     id: 3,
//     firstName: "Anna",
//     lastName: "Sthesia",
//     role: "UI/UX designer",
//     email: "annaSthesia@gmail.com",
//     image: "https://images.dog.ceo/breeds/hound-afghan/n02088094_8063.jpg",
//   },
//   {
//     id: 4,
//     firstName: "Paul",
//     lastName: "Molive",
//     role: "UI/UX designer",
//     email: "paulMolive@gmail.com",
//     image: "https://images.dog.ceo/breeds/hound-walker/n02089867_1882.jpg",
//   },
//   {
//     id: 5,
//     firstName: "Anna",
//     lastName: "Mull",
//     role: "Web developer",
//     email: "annaMull@gmail.com",
//     image: "https://images.dog.ceo/breeds/hound-blood/n02088466_6834.jpg",
//   },
//   {
//     id: 6,
//     firstName: "Gail",
//     lastName: "Forcewind",
//     role: "Web developer",
//     email: "gailForcewind@gmail.com",
//     image: "https://images.dog.ceo/breeds/hound-basset/n02088238_11281.jpg",
//   },
//   {
//     id: 7,
//     firstName: "Bob",
//     lastName: "Frapples",
//     role: "Web developer",
//     email: "bobFrapples@gmail.com",
//     image: "https://images.dog.ceo/breeds/hound-english/n02089973_3119.jpg",
//   },
// ];
