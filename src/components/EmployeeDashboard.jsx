import EmployeeList from "./EmployeeList";
import EmployeeActions from "./EmployeeActions";

function EmployeeDashboard() {

  return (
    <div>
      <h1>Employee Management System</h1>

      <EmployeeActions />

      <EmployeeList />
    </div>
  );
}

export default EmployeeDashboard;