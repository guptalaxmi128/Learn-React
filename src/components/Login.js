// import React, { useState } from "react";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [nameError,setNameError]=useState(false);
//   const [passwordError,setPasswordError]=useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(!name){
//         setNameError("Name is required!")
//     }
//     if(!password){
//         setPasswordError("Password is required!")
//     }
//     const data = {
//       name,
//       password,
//     };
//     console.log(data);
//   };

//   const handleInput =(e)=>{
//     setNameError(false)
//     setName(e.target.value)
//   }

//   const handlePasswordChange =(e)=>{
//     setPasswordError(false)
//     setPassword(e.target.value)
//   }
//   return (
//     <div
//       style={{
//         // border:'1px solid black',
//         display: "flex",
        // margin:'30px auto',
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//     <div style={{width:'100%'}}>
//       <input
//       placeholder="Name"
//         type="text"
//         value={name}
//         name="name"
//         onChange={handleInput}
//       />
//       { nameError && <p style={{color:'red'}}>{nameError}</p>}

//       <br />
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//         { passwordError && <p style={{color:'red'}}>{passwordError}</p>}
//       <br />
//       <button onClick={handleSubmit}> Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =(e)=>{
e.preventDefault();
console.log(formData);
  }
  return (
    <>
      <input
        placeholder="Name"
        type="text"
        value={formData.username}
        name="username"
        onChange={handleInput}
      />

      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInput}
      /><br />
      <button onClick={handleSubmit}> Submit</button>
    </>
  );
};

export default Login;
