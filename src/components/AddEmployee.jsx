
import { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";

function AddEmployee() {

  // Access dispatch from Employee Context
  const { dispatch } = useEmployees();

  // Manage input fields
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");

  // Add employee function
  const handleAddEmployee = () => {

    if (!name || !designation || !department) {
      alert("Please fill all fields");
      return;
    }

    // Create new employee object
    const newEmployee = {
      id: Date.now(),
      name: name,
      designation: designation,
      department: department
    };

    // Send action to reducer
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: newEmployee
    });

    // Clear input fields
    setName("");
    setDesignation("");
    setDepartment("");
  };

  return (
    <div className="add-employee">

      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={handleAddEmployee}>
        Add Employee
      </button>

    </div>
  );
}

export default AddEmployee;
