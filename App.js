import React from "react";
import ReactDOM from "react-dom/client";
// //One Element in React
const heading = React.createElement(
    "h1", // HTML Tag
    {id:"heading", xyz:"abc"}, // Attributes Object
     "Hello, World From React! " // Content, children that goes inside the tag.
    ); // React Element Creation

console.log(heading); // object representation of the React Element.
const root = ReactDOM.createRoot(document.getElementById("root")); // React Root Creation

//While rendering it converting object to HTML Element and putting it inside the root div.
root.render(heading); // Rendering React Element to the Root
