import React, { useState } from "react";
import Input from "../../components/input";
import { Link, useNavigate } from "react-router-dom";
import { registeer } from "../../utils/api";

const Form = ({ isSignInPage = true }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/${isSignInPage ? "login" : "register"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await res.json();
      console.log(response);
      if(response){
        localStorage.setItem('user:token' , "this is a token")
        localStorage.setItem('user' , 
          
           JSON.stringify(response?.user))
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg flex flex-col items-center justify-center">
      <div className="text-4xl font-bold">Welcome</div>
      <div className="text-xl font-light">Signup to get started</div>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          {!isSignInPage && <Input label="Full Name" name="fullname" inputClassname="outline-none p-3 rounded-lg" placeholder="Enter your full name" value={formData.fullname} onChange={handleInputChange} />}
          <Input label="Email" name="email" inputClassname="outline-none p-3 rounded-lg" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
          <Input label="Password" name="password" inputClassname="outline-none p-3 rounded-lg" placeholder="Enter your password" type="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <div className="mt-4">
          <button type="submit" className="border border-[#ccc] w-full p-3 rounded-xl">
            Sign Up
          </button>
        </div>
      </form>
      <br />
      <div></div>
      <Link to={`/user/${isSignInPage ? "sign_up" : "sign_in"}`}>
        <p>Sign in</p>
      </Link>
    </div>
  );
};

export default Form;
