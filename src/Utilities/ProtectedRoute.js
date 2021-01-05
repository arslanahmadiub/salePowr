// import React from "react";
// import { Redirect, Route } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";

// export default function ProtectedRoute({ component: Component, ...rest }) {
//   //   const { user } = React.useContext(AuthContext);
//   //   let user = localStorage.getItem("token");
//   let user = null;
//   console.log(user);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => {
//         if (user !== null) return <Component />;

//         return (
//           <Redirect
//             to={{
//               // pathname: '/user-authentication',
//               pathname: "/",
//               //   state: { from: location },
//             }}
//           />
//         );
//       }}
//     />
//   );
// }

import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      exact
      path={path}
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token") === null) {
          return <Redirect to="/" />;
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
