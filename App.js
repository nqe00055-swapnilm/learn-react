import React from "react";
import ReactDOM from "react-dom/client";

//JSX Element
//JSX is not HTML. It is syntactic sugar coated over React.createElement()
const heading = (<h1 className="heading">Hello World from React using JSX</h1>);

//React Component
//1. Functional Component - new way
/*
const HeadingComponent = () => {
    return <h1>Hello from Functional Component</h1>;
}
*/
//2. Class Component - old way
/*
class HeadingComponent extends React.Component {
    render() {
        return <h1>Hello from Class Component</h1>;
    }
}
*/

//Using Functional Component - Function component means it is a function which returns JSX
// const jsxHeading = () => <h1 className="heading">Hello from Functional Component</h1>;
const TitleComponent = () => (
     <h1 className="heading">Hello from Title Component</h1>
);


const normalVariable = (
    <h3>This is a normal variable which contains JSX element</h3>
);
//component composition - combining multiple components
//Using TitleComponent inside HeadingComponent
//Using normal variable inside component
//JSX will sanitize the code to avoid XSS attacks like below
// const normalVariable = (
//     <h3>This is a normal variable which contains JSX element <script>alert("Hacked")</script></h3>
// );
const HeadingComponent = () => (
    <div id="container">
        <TitleComponent/> 
        {/* <TitleComponent></TitleComponent> */}
        {/* {TitleComponent()} */}
        {normalVariable}  
        
        <h1 className="heading">Hello from Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(HeadingComponent());
root.render(<HeadingComponent />);
