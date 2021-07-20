import axios from "axios";
import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const { Name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    history.push("/")
  }
  return (
    <div className="container p-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a user</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="mb-3">
            <input type="text" placeholder="Name" className="form-control" id="name" name="name" value={Name}
              onChange={e => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="UserName" className="form-control" id="UserName" name="userName" value={username}
              onChange={e => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <input type="email" placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={e => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Phone" className="form-control" id="phone" name="phone" value={phone} onChange={e => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Website" className="form-control" id="website" name="website" value={website} onChange={e => onInputChange(e)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  );
};

export default AddUser;