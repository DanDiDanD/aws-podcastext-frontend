import React from "react";
import { Route, Redirect } from "react-router-dom";
import { RUTAS } from "../config/constantes";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        true? <Component {...props} /> :<Component {...props} />// Si está logueado te redirecciona a asistencia
      }
    />
  );
};

export default PublicRoute;
