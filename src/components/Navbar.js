import React from "react";

const Navbar = ({ func, fileName, setShowFileName, showFileName }) => {
  return (
    <div className="navbar">
      <h1 className="navbar__brand">&lt;Code Snap /&gt;</h1>
      <h1
        className="navbar__fileName"
        onClick={() => {
          setShowFileName(!showFileName);
        }}
      >
        {fileName}.png
      </h1>
      <button className="navbar__download" onClick={func}>
        Download
      </button>
    </div>
  );
};

export default Navbar;
