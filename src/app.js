import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./pet";

// React 

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Maisie",
//       animal: "Cat",
//       breed: "British Shorthair",
//     }),
//   ]);
// };


// JSX

const App = () => {
  return (
    <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese"/>
    <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
    <Pet name="Maisie" animal="Cat" breed="British Shorthair"/>
  </div>
    );
  };

ReactDOM.render(React.createElement(App), document.getElementById("root"));
