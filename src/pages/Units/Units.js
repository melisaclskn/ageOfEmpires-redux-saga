import React, { useEffect } from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import {  loadUsersStart } from "../../redux/actions";
import { Link } from "react-router-dom";

const Units = () => {
  const { users, loading } = useSelector((state) => state.units);
  console.log(users,"userssssss")
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(loadUsersStart()));
    console.log(dispatch(loadUsersStart()));
    dispatch(loadUsersStart());
  }, [dispatch]);


  if (loading) {
    return (
      <MDBSpinner role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }

  return (
    <div className="container" >
      <MDBTable>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        {
          users?.units?.map((item, index) => (
            
            <MDBTableBody>
              <tr>
                <td>{item.name}</td>
                <td>
                
                  <Link to={`/userInfo/${item.id}`}>
                    detail
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
};

export default Units;
