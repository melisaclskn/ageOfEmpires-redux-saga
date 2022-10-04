import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadUsersStart } from "../../redux/actions";
import { Link } from "react-router-dom";

const Units = () => {
  const { units, loading } = useSelector((state) => state.units);
  console.log(units, "userssssss");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(loadUsersStart()));
    console.log(dispatch(loadUsersStart()));
    dispatch(loadUsersStart());
  }, [dispatch]);

  if (loading) {
    return <span className="visually-hidden">Loading...</span>;
  }

  return (
    <div className="container">
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Address</th>
        <th scope="col">Action</th>
      </tr>
      {units?.units?.map((item, index) => (
        <div key={index}>
          <tr>
            <td>{item.name}</td>
            <td>
              <Link to={`/userInfo/${item.id}`}>detail</Link>
            </td>
          </tr>
        </div>
      ))}
    </div>
  );
};

export default Units;
