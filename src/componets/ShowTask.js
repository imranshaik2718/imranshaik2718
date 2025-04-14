import React, {useState}  from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function ShowTask({ tasks, setTasks }) {
  const TaskStyle = {
    width: "350px",
    borderLeft: "5px solid #1365dfaf",
  };

  const handleDelete = (id) => {
    const deletetask = tasks.filter((task) => task.id !== id);
    setTasks(deletetask);
  };

  const [selectedTasks, setSelectedTasks] = useState([]);


  const handleSelect = (id) =>{
    if(selectedTasks.includes(id)){
      setSelectedTasks(selectedTasks.filter((taskId )=>taskId !== id))
    }else{
      setSelectedTasks([...selectedTasks,id]);
    }
  };

  const deleteBtn = () => {
    const newTasks = tasks.filter((task) => !selectedTasks.includes(task.id));
    setTasks(newTasks);
    setSelectedTasks([]); 
  };
  

  return (
    <div className="bg-white p-4 rounded shadow-sm mx-auto mt-4 text-black">
      <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
        <div className="flex-grow-1 d-flex align-items-center">
          <span className="fw-semibold fs-6 user-select-none">Tasks</span>
          <span className="ms-2 bg-light text-secondary px-2 py-1 rounded-circle user-select-none">
            {tasks.length}
          </span>
        </div>
        <button
          onClick={deleteBtn}
          className="btn text-black fs-6 text-black"
        >
          Delete
        </button>
        <button
          onClick={() => setTasks([])}
          className="btn text-black fs-6 text-black"
        >
          Clear All
        </button>
      </div>
      <ul className="d-flex flex-wrap justify-content-around gap-3 list-unstyled px-1 ">
        {tasks.map((task) => (
          <li
            className="d-flex gap-2 p-3 border-bottom rounded shadow-sm text-black"
            style={TaskStyle}
          >
            <p className="flex-grow-1 d-flex flex-column mb-0">
              <span className="fs-5 pb-1">{task.name}</span>
              <span className="text-muted small">{task.date}</span>
            </p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                checked={selectedTasks.includes(task.id)}
                id="checkIndeterminate"
                onChange={() => handleSelect(task.id)}
              />
              
            </div>

            <i className="bi bi-pencil-square  fs-6 text-primary"></i>
            <i
              onClick={() => handleDelete(task.id)}
              className="bi bi-trash fs-6 text-danger"
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowTask;
