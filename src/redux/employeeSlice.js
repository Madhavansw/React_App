import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [
        {
            id: 1,
            name: "Madhava",
            role: "React Developer",
            salary: 45000
        },
        {
            id: 2,
            name: "John",
            role: "Java Developer",
            salary: 55000
        },
        {
            id: 3,
            name: "David",
            role: "UI Developer",
            salary: 40000
        }
    ]
};

const employeeSlice = createSlice({
    name: "employees",

    initialState,

    reducers: {

        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },

        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter(
                emp => emp.id !== action.payload
            );
        },

        updateEmployee: (state, action) => {
            const employee = state.employees.find(
                emp => emp.id === action.payload.id
            );

            if (employee) {
                employee.name = action.payload.name;
                employee.role = action.payload.role;
                employee.salary = action.payload.salary;
            }
        }

    }
});

export const {
    addEmployee,
    deleteEmployee,
    updateEmployee
} = employeeSlice.actions;

export default employeeSlice.reducer;