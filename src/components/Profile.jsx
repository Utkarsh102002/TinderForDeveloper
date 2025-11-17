import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((store) => store.user);

  if (!user) return <h1>Loading...</h1>;

  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold">
        {user.firstName} {user.lastName}
      </h1>
      <p>{user.about}</p>

      <Link to="/profile/edit">
        <button className="btn btn-primary mt-4">Edit Profile</button>
      </Link>
    </div>
  );
};

export default Profile;
