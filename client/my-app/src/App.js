import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";

import Dashboard from "./Components/DashBoard/DashBoard.jsx";
import RouteController from "./Components/RouteHandler/RouteController.jsx";

function App() {
  let {id}=useParams();
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<RouteController />}></Route>
        <Route
          path="/postCompanyDetails"
          element={<RouteController />}
        ></Route>
        <Route
          path="/viewCompanyDetails/:id"
          element={<RouteController />}
        ></Route>
        <Route
          path="/updateCompanyDetails/:id"
          element={<RouteController />}
        ></Route>
        <Route
          path="/deleteCompanyDetails/:id"
          element={<RouteController />}
        ></Route>
        <Route
          path="/postUserDetails"
          element={<RouteController />}
        ></Route>
        <Route
          path="/viewUserDetails/:id"
          element={<RouteController />}
        ></Route>
        <Route
          path="/updateUserDetails/:id"
          element={<RouteController />}
        ></Route>
        <Route
          path="/deleteUserDetails/:id"
          element={<RouteController />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
