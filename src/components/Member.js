import React from "react";
import MemberEdit from "./MemberEdit";
import {
  useParams,
  Route,
  Link,
  NavLink,
  Switch,
  useRouteMatch,
} from "react-router-dom";

function Member(props) {
  console.log("Props memeber", props.member);
  //const { itemID } = useParams();
  const memId = useParams();
  console.log("memId", memId);
  //const match = useRouteMatch();
  //console.log("match", match);
  const { path, url } = useRouteMatch();
  //   path: "/team-list/:itemID"
  // url: "/team-list/1"
  const teamMember = props.member.find(
    (person) => person.id === Number(itemID)
  );
  console.log("teamMember", teamMember);
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={teamMember.image} alt={teamMember.firstName} />
        </div>
        <div className="item-title-wrapper">
          <h2>
            {teamMember.firstName} {teamMember.lastName}
          </h2>
          <h4>${teamMember.role}</h4>

          <nav className="item-sub-nav">
            <Link to={`/team-list/${teamMember.id}/edit`}>Edit</Link>
          </nav>
        </div>
      </div>

      <Route path={`${path}/edit`}>
        <MemberEdit person={teamMember} />
      </Route>
    </div>
  );
}
export default Member;
//const { itemID } = useParams();
