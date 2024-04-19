import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const Navigate = useNavigate();
  useEffect(() => {
    let auth = localStorage.getItem("auth");
    if (!auth) {
      Navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}
export default Protected;
