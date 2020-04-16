import React from "react";
import { Link } from "react-router-dom";

function TeamList(props) {
  console.log("TeamList", props);
  return (
    <div className="team-list-wrapper">
      {props.team.map((element) => (
        <div className="member-card" key={element.id}>
          <Link to={`/team-list/${element.id}`}>
            <img
              className="team-list-image"
              src={element.image}
              alt={`Photo of ${element.firstName} ${element.lastName}`}
            />
            <p>
              {element.firstName} {element.lastName}
            </p>
          </Link>
          <p>${element.role}</p>
          <p>${element.email}</p>
        </div>
      ))}
    </div>
  );
}
export default TeamList;
