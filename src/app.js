import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./pet";


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Maisie",
      animal: "Cat",
      breed: "British Shorthair",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
