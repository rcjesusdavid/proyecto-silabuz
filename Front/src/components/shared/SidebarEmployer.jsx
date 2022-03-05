import React from "react";

const Sidebar = () => {
  return (
    <>
      <div class="collapse" id="MobNav">
        <div class="dashboard-nav">
          <div class="dashboard-inner">
            <ul data-submenu-title="Main Navigation">
              <li>
                <a href="employer-dashboard.html">
                  <i class="lni lni-dashboard mr-2"></i>Inicio | Empresa
                </a>
              </li>
              <li>
                <a href="dashboard-post-job.html">
                  <i class="lni lni-files mr-2"></i>Publicar una Oferta
                </a>
              </li>
              <li>
                <a href="dashboard-manage-jobs.html">
                  <i class="lni lni-add-files mr-2"></i>Gestionar Ofertas
                </a>
              </li>
            </ul>
            <ul data-submenu-title="Mi Cuenta">
              <li>
                <a href="dashboard-my-profile-employer.html">
                  <i class="lni lni-user mr-2"></i>Mi Perfil
                </a>
              </li>
              <li class="active">
                <a href="dashboard-change-password.html">
                  <i class="lni lni-lock-alt mr-2"></i>Cambiar contraseña
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i class="lni lni-power-switch mr-2"></i>Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
