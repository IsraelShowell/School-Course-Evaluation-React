// This is a simple React application that uses the useState and useEffect hooks.

//useState is used to manage the state of the application.
//useEffect is used to perform side effects in function component.
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch("/members")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("Data fetched:", data);
      });
  }, []);
  //The empty dependency array [] means this effect will only run once, similar to componentDidMount in class components.

  return (
    <div>
      <h1>Members List</h1>
      {typeof data.members === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, index) => <p key={index}> {member} </p>)
      )}
    </div>
  );
}

export default App;
