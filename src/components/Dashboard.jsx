import { useAuth } from "../context/AuthContext";

function Dashboard() {

  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>

      {user ? (
        <h3>Welcome to your Dashboard, {user.name}</h3>
      ) : (
        <h3>Please log in to continue.</h3>
      )}

    </div>
  );
}

export default Dashboard;