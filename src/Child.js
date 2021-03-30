import React, { useEffect } from "react";

const Child = (props) => {
  const [data, setData] = React.useState("");

  const changeFunc = (_data) => {
    setData(_data);
    props.parentCallBack(data);
  };

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          changeFunc(event.target.value);
        }}
      />
      <div> child: {data}</div>
    </>
  );
};

export default Child;
