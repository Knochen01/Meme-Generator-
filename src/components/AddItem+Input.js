import React from "react";
import ReactDOM from "react-dom";

function App() {
  let things = ["Step1", "Step2"];
  const [value, setValue] = React.useState("New Value");
  const [newValue, setNewValue] = React.useState(value);
  const [newArrayItem, setNewArrayItem] = React.useState(["Step1", "Step2"]);

  function addItem() {
    addToArray(value);
  }
  function handleChange(e) {
    setValue(e.target.value);
  }

  function addToArray(newValue) {
    setNewArrayItem(function (prevArrayValue) {
      return [...prevArrayValue, newValue];
    });
  }

  let thingElements = newArrayItem.map((item, key) => {
    return <p key={key}>{item}</p>;
  });

  return (
    <div>
      <input
        className="inputBox"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button onClick={addItem}>Add Item</button>
      {thingElements}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
