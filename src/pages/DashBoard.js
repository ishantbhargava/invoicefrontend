import React from "react";
import UserInfoandStats from "../components/UserInfoandStats";
import InvoiceDashboard from "../components/InvoiceDashboard";

function DashBoard() {
  return (
    <div
      className="d-flex flex-576"
      style={{ height: "100vh", backgroundColor: "rgb(248 250 252)" }}
    >
      <UserInfoandStats />
      <InvoiceDashboard />
    </div>
  );
}

export default DashBoard;
