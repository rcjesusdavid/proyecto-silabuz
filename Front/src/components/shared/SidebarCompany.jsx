import React from "react";
import { Link } from "react-router-dom";

const filters = [
  /* {
    label: "Inicio",
    componente: "/company-dashboard",
    icono: "lni lni-dashboard mr-2",
  }, */
  {
    label: "Publicar Oferta Laboral",
    componente: "/post-work-offer",
    icono: "lni lni-files mr-2",
  },
  {
    label: "Gestión de Ofertas Laborales",
    componente: "/manage-work-offers/",
    icono: "lni lni-add-files mr-2",
  },
];

const filtersTwo = [
  {
    label: "Mi Perfil",
    componente: "/company-profile",
    icono: "lni lni-user mr-2",
  },
  {
    label: "Cambiar Contraseña",
    componente: "/change-pass-company",
    icono: "lni lni-lock-alt mr-2",
  },
  /*   {
    label: "Cerrar Sesión",
    componente: "",
    icono: "lni lni-power-switch mr-2",
  }, */
];

const SidebarCompany = () => {
  return (
    <>
      <div className="collapse" id="MobNav">
        <div className="dashboard-nav">
          <div className="dashboard-inner">
            <ul data-submenu-title="Main Navigation">
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
            </ul>
            <ul data-submenu-title="Mi Cuenta">
              {filtersTwo.map((filtertwo, j) => {
                return (
                  <li key={"filterstwo" + j}>
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

export default SidebarCompany;
