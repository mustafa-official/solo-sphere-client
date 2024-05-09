import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
