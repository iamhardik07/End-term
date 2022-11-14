import React from "react";
import { Link } from "react-router-dom";



function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+91-"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group pt-3">
                <label for="exampleFormControlTextarea1">
                  Describe your Tattoo Here
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <Link to="/">
                  <button
                  
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Submit form
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
