import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadUsersStart } from "../../redux/actions";
import { Link } from "react-router-dom";

const Units = () => {
  const { units, loading } = useSelector((state) => state.units);
  console.log(units, "unit detail page");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsersStart());
  }, [dispatch]);
  if (loading) {
    return <span className="visually-hidden">Loading...</span>;
  }
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Costs</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          {units?.units?.map((item, index) => (
            <tr key={index.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td> cost</td>
              <td>
                <Link to={`/unitDetail/${item.id}`}>detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Units;
