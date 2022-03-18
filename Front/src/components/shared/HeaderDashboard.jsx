import { React, useEffect, useState } from "react";

const HeaderDashboard = () => {
  const [name, setName] = useState("");
  const [dashboard, setDashboard] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setDashboard(localStorage.getItem("dashboard"));
  }, [name]);

  return (
    <>
      <div className="dashboard-tlbar d-block mb-5">
        <div className="row">
          <div className="colxl-12 col-lg-12 col-md-12">
            <h1 className="ft-medium">Hola, {name}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#" className="theme-cl">
                    Area de trabajo
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDashboard;
