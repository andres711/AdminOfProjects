import { useContext,useEffect } from "react";

import AuthContext from "../Context/Auth/context.js";

function Header() {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  
  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hello <span>{user.name}</span>
        </p>
      ) : (
        <p className="nombre-usuario">
          Hello
        </p>
      )}

      <nav className="nav-principal">
        <a href="http://localhost:3000/closeSesion">Close Session</a>
      </nav>
    </header>
  );
}

export default Header;
