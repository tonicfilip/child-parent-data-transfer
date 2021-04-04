import axios from "axios";
import React, { useEffect } from "react";
import Child from "./Child";

function App() {
  const [childData, setChildData] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Child
        onChange={() => console.log("HHH")}
        parentCallback={(data) => {
          setChildData(data);
        }}
      />
      PARENT: {childData}
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            title: {post.title},
            <br />
            completed: {post.completed}
            userId: {post.userId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
