import React ,{useState} from "react";

const QRCode = () => {
    const [value, setValue] = useState({
        userName: "",
        userEmail: "",
        userNumber: "",
        passowrd: "",
      });
      const changeValue = (e) => {
        e.preventDefault();
        setValue({ ...value, [e.target.name]: e.target.value });
      };
    
      const formButton = () => {};
    return <div>
        
      {/* <Container className={classes.container}>
        <Card> */}
          <h2 >Generate QR Code</h2>
          {/* <CardContent> */}
            {/* <Grid item xl={4} lg={4} md={6} sm={12} xs={12}> */}
              <input type="text" name="userName" onChange={changeValue} />
              <br />
              <input type="email" name="userEmail" onChange={changeValue} />
              <br />
              <input type="text" name="userNumber" onChange={changeValue} />
              <br />
              <input type="password" name="passowrd" onChange={changeValue} />
              <br />
              <button
                variant="contained"
                color="primary"
                // className={classes.btn}
                onClick={formButton}
              >
                Submit
              </button>
              <br />
            {/* </Grid> */}
            {/* <p>{value}</p> */}
    

    </div>;
}


export default QRCode;