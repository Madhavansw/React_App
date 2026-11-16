import { useState } from "react";
import { useDispatch } from "react-redux";

import { addEmployee } from "../redux/employeeSlice";

const EmployeeForm = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [salary, setSalary] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const newEmployee = {
            id: Date.now(),
            name,
            role,
            salary: Number(salary)
        };

        dispatch(addEmployee(newEmployee));

        setName("");
        setRole("");
        setSalary("");
    };

    return (
        <form onSubmit={handleSubmit}>

            <h2>Add Employee</h2>

            <input
                type="text"
                placeholder="Employee Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Employee Role"
                value={role}
                onChange={e => setRole(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Employee Salary"
                value={salary}
                onChange={e => setSalary(e.target.value)}
                required
            />

            <button type="submit">
                Add Employee
            </button>

        </form>
    );
};

export default EmployeeForm;