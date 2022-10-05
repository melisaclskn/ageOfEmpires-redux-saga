import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UnitDetail.scss";
function UnitDetail() {
  const { units } = useSelector((state) => state.units);
  const { id } = useParams();
  const singleUnit = units.units.find((item) => item.id === Number(id));
  console.log(singleUnit, "single");
  return (
    <div className="container">
      <h1 className="title-name">{singleUnit.name} </h1>
      <table className="table table-striped">
        <tbody className="table-header">
          <tr>
            <th scope="col">id</th>
            <td>{singleUnit.id}</td>
          </tr>
          <tr>
            <th scope="col">Name</th>
            <td>{singleUnit.name}</td>
          </tr>
          <tr>
            <th scope="col">Description</th>
            <td>{singleUnit.description}</td>
          </tr>
          <tr>
            <th scope="col">Build Time</th>
            <td>{singleUnit.build_time}</td>
          </tr>
          <tr>
            <th scope="col">Reload Time</th>
            <td>{singleUnit.reload_time}</td>
          </tr>
          <tr>
            <th scope="col">Hit Points</th>
            <td>{singleUnit.hit_points}</td>
          </tr>
          <tr>
            <th scope="col">Attack</th>
            <td>{singleUnit.attack}</td>
          </tr>
          <tr>
            <th scope="col">Accuracy</th>
            <td>{singleUnit.accuracy}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UnitDetail;
