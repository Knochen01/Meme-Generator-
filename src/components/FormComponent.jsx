import React from "react";

export default function FormComponent() {
  const [formData, setFormData] = React.useState({
    Nasty: false,
    Old: false,
    radioButtonValue: "NOTHING",
    favoriteColor: "",
  });
  console.log(formData.favoriteColor);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thank you for filling out the Form");
  };

  return (
    <div>
      <h1>Forms</h1>

      <form onSubmit={handleSubmit}>
        <h4>Checkboxes</h4>
        <input
          type="checkbox"
          name={"Nasty"}
          checked={formData.Nasty}
          onChange={handleChange}
        />
        <label htmlFor="">Is it Nasty</label>
        <br />
        <input
          type="checkbox"
          name={"Old"}
          checked={formData.Old}
          onChange={handleChange}
        />
        <label htmlFor="">Are you older than 65?</label>
        <hr />
        <br />
        <h4>RadioButton</h4>
        <input
          type="radio"
          id="America"
          onChange={handleChange}
          value={"America"}
          name={"radioButtonValue"}
        />
        <label htmlFor="America">America</label>
        <input
          type="radio"
          id="Germany"
          onChange={handleChange}
          value={"Germany"}
          name={"radioButtonValue"}
        />
        <label htmlFor="Germany">Germany</label>
        <input
          type="radio"
          id="Japan"
          onChange={handleChange}
          value={"Japan"}
          name={"radioButtonValue"}
        />
        <label htmlFor="Japan">Japan</label>
        <h4>Select</h4>
        <label htmlFor="color">What is your favorite Color</label>
        <select
          id="color"
          value={formData.favoriteColor}
          onChange={handleChange}
          name="favoriteColor"
        >
          <option value="">--Choose Color--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
}
