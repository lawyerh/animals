import { useState } from "react";

function Header({
  searchForAnimal,
  curAnimal,
  selections,
  addToList,
  listAnimals,
}) {
  const [curStyle, changeStyle] = useState("red");

  return (
    <div className="header__container">
      <h1 className="header__heading-primary">Animal Search</h1>
      <input
        type="text"
        className="header__input"
        placeholder="Cow, bird, horse..."
        onChange={(e) => {
          if (selections.includes(e.target.value.toLowerCase())) {
            changeStyle("green");
            searchForAnimal(e.target.value);
          } else {
            changeStyle("red");
          }
        }}
      />
      <button
        className="header__submit"
        onClick={() => {
          addToList([...listAnimals, curAnimal]);
          console.log(listAnimals);
        }}
        style={{
          backgroundColor: curStyle,
          color: "white",
          fontWeight: 700,
          fontSize: 20,
          textTransform: "uppercase",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Header;
