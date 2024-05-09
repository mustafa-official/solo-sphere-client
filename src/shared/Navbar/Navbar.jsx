import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser } = useAuth();

  const navigate = useNavigate();
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        navigate("/login");
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  return (
    <header className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <Link to="/" className="font-bold">
            SoloSphere
          </Link>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title="">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/all-job" className="justify-between">
                  All Job
                </Link>
              </li>
              <li>
                <Link to="/addJob" className="justify-between">
                  Add Job
                </Link>
              </li>
              <li>
                <Link to={`/my-posted-job/${user?.email}`}>My Posted Jobs</Link>
              </li>
              <li>
                <Link to="/my-bids">My Bids</Link>
              </li>
              <li>
                <Link to="/bid-request">Bid Requests</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={handleLogOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
