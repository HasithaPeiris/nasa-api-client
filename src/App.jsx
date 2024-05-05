import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Background, Nav, PrivateRoute } from "./components";
import { Home, NasaApod, Map, Welcome, LoginPage, RegisterPage } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/apod" element={<NasaApod />} />
          </Route>
        </Routes>
      </Router>
      <Background className="motion" />
    </div>
  );
}

export default App;
