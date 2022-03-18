import { React, useState, useEffect } from "react";
import CJOBS_API from "../../utils/consolejobsAPI";
import { useParams } from "react-router-dom";

const ManageWorksOfferContent = () => {
  const [datos, setDatos] = useState([]);

  const { id_user } = useParams();

  useEffect(() => {
    CJOBS_API.get(`/job/list`).then((res) => {
      setDatos(res.data);

      console.log(res);
      console.log(datos);
    });
  }, []);

  return (
    <>
      <div className="dashboard-widg-bar d-block">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="mb-4 tbl-lg rounded overflow-hidden">
              <div className="table-responsive bg-white">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Titulo</th>
                      <th scope="col">Fecha de publicacion</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="dash-title">
                          <h4 className="mb-0 ft-medium fs-sm">
                            {" "}
                            Python Developer
                          </h4>
                        </div>
                      </td>
                      <td>18 - 03 - 2022</td>
                      <td>Activa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ManageWorksOfferContent;
