import axios from "axios";
import React, { useState, useEffect } from "react";
import {useHistory ,useParams} from 'react-router-dom';

const EditUser = () => {
  let history = useHistory();
  const {id} = useParams();
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

  useEffect(() =>{
    loadUsers()
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/")
  };

  const loadUsers =async() =>{
    const result = await axios.get(`http://localhost:3001/users/${id}` );
    console.log(result)
  }
  return (
    <div className="container p-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit a user</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="mb-3">
            <input type="email" placeholder="Name" className="form-control" id="exampleInputEmail1" name="name" value={Name}
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
          <button type="submit" className="btn btn-danger">Update User</button>
        </form>
      </div>
    </div>

  );
};

export default EditUser;