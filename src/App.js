import React, { useEffect } from "react";
import Child from "./Child";

function App() {
  const [childData, setChildData] = React.useState("");
  const [_data, setData] = React.useState();
  const API = `https://jsonplaceholder.typicode.com/todos/1`;

  // useEffect(() => {
  //   setChildData()

  //   fetch(todo)
  //     .then((res) => res.json())
  //     .then((results) => {
  //       setAppState({ loading: false, results: results });
  //     });
  // }, [setAppState]);

  const getData = (ID) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${ID}`)
      .then((res) => res.json())
      .then((results) => {
        setData(results);
      });
  };

  return (
    <div className="App">
      <Child
        onChange={() => console.log("HHH")}
        parentCallback={(data) => {
          setChildData(data);
          getData(data);
        }}
      />
      PARENT: {childData}
      <br />
    </div>
  );
}

export default App;
