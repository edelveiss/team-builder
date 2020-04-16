import React from "react";
import MemberEdit from "./MemberEdit";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  ButtonToggle,
  Col,
} from "reactstrap";
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
  const { memberID } = useParams();
  //const memId = useParams();
  console.log("memId", { memberID });
  const match = useRouteMatch();
  console.log("match", match);
  const { path, url } = useRouteMatch();
  //   path: "/team-list/:itemID"
  // url: "/team-list/1"
  console.log(`${url}/edit`, `${url}/edit`);
  console.log(`${path}/edit`, `${path}/edit`);
  const teamMember = props.member.find(
    (person) => person.id === Number(memberID)
  );
  console.log("teamMember", teamMember);
  return (
    <div>
      <Card
        style={{
          width: "30rem",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <CardImg
          top
          width="10%"
          src={teamMember.image}
          alt={teamMember.firstName}
        />
        <CardBody>
          <CardTitle>{teamMember.role}</CardTitle>
          <CardSubtitle>
            {teamMember.firstName} {teamMember.lastName}
          </CardSubtitle>
          <CardText>{teamMember.email}</CardText>
          <ButtonToggle color="primary">Edit</ButtonToggle>
        </CardBody>
      </Card>

      <Switch>
        <Route path={`${path}/edit`}>
          <MemberEdit person={teamMember} />
        </Route>
      </Switch>
    </div>
  );
}
export default Member;
//const { itemID } = useParams();

// <img src={teamMember.image} alt={teamMember.firstName} />
// </div>
// <div className="item-title-wrapper">
//   <h2>
//     {teamMember.firstName} {teamMember.lastName}
//   </h2>
//   <h4>{teamMember.role}</h4>

// <nav className="item-sub-nav">
//             <Link to={`${url}/edit`}>Edit</Link>
//           </nav>
