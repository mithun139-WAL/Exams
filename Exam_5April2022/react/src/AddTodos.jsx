/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
import React, {useState} from 'react';
import axios from 'axios';

export default function AddTodos() {
  const [todos, setTodos] = useState([]);
  const addTodo = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const status = event.target.status.value;

    axios
      .get(`/sqtodos/create/${title}/${description}/${status}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const viewTodo = () => {
    axios
      .get('/sqtodos/')
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container col-lg-6 col-md-8 mx-auto my-5">
      <h1 className="text-center">Add todo</h1>
      <form onSubmit={addTodo} className="col-lg-8 col-md-10 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter todo item"
          className="form-control my-3"
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="form-control my-3"
        />
        <select name="status" className="form-control my-3">
          <option value={1}>Complete</option>
          <option value={0}>InComplete</option>
        </select>
        <div className="my-5">
          <button type="submit" className="btn btn-primary col-12">
            Add todo
          </button>
        </div>
      </form>
      <div className="text-center">
        <h1>List todos</h1>
        <button
          type="submit"
          className="btn btn-dark col-8 my-5"
          onClick={viewTodo}
        >
          View todos
        </button>
        <table className="w-100">
          <thead className="bg-dark text-white">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((val) => {
              return (
                <tr>
                  <td>{val.title}</td>
                  <td>{val.description}</td>
                  <td>{val.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
