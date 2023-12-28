// import React from 'react';

//  const Greet = () => {
//     return <div>Hello</div>;
// }


// export default Greet;

import React, { useState ,useEffect} from 'react';

const Greet =() =>{
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [data,setData]=useState("Ram");

  const updateCount =()=>{
    setCount(count+1)
  }

  useEffect(() => {
  console.log("mounting Phase")
  

  },[data])

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}> */}
      <button onClick={updateCount} >
        Click me
      </button>
       <button onClick={() => setData("Laxmi")}>
        Click me
      </button>
    </div>
  );
}

export default Greet;