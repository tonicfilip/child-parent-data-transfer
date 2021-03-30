import React from "react";
import Child from "./Child";

function App() {
  const [childData, setChildData] = React.useState("");

  const clb = (data) => {
    setChildData(data);
  };

  return (
    <div className="App">
      <Child parentCallBack={clb} />
      PARENT: {childData}
    </div>
  );
}

export default App;
