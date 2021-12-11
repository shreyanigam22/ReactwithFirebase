import React,{useState} from 'react';
import "./Reactcontact.css"


const Reactcontact = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    city: "",
    zip: ""
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user,[name]: value})

  };

  const postData = async (e) => {
    e.preventDefault();

    const{email,password,city,zip} =user;

    if(email&&password&&city&&zip){

   
    const res = 
    await fetch("https://reactwithfirebase-519cd-default-rtdb.firebaseio.com/mydatabase.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          city,
          zip
        }),
      }
    );
    if (res){
      setUser({
        email: "",
        password: "",
        city: "",
        zip: "",
      });

      alert("Data Stored Successfully");

    }

  }else{
    alert("plz fill all the data");
      
  }
  };


  return <>
<div className= "content">

    <form >
    
    <div className ="heading"> <h3>INFORMATION FORM</h3></div>
      <div className="form-row">
        <div className="form-group5 col-md-12">
          <label htmlFor="inputEmail4">Email</label>
          <input type="text"
            name="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            autoComplete="off"
            value={user.email}
            onChange={getUserData}
            required 
          />

        </div>
        <div className="form-group4 col-md-12">
          <label htmlFor="inputPassword4">Password</label>
          <input type="text"
            name="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            autoComplete="off"
            value={user.password}
            onChange={getUserData}
            required
          />
        </div>
      </div>


      <div className="form-row">
        <div className="form-group3 col-md-12">
          <label htmlFor="inputCity">City</label>
          <input type="text"
            name="city"
            placeholder="city.."
            autoComplete="off"
            className="form-control"
            id="inputCity"
            value={user.city}
            onChange={getUserData}
            required
          />
        </div>

        <div className="form-group2 col-md-12">
          <label htmlFor="inputZip">Zip</label>
          <input type="text"
            name="zip"
            placeholder="zip.."
            autoComplete="off"
            className="form-control"
            id="inputZip"
            value={user.zip}
            onChange={getUserData}
            required
          />
        </div>
      </div>
      <div className="form-group1">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck"
            required />
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary"
        onClick={postData} method="POST">submit</button>
    </form>
    
    </div>
  </>
};



export default Reactcontact;