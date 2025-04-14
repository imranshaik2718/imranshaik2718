import React, { useState, useRef } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import Form from "./componets/form";
import ShowTask from "./componets/ShowTask";


function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const [allArea, newArea] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const bodyRef = useRef(null); 

  const chnageBtn  = (cls) => {

    const elements = document.querySelectorAll('.app-theme-target');
  const bgClasses = ['bg-primary', 'bg-danger', 'bg-success', 'bg-warning', 'bg-secondary'];

  elements.forEach(el => {
    el.classList.remove(...bgClasses);
    el.classList.add(`bg-${cls}`);
  });
debugger
    if(cls== null ){
      if (allArea.color === "black") {
        newArea({
          color: "white",
          backgroundColor: "black",
        });
      } else {
        newArea({
          color: "black",
          backgroundColor: "white",
        });
      }
    }
  };


  return (
    <>
      <div className="body h-screen app-theme-target" ref={bodyRef} style={allArea}>
        <Navbar title="Taskmate" chnageBtn={chnageBtn} allArea={allArea} />
        <div className="container py-5">
          <Form heading="Enter the Task"  text={text} setText={setText} setTasks={setTasks} tasks={tasks} />
          <ShowTask  tasks={tasks}  setTasks={setTasks}/>
        </div>
        
      </div>
    </>
  );
}

export default App;
