import { useState } from "react";

function Header({
  updateAnimal,
  curAnimal,
  selections,
  addToList,
  listAnimals,
}) {
  const [curStyle, changeStyle] = useState("red");

  function checkAnimal(ev) {
    //If the entered animal is inside our database of animals
    if (selections.includes(ev.target.value.toLowerCase())) {
      //Add the animal to the animal array
      updateAnimal(ev.target.value);
    } else {
      updateAnimal("");
    }
  }

  function checkSubmission() {
    if (curAnimal !== "") {
      addToList([...listAnimals, curAnimal]);
    } else {

      //Notify user of invalid submission
    }
  }

  return (
    <div className="header__container">
      <h1 className="header__heading-primary">Animal Search</h1>
      <input
        type="text"
        className="header__input"
        placeholder="Cow, bird, horse..."
        onChange={(e) => checkAnimal(e)}
      />
      <button className="header__submit" onClick={() => checkSubmission()}>
        Search
      </button>
    </div>
  );
}

export default Header;
