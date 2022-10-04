import React from "react";
import CrudTableRow from "./CrudTableRow";
import Table from "react-bootstrap/Table";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3 className="mt-5 text-center mb-5">Tabla de datos</h3>
      <Table striped bordered hover className="table table-dark table-striped">
        <thead>
          <tr className="table-dark text-center">
            <th>Nombre</th>
            <th>Signo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr className="table-dark">
              <td className="table-dark fw-bold text-center" colSpan="3">
                <h3>Sin datos</h3>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudTable;
