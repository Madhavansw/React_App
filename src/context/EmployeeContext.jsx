
import {
  createContext,
  useContext,
  useReducer
} from "react";

// STEP 1: Create Context
const EmployeeContext = createContext(null);

// STEP 2: Define Initial State
const initialState = {
  employees: [
    {
      id: 101,
      name: "Madhava",
      designation: "React Developer",
      department: "IT"
    },
    {
      id: 102,
      name: "John",
      designation: "Java Developer",
      department: "IT"
    },
    {
      id: 103,
      name: "David",
      designation: "UI Developer",
      department: "Design"
    }
  ]
};

// STEP 3: Create Reducer
function employeeReducer(state, action) {

  switch (action.type) {

    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [
          ...state.employees,
          action.payload
        ]
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          employee => employee.id !== action.payload
        )
      };

    default:
      return state;
  }
}

// STEP 4: Create EmployeeProvider
export function EmployeeProvider({ children }) {

  // STEP 5: Manage State
  const [state, dispatch] = useReducer(
    employeeReducer,
    initialState
  );

  // STEP 6: Provide Context Value
  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

// STEP 7: Create Custom Hook
export function useEmployees() {

  const context = useContext(EmployeeContext);

  if (context === null) {
    throw new Error(
      "useEmployees must be used inside EmployeeProvider"
    );
  }

  return context;
}
// creating a custom hook to use the EmployeeContext
export  function Custom_UseEmployee(){

  const context = useContext(EmployeeContext);
  if(context === null){
    throw new Error("useEmployees must be used inside EmployeeProvider");
  }
  return context;
}
