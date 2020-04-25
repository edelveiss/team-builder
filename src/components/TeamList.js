import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
//import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Button } from "reactstrap";
import EnterInfo from "./EnterInfo";
import MemberCard from "./MemberCard";
import "../App.css";

function TeamList(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.team);

  useEffect(() => {
    setSearchResults(props.team);
  }, [props.team]);
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
    <Container
      style={{ margin: "0 auto", marginTop: "1rem", marginBottom: "2rem" }}
    >
      <Row>
        <TextField
          id="outlined-search"
          label="Search by role"
          name="textfield"
          type="search"
          variant="outlined"
          id="role"
          onChange={handleChange}
          style={{ width: "40%", marginRight: "16rem", marginLeft: "3rem" }}
        />

        <Button
          onClick={toggle}
          color="primary"
          style={{ height: "3rem", marginTop: "0.1rem", marginRight: "1rem" }}
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
