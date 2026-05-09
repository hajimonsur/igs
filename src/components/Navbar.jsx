import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary py-2">
      <div className="container d-flex justify-content-center justify-content-lg-start">
        <a className="navbar-brand m-0 p-0" href="/">
          <img
            src="NEWIGSLOGO.png"
            alt="Iponri Grammar School Logo"
            width="200"
            height="90"
            className="d-inline-block align-middle"
            style={{ objectFit: "contain" }}
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
