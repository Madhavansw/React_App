import { useSelector, useDispatch } from "react-redux";

import { deleteEmployee } from "../redux/employeeSlice";

const EmployeeList = () => {

    // Read data from Redux store
    const employees = useSelector(
        state => state.employees.employees
    );

    // Get dispatch function
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id));
    };

    return (
        <div>

            <h2>Employee List</h2>

            {employees.map(emp => (

                <div key={emp.id}>

                    <h3>{emp.name}</h3>

                    <p>{emp.role}</p>

                    <p>Salary: {emp.salary}</p>

                    <button
                        onClick={() => handleDelete(emp.id)}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
};

export default EmployeeList;