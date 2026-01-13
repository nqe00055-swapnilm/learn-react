
// //One Element in React
// const heading = React.createElement(
//     "h1", // HTML Tag
//     {id:"heading", xyz:"abc"}, // Attributes Object
//      "Hello, World From React!" // Content, children that goes inside the tag.
//     ); // React Element Creation

// console.log(heading); // object representation of the React Element.
// const root = ReactDOM.createRoot(document.getElementById("root")); // React Root Creation

// //While rendering it converting object to HTML Element and putting it inside the root div.
// root.render(heading); // Rendering React Element to the Root


// //Nested Elements in React
// /* 
//      <div id="parent">
//         <div id="child">
//             <h1>Hello, World From React!</h1>
//         </div>
//      </div>
// */


// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement(
//             "h1",
//             {},
//             "I'm a nested H1 tag"
//         )
//     )
// );

// console.log(parent); // object representation of the React Element.
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// //While rendering it converting object to HTML Element and putting it inside the root div.
// root2.render(parent);



// Creating sibling elements using React Fragments
/*
    <div id="parent">       
        <div id="child1">
            <h1>Hello, World From React!</h1>
            <h2>This is child 1</h2>
        </div>
        <div id="child2">
            <h1>Hello, World From React Again!</h1>
            <h2>This is child 2</h2>
        </div>
    </div>
*/
const parent2 = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [React.createElement("h1",{ id:"div1h1"},"I'm the first child H1 tag"), React.createElement("h2",{id:"div1h2"},"I'm the first child H2 tag")]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [React.createElement("h1",{ id:"div2h1"},"I'm the second child H1 tag"), React.createElement("h2",{id:"div2h2"},"I'm the second child H2 tag")]
        )
    ]
);
console.log(parent2); // object representation of the React Element.
const root3 = ReactDOM.createRoot(document.getElementById("root"));
//While rendering it converting object to HTML Element and putting it inside the root div.
root3.render(parent2);