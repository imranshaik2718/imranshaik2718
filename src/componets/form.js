import React from "react";

const Form = ({ heading = "my heading", text, setText, tasks, setTasks }) => {
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    
  };

  const handleDown = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };


  const handleSubmit = (ali) => {
    ali.preventDefault();
  
    const date = new Date();
    const newTask = {
      id: Date.now(),
      name: text,
      date: date.toLocaleString(),
    };
  
    setTasks([...tasks, newTask]);
    setText("");
  
}


  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  return (
    <div className="Area">
      <div>
        <div className="mb-3">
          <h1>{heading}</h1>
          <textarea
            className="form-control"
            value={text}
            placeholder="rightText"
            onChange={handleOnChange}
            
            rows="8"
          />
          <button className="up-btn mx-1 my-2 bg-white rounded" onClick={handleUp}>
            Convert to upper case
          </button>
          <button className="down-btn mx-1 my-2 bg-white rounded" onClick={handleDown}>
            Convert to lower case
          </button>
          <button className="down-btn mx-1 my-2 bg-white rounded" onClick={handleClear}>
            Clear text
          </button>
          <button className="down-btn mx-1 my-2 bg-white rounded" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
