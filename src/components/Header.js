import React from "react";
import byuLogoText from "../assets/byu-logo-text.png";
import { useAuth } from "../utils/AuthContext";
import { useBanner } from "../utils/BannerContext";

const Header = () => {
  const { loggedIn, logOut } = useAuth();
  const { clearMsg } = useBanner();

  return (
    <div
      className="d-flex w-100 p-2 pt-3 mx-auto flex-column"
      style={{ maxWidth: "60em" }}
    >
      <header>
        <h3 className="float-left">
          <img
            src={byuLogoText}
            alt="Silver Fund Logo"
            style={{
              height: "29px",
              paddingBottom: "6px",
              paddingRight: "8px",
            }}
            id="byu-text"
          />
          Silver Fund
        </h3>
        <nav className="nav float-right">
          {loggedIn && (
            <button
              type="button"
              className="btn white-btn signout-btn py-1"
              onClick={() => {
                clearMsg();
                logOut();
              }}
            >
              Log Out
            </button>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
