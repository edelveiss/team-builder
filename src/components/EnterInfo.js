import React, { useState, useEffect } from "react";
import dog from "./dog.jpg";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
// import Dialog from "@material-ui/core/Dialog";
// import AppBar from "@material-ui/core/AppBar";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
// import TextField from "@material-ui/core/TextField";
//import Button from "@material-ui/core/Button";

//console.log("dog", dog);

const optionRole = [
  { value: "projectArchitect", label: "Project architect" },
  { value: "projectManager", label: "Project manager" },
  { value: "uiDesigner", label: "UI/UX designer" },
  { value: "webDeveloper", label: "Web developer" },
  { value: "qaTester", label: "QA and testing specialist" },
];

const EnterInfo = (props) => {
  // const [role1, setRole1] = useState("");

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "orange",
        primary: "green",
      },
    };
  }

  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    //image: "https://loremflickr.com/320/240?random=8",
  });

  useEffect(() => {}, [newMember]);

  //   const handleSelectChange = (e) => {
  //     setRole1(e.target.value);
  //     setNewMember({
  //       role: role1,
  //     });
  //   };

  // console.log("role1: ", role1);
  const handleChanges = (event) => {
    console.log("Enter info event", event.target.value);
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.toggle();
    props.teamListProps.addNewMember(newMember);
    setNewMember({
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      //image: "https://loremflickr.com/320/240?random=8",
    });
  };

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        Enter the new member information
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              onChange={handleChanges}
              type="textfield"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={newMember.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              onChange={handleChanges}
              type="textfield"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={newMember.lastName}
            />
          </FormGroup>
          {/*  

          <Select
            name="role"
            theme={customTheme}
            options={optionRole}
            onChange={handleChanges}
            className="mb-3"
            placeholder="Select role"
            isSearchable
          />
          */}
          {/* */}
          <FormGroup>
            <Label for="roleSelect">Select the role</Label>
            <Input
              type="select"
              name="role"
              id="roleSelect"
              onChange={handleChanges}
            >
              <option value="Project architect">Project architect</option>
              <option value="Project manager">Project manager</option>
              <option value="UI/UX designer">UI/UX designer</option>
              <option value="Web developer">Web developer</option>
              <option value="QA tester">QA and testing specialist</option>
            </Input>
          </FormGroup>
          {/* */}
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={handleChanges}
              value={newMember.email}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit" onClick={submitForm}>
          Submit
        </Button>
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default EnterInfo;
//onClick={props.toggle}
//onSubmit={submitForm}
