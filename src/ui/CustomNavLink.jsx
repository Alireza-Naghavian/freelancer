import React from "react";
import { NavLink } from "react-router-dom";

function CustomNavLink({ address, children }) {
  return (
    <li>
      <NavLink
        to={address}
        className={({ isActive }) =>
          isActive
            ? "bg-primary-200 text-primary-900 rounded-lg px-2 py-1.5 flex items-center gap-x-2 "
            : "deActive--nav-link"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
