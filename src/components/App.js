import { useState } from "react";

import Header from "./Header";
import AnimalCard from "./AnimalCard";

function App() {
  const [animal, updateAnimal] = useState();
  const [listAnimals, addToList] = useState([]);

  const selections = ["bird", "cat", "cow", "dog", "gator", "horse"];

  function createAnimalCards() {
    return listAnimals.map((an, i) => {
      return <AnimalCard key={i} type={an} />;
    });
  }

  return (
    <div>
      <Header
        updateAnimal={updateAnimal}
        curAnimal={animal}
        selections={selections}
        addToList={addToList}
        listAnimals={listAnimals}
      />

      {listAnimals ? (
        createAnimalCards()
      ) : (
        <p>Current Choices: Bird, Cat, Cow, Dog, Gator, Horse</p>
      )}
    </div>
  );
}

export default App;
