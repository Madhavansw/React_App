import { useEmployees } from "../context/EmployeeContext";

function EmployeeList() {

  // Access Context Data
  const { state } = useEmployees();

  return (
    <div>
      <h2>Employee List</h2>

      {state.employees.map(employee => (

        <div key={employee.id}>

          <h3>{employee.name}</h3>

          <p>{employee.designation}</p>

          <p>{employee.department}</p>

        </div>

      ))}

    </div>
  );
}

export default EmployeeList;