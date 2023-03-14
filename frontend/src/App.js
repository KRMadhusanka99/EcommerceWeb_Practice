import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../src/layout/Navbar"
import Home from "./pages/Home";
import AddUser from "./users/AddUser"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser"

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/adduser" element={<AddUser/>}></Route>
              <Route exact path="/edituser/:id" element={<EditUser />} />
              <Route exact path="/viewuser/:id" element={<ViewUser />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
