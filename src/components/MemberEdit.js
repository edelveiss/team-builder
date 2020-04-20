import React, { useState } from "react";
import ModalForm from "./ModalForm";

function MemberEdit(props) {
  const [teamMem, setTeamMem] = useState(props.teamMember);

  const handleChanges = (event) => {
    console.log("Edit event ", event.target.value);
    setTeamMem({ ...teamMem, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Edit team member", teamMem);
    props.toggle();

    props.editMember(teamMem);
  };

  const cancelForm = (event) => {
    event.preventDefault();
    props.toggle();
  };

  return (
    <ModalForm
      isOpen={props.isOpen}
      toggle={props.toggle}
      handleChanges={handleChanges}
      firstName={props.teamMember.firstName}
      lastName={props.teamMember.lastName}
      email={props.teamMember.email}
      select={props.teamMember.role}
      submit={submitForm}
      cancel={cancelForm}
    />
  );
}
export default MemberEdit;

// const handleChanges = (event) => {
//     console.log("event", event.target.value);
//     setNewMember({ ...newMember, [event.target.name]: event.target.value });
//   };

//   const submitForm = (event) => {
//     event.preventDefault();
//     props.toggle();
//     props.teamListProps.addNewMember(newMember);
//     setNewMember({
//       firstName: "",
//       lastName: "",
//       role: "",
//       email: "",
//       image: "",
//     });
//   };

// <Modal isOpen={props.isOpen} toggle={props.toggle}>
//       <ModalHeader toggle={props.toggle}>
//         Edit the member information
//       </ModalHeader>
//       <ModalBody>
//         <Form>
//           <FormGroup>
//             <Label for="firstName">First Name</Label>
//             <Input
//               onChange={handleChanges}
//               type="textfield"
//               name="firstName"
//               id="firstName"
//               placeholder="Enter first name"
//               defaultValue={props.teamMember.firstName}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="lastName">Last Name</Label>
//             <Input
//               onChange={handleChanges}
//               type="textfield"
//               name="lastName"
//               id="lastName"
//               placeholder="Enter last name"
//               defaultValue={props.teamMember.lastName}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="roleSelect">Select the role</Label>
//             <Input
//               type="select"
//               name="role"
//               id="roleSelect"
//               onChange={handleChanges}
//             >
//               <option value="Project architect">Project architect</option>
//               <option value="Project manager">Project manager</option>
//               <option value="UI/UX designer">UI/UX designer</option>
//               <option value="Web developer">Web developer</option>
//               <option value="QA tester">QA and testing specialist</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">Email</Label>
//             <Input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter email"
//               onChange={handleChanges}
//               defaultValue={props.teamMember.email}
//             />
//           </FormGroup>
//         </Form>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" type="submit" onClick={submitForm}>
//           Submit
//         </Button>
//         <Button color="secondary" onClick={props.toggle}>
//           Cancel
//         </Button>
//       </ModalFooter>
//     </Modal>
