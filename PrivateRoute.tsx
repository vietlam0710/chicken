import { ReactNode } from "react"
import { Navigate } from "react-router-dom";

export interface IUserProps{
    children : ReactNode;
}

export default function PrivateRoute({children}:IUserProps) {
    if(!localStorage.getItem("name") && !localStorage.getItem("password")){
        return <Navigate to={"/"}/>;
    }
  return <>{children}</>
}
