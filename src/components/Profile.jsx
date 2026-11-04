import { useAuth } from "../context/AuthContext";

function Profile() {

  const { user } = useAuth();

  return (
    <div>
      <h2>User Profile</h2>

      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
        </>
      ) : (
        <p>User is not logged in.</p>
      )}

    </div>
  );
}

export default Profile;