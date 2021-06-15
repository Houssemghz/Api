import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h4>List of users :</h4>
      <div className="App">
        {user.map((user) => (
          <div className="box" key={user.id}>
            <h3>Profile</h3>
            <p>
              <i>Fullname :</i> {user.name}
            </p>
            <p>
              <i>Email :</i> {user.email}
            </p>
            <ul>
              <li>Address :</li>
              <ul>
                <li>
                  <i>Street : </i>
                  {user.address.street}
                </li>
                <li>
                  <i>Suite : </i>
                  {user.address.suite}
                </li>
                <li>
                  <i>City : </i>
                  {user.address.city}
                </li>
                <li>
                  <i>Zipcode : </i>
                  {user.address.zipcode}
                </li>
              </ul>
            </ul>
            <p>
              <i>Phone :</i> {user.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
