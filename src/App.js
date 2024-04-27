import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Pagenotfound from "./pages/PageNotFound";
import SignIn from "./pages/SignIn";
import TermPolicy from "./pages/Term-Policy";
import DashBoard from "./pages/DashBoard";
import Protected from "./pages/Protected";
import CheckOut from "./pages/CheckOut";
import ForgetPassword from "./pages/ForgetPassword";
import LastPage from "./pages/LastPage";
import CreateInvoice from "./pages/CreateInvoice";
import UpdatePages from "./pages/UpdatePages";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(248 250 252)" }} className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/term-policy" element={<TermPolicy />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route
          path="/get-invoice/:slug"
          element={<Protected Component={LastPage} />}
        ></Route>
        <Route
          path="/update-invoice/:slug"
          element={<Protected Component={UpdatePages} />}
        ></Route>
        <Route
          path="/dashboard"
          element={<Protected Component={DashBoard} />}
        ></Route>
        <Route
          path="/create-invoice"
          element={<Protected Component={CreateInvoice} />}
        ></Route>

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
