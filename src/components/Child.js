// import React, { useState } from "react";

// const Child = (props) => {
//   const [name, setName] = useState("");

//   function handleSubmit(e){
//     e.preventDefault();
//     props.getData(name);

//   }

//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Child;

// import React ,{useState }from 'react';

// const Child = () => {
//     // const [firstName,setFirstName]=useState('')
//     const [allValues,setAllValues]=useState({
//         firstName:"Ankush",
//         lastName:"Gupta"
//     })

//     console.log(allValues)
//     const updateName =()=>{
//         setAllValues({...allValues,
//             firstName:"Laxmi"
//         })
//     }

//     return (
//         <>
//         <div>
//             <h1>First name is {allValues.firstName} and last name is {allValues.lastName}</h1>
//             <button onClick={updateName} >Update</button>
//         </div>

//         </>
//     );
// }

// export default Child;

// import React,{ useState} from "react";

// const Child = () => {
//   const [items, setItems] = useState([]);

//   console.log(items)
//   const updateList = () => {
//     setItems([ ...items,
//       {
//         id: items.length,
//         value: Math.random(),
//       },
//     ]);
//   };

//   return (
//     <>
//       <div>
//         {items.map((item) => (
//           
//             <li key={item.id}>{item.value}</li>
//           
//         ))}
//         <button onClick={updateList}>Update List</button>
//       </div>
//     </>
//   );
// };

// export default Child;

import React from 'react';
import image2 from "../assets/image1.jpg";

const Child = () => {
  return (
    <>
      <img src={image2} alt="image1" />
    </>
  )
}



export default Child;
