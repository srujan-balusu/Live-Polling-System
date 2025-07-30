import React, { useState } from "react";
import stars from "../../assets/spark.svg";
import { useNavigate } from "react-router-dom";
import "./StudentLandingPage.css";

const StudentLandingPage = () => {
  const navigate = useNavigate(); // Correct usage, remove `new`

  const [name, setName] = useState("");
  const handleStudentLogin = (e) => {
    e.preventDefault();

    if (name.trim()) {
      sessionStorage.setItem("username", name.trim());
      navigate("/poll-question");
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 w-50  mx-auto">
      <div className="student-landing-container text-center">
        <button className="btn btn-sm intervue-btn mb-5">
          <img src={stars} className="px-1" alt="" />
          Intervue Poll
        </button>
        <h3 className="landing-title">
          Let's <b>Get Started</b>
        </h3>
        <p className="landing-description">
          If you're a student, you'll be able to{" "}
          <b style={{ color: "black" }}>submit your answers</b>, participate in
          live polls, and see how your responses compare with your classmates
        </p>
        <form onSubmit={handleStudentLogin}>
          <div className="w-50 mx-auto my-4">
            <p className="name-label">Enter your Name</p>
            <input
              type="text"
              className="form-control name-input "
              required
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="btn continue-btn my-3">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLandingPage;
