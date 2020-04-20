import React, { useState, useEffect } from "react";
import ModalForm from "./ModalForm";
//import dog from "../assets/dog.jpg";

const EnterInfo = (props) => {
  //   const [newMember, setNewMember] = useState({
  //     firstName: "",
  //     lastName: "",
  //     role: "",
  //     email: "",

  //   });
  const [newMember, setNewMember] = useState({});

  //useEffect(() => {}, [newMember]);

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
    });
  };

  const cancelForm = (event) => {
    event.preventDefault();
    props.toggle();
    setNewMember({
      firstName: "",
      lastName: "",
      role: "",
      email: "",
    });
  };

  return (
    <ModalForm
      isOpen={props.isOpen}
      toggle={props.toggle}
      handleChanges={handleChanges}
      firstName={newMember.firstName}
      lastName={newMember.lastName}
      email={newMember.email}
      select={newMember.role}
      submit={submitForm}
      cancel={cancelForm}
    />
  );
};
export default EnterInfo;

//   function customTheme(theme) {
//     return {
//       ...theme,
//       colors: {
//         ...theme.colors,
//         primary25: "orange",
//         primary: "green",
//       },
//     };
//   }

// <TextField
//             id="standard-textarea"
//             label="Enter First Name"
//             placeholder="First Name"
//             multiline
//             onChange={handleChanges}
//             type="textfield"
//             name="firstName"
//             value={newMember.firstName}
//           />

// const useStyles = makeStyles((theme) => ({
//     root: {
//       "& .MuiTextField-root": {
//         margin: theme.spacing(1),
//         width: "25ch",
//       },
//     },
//   }));

//   const optionRole = [
//     { value: "projectArchitect", label: "Project architect" },
//     { value: "projectManager", label: "Project manager" },
//     { value: "uiDesigner", label: "UI/UX designer" },
//     { value: "webDeveloper", label: "Web developer" },
//     { value: "qaTester", label: "QA and testing specialist" },
//   ];

//   <Select
//     name="role"
//     theme={customTheme}
//     options={optionRole}
//     onChange={handleChanges}
//     className="mb-3"
//     placeholder="Select role"
//     isSearchable
//   />

//     <Modal isOpen={props.isOpen} toggle={props.toggle}>
//     <ModalHeader toggle={props.toggle}>
//       Enter the new member information
//     </ModalHeader>
//     <ModalBody>
//       <Form>
//         <FormGroup>
//           <Label for="firstName">First Name</Label>
//           <Input
//             onChange={handleChanges}
//             type="textfield"
//             name="firstName"
//             id="firstName"
//             placeholder="Enter first name"
//             value={newMember.firstName}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="lastName">Last Name</Label>
//           <Input
//             onChange={handleChanges}
//             type="textfield"
//             name="lastName"
//             id="lastName"
//             placeholder="Enter last name"
//             value={newMember.lastName}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="roleSelect">Select the role</Label>
//           <Input
//             type="select"
//             name="role"
//             id="roleSelect"
//             onChange={handleChanges}
//           >
//             <option value="Project architect">Project architect</option>
//             <option value="Project manager">Project manager</option>
//             <option value="UI/UX designer">UI/UX designer</option>
//             <option value="Web developer">Web developer</option>
//             <option value="QA tester">QA and testing specialist</option>
//           </Input>
//         </FormGroup>
//         {/* */}
//         <FormGroup>
//           <Label for="email">Email</Label>
//           <Input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Enter email"
//             onChange={handleChanges}
//             value={newMember.email}
//           />
//         </FormGroup>
//       </Form>
//     </ModalBody>
//     <ModalFooter>
//       <Button color="primary" type="submit" onClick={submitForm}>
//         Submit
//       </Button>
//       <Button color="secondary" onClick={cancelForm}>
//         Cancel
//       </Button>
//     </ModalFooter>
//   </Modal>
