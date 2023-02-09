import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/Auth/context.js";

import swal from "sweetalert";

function Header() {
  const authState = useContext(AuthContext);
  const { user, closeSesion } = authState;
  const navigate = useNavigate();

  const handlerButtonCloseSession = () => {
    swal({
      title: "Are you sure close session?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willClose) => {
      if (willClose) {
        swal({
          title: "Sesion closed",
          icon: "success",
        });
        closeSesion();
        navigate("/login");
      }
    });
  };

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hello <span>{user.name}</span>
        </p>
      ) : (
        <p className="nombre-usuario">Hello</p>
      )}

      <nav className="nav-principal">
        <button
          className="btn btn-primario"
          onClick={() => handlerButtonCloseSession()}
        >
          Close Session
        </button>
      </nav>
    </header>
  );
}

export default Header;
