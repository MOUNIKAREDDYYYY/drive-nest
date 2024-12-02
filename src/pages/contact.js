import Image from "next/image";
import localFont from "next/font/local";
import React from 'react';
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ourcars() {
  return (
    <div>



<Head>

<>
  <title>DriveNest-Contact Page</title>
  <link
    rel="shortcut icon"
    href="https://images.unsplash.com/photo-1517271710308-aa99f1519490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
    type="image/x-icon"
  />
  <link rel="stylesheet" href="src/styles/home.css" />
  <link rel="stylesheet" href="src/styles/contact.css" />
  {/* BOOTSTRAP LINKS */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  {/* FontAwesome for Icons */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
</>

 </Head>








 <nav className="  navbar navbar-expand-sm bg-dark navbar-dark nav-under fixed-top">
    <div className="container-fluid ">
      <a className="navbar-brand fs-2 fw-bold m-auto mx-5 " href="#">
        <span style={{ color: "#0dcaf0" }}>DRIVE</span>
        <span style={{ color: "yellow" }}>NEST</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse  text-white" id="navbarNav">
        <ul className="navbar-nav m-auto  mb-1 mb-lg-0  ">
          <li className="nav-item ">
            <a
              className="nav-link text-white text-white" href="Booking.html"
            >
              Home
            </a>
          </li>
          &nbsp; &nbsp;
          <li className="nav-item text-white active">
            <a className="nav-link  text-white" href="src/pages/our cars.js">
              Our Cars
            </a>
          </li>
          &nbsp; &nbsp;
          <li className="nav-item ">
            <a className="nav-link  text-white" href="Booking.html">
              Booking
            </a>
          </li>
          &nbsp; &nbsp;
          <li className="nav-item  ">
            <a className="nav-link  text-white active"
            aria-current="page"
            href=""
            >
              Contact
            </a>
          </li>
          &nbsp; &nbsp;
        </ul>
        <a href="signin.html" className="btn btn-info">
          SIGN IN
        </a>
        {/* <button type="button" class="btn btn-info">SIGN IN</button> */}
      </div>
    </div>
  </nav>
  
  <br />
  <br />
  <>

  <div className="background-decorator ">
    <div className="container mt-4">
      <h1 className="text-center fw-bolder " style={{ fontSize: 80 }}>
        Let's Chat
      </h1>
      <p className="text-center">We'd love to hear from you!</p>
      <div className="row">
        <div className="col-md-6 my-2 ">
          <form>
            <div className="form-group fs-3">
              <label htmlFor="name">Name</label>
              <input
                type="text "
                className="form-control "
                id="name"
                style={{ backgroundColor: "rgb(85, 87, 87)" }}
                required=""
              />
            </div>
            <div className="form-group fs-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                style={{ backgroundColor: "rgb(85, 87, 87)" }}
                required=""
              />
            </div>
            <div className="form-group fs-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows={5}
                style={{ backgroundColor: "rgb(85, 87, 87)" }}
                required=""
                defaultValue={""}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <div className="col-md-6 text-center mt-5 ">
          <h3>Contach Info</h3>
          <p>
            <strong>Phone:</strong> +1 (234) 567-890
          </p>
          <p>
            <strong>Email:</strong> info@drivenest.com
          </p>
          <p>
            <strong>Address:</strong> 456 DriveNest, Hyderabad, India
          </p>
          <br />
          <h4>Follow Us</h4>
          <ul className="list-inline">
            <a href="#" className="mr-3">
              <i className="fab fa-facebook-f" />
            </a>
            &nbsp;
            <a href="#" className="mr-3">
              <i className="fab fa-twitter" />
            </a>
            &nbsp;
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Contact Information Section */}
  <hr />
  <section className="contact-info-section text-center py-5 m-auto">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <i className="fas fa-mobile-alt fa-2x " />
          <p className="mt-2">+23456789</p>
        </div>
        <div className="col-md-3">
          <i className="fas fa-phone-alt fa-2x" />
          <p className="mt-2">+9763456787</p>
        </div>
        <div className="col-md-3">
          <i className="fas fa-map-marker-alt fa-2x" />
          <p className="mt-2">DriveNest </p>
        </div>
        <div className="col-md-3">
          <i className="fas fa-envelope fa-2x" />
          <p className="mt-2">info@DriveNest.info</p>
        </div>
      </div>
    </div>
  </section>
  <hr />
  {/* Footer Section */}
  <footer className="text-center py-4 mt-1">
    <div className="container4">
      <p>© 2024 DriveNest All rights reserved.</p>
      <div>
        <a href="#" className="mr-3">
          <i className="fab fa-facebook-f" />
        </a>
        &nbsp;
        <a href="#" className="mr-3">
          <i className="fab fa-twitter" />
        </a>
        &nbsp;
        <a href="#">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  </footer>
</>


 








     </div>  
    
  );
};
