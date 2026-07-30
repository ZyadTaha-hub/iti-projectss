/* import { useState } from "react";
function App(){
  const[count,setCount]=useState(0);
  function increase(){
setCount(count+1);
  };
  function decrease(){
setCount(count-1);
  };
  function reset(){
setCount(0);
  };
  return (
    <>
    <h1>counter: {count}</h1>
    <button onClick={increase}> increase</button>
        <button onClick={decrease}> decrease</button>
            <button onClick={reset}> reset</button>

    
    </>
  );
}
export default App; */
import User from "./User";

import Home from "../components/Home/Home";

function App() {
  return <Home />;
}

export default App;
