import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/signup/SignUp";
import Pagenotfound from "./pages/PageNotFound";
import SignIn from "./pages/auth/signIn/SignIn";
import TermPolicy from "./pages/Term-Policy";
import HomePage from "./pages/HomePage";
import Protected from "./pages/Protected";
import ForgetPassword from "./pages/auth/forgetpassword/ForgetPassword";
import ShowInvoice from "./pages/invoice/showinvoice/ShowInvoice";
import CreateInvoice from "./pages/invoice/createinvoice/CreateInvoice";
import UpdateInvoice from "./pages/invoice/updateinvoce/UpdateInvoice";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(248 250 252)" }} className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/term-policy" element={<TermPolicy />} />
        <Route
          path="/get-invoice/:slug"
          element={<Protected Component={ShowInvoice} />}
        ></Route>
        <Route
          path="/update-invoice/:slug"
          element={<Protected Component={UpdateInvoice} />}
        ></Route>
        <Route
          path="/dashboard"
          element={<Protected Component={HomePage} />}
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
