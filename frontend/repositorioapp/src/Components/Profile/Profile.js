import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "USER_LOGOUT" }); // Dispatch a Redux action to update the global state
    navigate("/"); // Navigate the user to the homepage
  };

  return (
    <div className="h-100 w-100">
      <div className="p-3">
        <button onClick={handleLogout} className="btn btn-danger w-25">
          Logged out
        </button>
      </div>
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <p className="m-0">Welcome</p>
      </div>
    </div>
  );
};

export default Profile;
