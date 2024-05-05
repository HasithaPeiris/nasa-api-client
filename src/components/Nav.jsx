import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const Nav = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <nav className="p-4 sm:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/home">
            <img src="/logo.png" alt="Logo" className="h-8 sm:h-8 mr-4" />
          </Link>
        </div>
        <div className="flex items-center">
          {userInfo ? (
            <>
              <div>
                Hello! <span className="font-semibold">{userInfo.name}</span>
              </div>
              <button
                onClick={logoutHandler}
                className="bg-primary hover:bg-button-hover text-white font-semibold px-4 py-2 rounded ml-4"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/">
                <button className=" hover:bg-button-hover text-white font-semibold px-4 py-2 rounded mr-2 border-2 border-primary">
                  Login
                </button>
              </Link>
              <Link to="register-page">
                <button className="bg-primary hover:bg-button-hover text-white font-semibold px-4 py-2 rounded border-2 border-primary">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
