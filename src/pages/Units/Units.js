import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadUnitsStart } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./Units.scss";

const Units = () => {
  const { units, loading } = useSelector((state) => state.units);
  const allAges = ["Dark", "Feudal", "Castle", "Imperial"];
  const [selectedAge, setselectedAge] = useState("All");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUnitsStart());
  }, [dispatch]);
  
  if (loading) {
    return <span className="visually-hidden">Loading...</span>;
  }

  const handleClick = (age) => setselectedAge(age);
  return (
    <div className="container">
      <div className="buttons-age">
        Filter By Age :<button className="filter-btn" onClick={() => handleClick("All")}>
          All
        </button>
        {allAges.map((age) => (
          <button
            onClick={() => handleClick(age)}
            key={age}
            className="filter-btn"
          >
            {age}
          </button>
        ))}
      </div>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Cost</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>

        {units?.units
          ?.filter(
            (product) => selectedAge === "All" || product.age === selectedAge
          )
          .map((item, index) => {
            return (
              <tbody key={index} className="table-body">
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                    {item.cost === null ? "-" : ""}
                    {item.cost?.Food === undefined ? "" : <> Food: {item.cost?.Food}  </>}
                    {item.cost?.Wood === undefined ? "" : <> Wood: {item.cost?.Wood}  </>}
                    {item.cost?.Gold === undefined ? "" : <> Gold: {item.cost?.Gold}  </>}
                  </td>
                  <td>
                    <Link className="detail-btn" to={`/unitDetail/${item.id}`}>
                      detail
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default Units;
