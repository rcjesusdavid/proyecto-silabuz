import { React } from "react";
import { Link } from "react-router-dom";

const filters = [
  {
    label: "Inicio",
    componente: "/postulant-dashboard",
    icono: "lni lni-dashboard mr-2",
  },
  {
    label: "Aplicaciones a Ofertas",
    componente: "/postulant-applied-work-offers",
    icono: "lni lni-files mr-2",
  },
  // {
  //   label: "Ofertas Laborales Guardadas",
  //   componente: "",
  //   icono: "lni lni-add-files mr-2",
  // },
];

const filtersTwo = [
  {
    label: "Mi Perfil",
    componente: "/postulant-profile",
    icono: "lni lni-user mr-2",
  },
  {
    label: "Cambiar Contraseña",
    componente: "/change-pass-postulant",
    icono: "lni lni-lock-alt mr-2",
  },
  /*   {
    label: "Cerrar Sesión",
    componente: "",
    icono: "lni lni-power-switch mr-2",
  }, */
];

const SidebarPostulant = () => {
  return (
    <>
      <div className="collapse" id="MobNav">
        <div className="dashboard-nav">
          <div className="dashboard-inner">
            {/* <ul data-submenu-title="Main Navigation">
              {filters.map((filter, i) => {
                return (
                  <li key={"filters" + i}>
                    <Link to={filter.componente}>
                      <i className={filter.icono}></i>
                      {filter.label}
                    </Link>
                  </li>
                );
              })}
            </ul> */}
            <ul data-submenu-title="Mi Cuenta">
              {filtersTwo.map((filtertwo, j) => {
                return (
                  <li>
                    <Link to={filtertwo.componente}>
                      <i className={filtertwo.icono}></i>
                      {filtertwo.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarPostulant;
