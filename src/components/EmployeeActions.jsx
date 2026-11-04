import { useEmployees } from "../context/EmployeeContext";

function EmployeeActions() {

  // Access Dispatch
  const { dispatch } = useEmployees();

  // Add Employee
  const handleAddEmployee = () => {

    const newEmployee = {
      id: Date.now(),
      name: "Robert",
      designation: "Tester",
      department: "QA"
    };

    dispatch({
      type: "ADD_EMPLOYEE",
      payload: newEmployee
    });

  };

  // Delete Employee
  const handleDeleteEmployee = () => {

    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: 101
    });

  };

  return (
    <div>

      <button onClick={handleAddEmployee}>
        Add Employee
      </button>

      <button onClick={handleDeleteEmployee}>
        Delete Employee 101
      </button>

    </div>
  );
}

export default EmployeeActions;