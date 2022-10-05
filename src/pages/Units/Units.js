import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadUsersStart } from "../../redux/actions";
import { Link } from "react-router-dom";

const Units = () => {
  const { units, loading } = useSelector((state) => state.units);
  const allAges = ["Dark", "Feudal", "Castle", "Imperial"];
  const [selectedAge, setselectedAge] = useState("All");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsersStart());
  }, [dispatch]);

  if (loading) {
    return <span className="visually-hidden">Loading...</span>;
  }

  const handleClick = (age) => setselectedAge(age);
  return (
    <div className="container">
      <div className="button-groups">
        <button onClick={() => handleClick("All")}>All</button>
        {allAges.map((age) => (
          <button
            onClick={() => handleClick(age)}
            key={age}
            className="btn-color-primary"
          >
            {age}
          </button>
        ))}
      </div>
      {units?.units
        ?.filter(
          (product) => selectedAge === "All" || product.age === selectedAge
        )
        .map((item, index) => {
          return (
            <tr key={index.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td> cost</td>
              <td>
                <Link to={`/unitDetail/${item.id}`}>detail</Link>
              </td>
            </tr>
          );
        })}
    </div>
  );
};

export default Units;
