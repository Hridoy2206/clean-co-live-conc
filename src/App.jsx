import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { publicRoute } from "./routes/publicRoute"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import privateRoute from "./routes/privateRoute"
import Dashboard from "./pages/Dashboard/Dashboard";
import AdmminRoute from "./authentication/AdmminRoute";
import AddService from "./pages/Dashboard/AddService";
import AddAdmin from "./pages/Dashboard/AddAdmin";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Navbar>
      {/* Public route */}
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {/* Private Route */}
        <Route element={<PrivateRoute />}>
          {privateRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>

        {/* Admin Check */}
        <Route element={<AdmminRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add-service" element={<AddService />} />
            <Route path="add-admin" element={<AddAdmin />} />
          </Route>
        </Route>
      </Routes>
    </Navbar>
  )
}

export default App
