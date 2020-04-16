import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import EnterInfo from "./EnterInfo";
import MemberCard from "./MemberCard";
import "../App.css";

function TeamList(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.team);
  console.log("TeamList", props);
  console.log("searchResults", searchResults);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    const results = props.team.filter((person) => {
      return person.role.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log("search results", results);
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log("searchTerm", searchTerm);

  return (
    <Container style={{ marginRight: "unset", marginTop: "1rem" }}>
      <Row>
        <FormGroup style={{ width: "60%" }}>
          <Label for="role"></Label>
          <Input
            type="text"
            name="textfield"
            id="role"
            placeholder="Search by role"
            onChange={handleChange}
            style={{ width: "80%" }}
          />
        </FormGroup>
        <Button
          onClick={toggle}
          color="primary"
          style={{ height: "3rem", marginTop: "1rem", marginRight: "1rem" }}
        >
          Add New Member
        </Button>
        <EnterInfo isOpen={modal} toggle={toggle} teamListProps={props} />
      </Row>
      <Row>
        {searchResults.map((element) => (
          <Link to={`/team-list/${element.id}`} key={element.id}>
            <MemberCard element={element} key={element.id} />
          </Link>
        ))}
      </Row>
    </Container>
  );
}
export default TeamList;
//<div className="member-card" key={element.id}></div>
//, margin: "auto"
