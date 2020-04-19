import React from "react";
//import dog from "../dog.jpg";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  CardImg,
  CardSubtitle,
} from "reactstrap";

const MemberCard = ({ element }) => {
  // const film = props.film;
  // const { film } = props;
  // console.log("film", film);

  return (
    <Col xs="6" md="4" xl="3">
      <Card style={{ width: "18rem", marginTop: "1rem", height: "380px" }}>
        <CardImg
          style={{ height: "250px" }}
          src={element.image}
          alt={`Photo of ${element.firstName} ${element.lastName}`}
        />
        <CardBody>
          <CardTitle
            style={{
              fontSize: "1.3rem",
              fontWeight: "bolder",
              borderBottom: "2px solid grey",
            }}
          >
            {element.role}
          </CardTitle>
          <CardSubtitle>
            {element.firstName} {element.lastName}
          </CardSubtitle>

          <CardText>{element.email}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MemberCard;
//src={element.image}
//   <Col xs="6" md="4" xl="3">
//             <Link to={`/team-list/${element.id}`}>
//               <img
//                 className="team-list-image"
//                 src={element.image}
//                 alt={`Photo of ${element.firstName} ${element.lastName}`}
//               />
//               <p>
//                 {element.firstName} {element.lastName}
//               </p>

//               <p>{element.role}</p>
//               <p>{element.email}</p>
//             </Link>
//           </Col>
