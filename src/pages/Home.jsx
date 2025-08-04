// import rayGunImage from "../raygun.png";

// const Home = () => {
//     return (
//     <img src={rayGunImage} alt="Ray Gun" class="responsive-img" />
//     )
// };

// export default Home;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import rayGunImage from "../raygun.png";
// import styles from './Home.module.css';

const Home = () => {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Replace this with your login logic
  //   console.log("Logging in with:", formData);
  // };

  // const goToNewUser = () => {
  //   navigate("/newuser");
  // };

  return (
    // <form  onSubmit={handleLogin}>
      

    //   <div>
    //     <label>Username: </label>
    //     <input
    //       type="text"
    //       name="username"
    //       value={formData.username}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>

    //   <div>
    //     <label>Password: </label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={formData.password}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>

    //   <div>
    //     <button type="submit">Login</button>
    //     <button type="button" onClick={goToNewUser}>
    //       Create New User
    //     </button>
    //   </div>
      <img src={rayGunImage} alt="Ray Gun" className={"responsive-img"} />
    // </form>
  );
};

export default Home;
