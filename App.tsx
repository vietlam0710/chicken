import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route  path="home" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}
