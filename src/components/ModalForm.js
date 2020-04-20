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

function ModalForm(props) {
  console.log("modalform props", props);
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        Enter of Edit Member Information
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              onChange={props.handleChanges}
              type="textfield"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              defaultValue={props.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              onChange={props.handleChanges}
              type="textfield"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              defaultValue={props.lastName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="roleSelect">Select the role</Label>
            <Input
              type="select"
              name="role"
              id="roleSelect"
              onChange={props.handleChanges}
            >
              <option value="Project architect">Project architect</option>
              <option value="Project manager">Project manager</option>
              <option value="UI/UX designer">UI/UX designer</option>
              <option value="Web developer">Web developer</option>
              <option value="QA tester">QA and testing specialist</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={props.handleChanges}
              defaultValue={props.email}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit" onClick={props.submit}>
          Submit
        </Button>
        <Button color="secondary" onClick={props.cancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
export default ModalForm;
