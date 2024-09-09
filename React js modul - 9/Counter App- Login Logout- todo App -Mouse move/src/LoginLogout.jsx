import React, { useState } from "react";

export default function LoginLogout() {
  const [t, sett] = useState(true);
  let content = {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    textAlign: "center",

    // width: "400px",
  };
  let container = {
    backgroundColor: "#9ad5e5aa",
    padding: "10px",
    borderRadius: "10px",
  };

  let nav = {
    backgroundColor: "#646cff",
    borderRadius: "10px 10px 0 0 ",
    gap: "90px",
  };
  let main = {
    padding: "80px 100px",
    backgroundColor: "skyblue",
    color: "white",
    fontWeight: "700",
  };
  let navigation = {
    fontSize: "20px",
    paddingTop: "10px",
    paddingLeft: "20px",
    color: "white",
  };
  let button = {
    margin: "5px",
  };
  let footer = {
    backgroundColor: "#646cff",
    borderRadius: "0 0 10px 10px",
    alignItems: "center",
    padding: "20px",
    color: "white",
    fontWeight: "700",
  };
  let x;
  if (t) {
    x = (
      <div style={container}>
        <div className="content" style={content}>
          <div className="nav" style={nav}>
            <div style={navigation}> Navigation</div>
            <div>
              {" "}
              <button
                style={button}
                onClick={() => {
                  sett(false);
                }}
              >
                Login
              </button>
            </div>
          </div>
          <div className="main" style={main}>
            Public Views
          </div>
          <div className="footer" style={footer}>
            Footer
          </div>
        </div>
      </div>
    );
  } else {
    x = (
      <div style={container}>
        <div className="content" style={content}>
          <div className="nav" style={nav}>
            <div style={navigation}> Navigation</div>
            <div>
              {" "}
              <button
                style={button}
                onClick={() => {
                  sett(true);
                }}
              >
                LogOut
              </button>
            </div>
          </div>
          <div className="main" style={main}>
            Private Views
          </div>
          <div className="footer" style={footer}>
            Footer
          </div>
        </div>
      </div>
    );
  }
  return <>{x}</>;
}
