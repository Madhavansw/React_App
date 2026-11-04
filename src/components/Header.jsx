import { useAuth } from "../context/AuthContext";

function Header() {

  const { user, logout } = useAuth();

  return (
    <div>
      <h2>My Application</h2>

      {user ? (
        <>
          <h3>Welcome, {user.name}</h3>

          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <h3>Please Login</h3>
      )}

    </div>
  );
}

export default Header;