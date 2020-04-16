import React, { useState } from "react";
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

const EnterInfo = (props) => {
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    image: "",
  });

  const handleChanges = (event) => {
    console.log("event", event.target.value);
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
      image: "",
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
          <FormGroup>
            <Label for="roleSelect">Select the role</Label>
            <Input
              type="select"
              name="roleSelect"
              id="roleSelect"
              onChange={handleChanges}
            >
              <option value="1">Project architect</option>
              <option value="2">Project manager</option>
              <option value="3">UI/UX designer</option>
              <option value="4">Web developer</option>
              <option value="5">QA and testing specialist</option>
            </Input>
          </FormGroup>
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
