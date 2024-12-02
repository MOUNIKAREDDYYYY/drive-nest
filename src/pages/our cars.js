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
  <title>DriveNest-Our Cars Page</title>
  <link
    rel="shortcut icon"
    href="https://images.unsplash.com/photo-1517271710308-aa99f1519490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
    type="image/x-icon"
  />
  <link rel="stylesheet" href="src/styles/globals.css" />
  <link rel="stylesheet" href="src/styles/our cars.css" />
  <title>Our Cars - Car Rental</title>
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
              className="nav-link text-white active"
              aria-current="page"
              href=""
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
            <a className="nav-link  text-white" href="contact.html">
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
  



  <>
  {/* 2nd */}
  {/* Background Image */}
  <div className="bg-image">
    <div className="overlay">
      {/* Headline */}
      <div className="container text-center">
        <h1 className="display-4 text-white mt-5">Discover Your Ideal Ride</h1>
        <p className="text-white mb-5">
          Find cars for sale and for rent near you
        </p>
      </div>
      {/* Car Categories */}
      <div className="btn-group" role="group">
        <a href="suv.html" className="btn btn-outline-light">
          suv
        </a>
        <a href="jeep.html" className="btn btn-outline-light">
          jeep
        </a>
        <a href="vintage.html" className="btn btn-outline-light">
          Vintage
        </a>
        <a href="sports.html" className="btn btn-outline-light">
          sports
        </a>
        <a href="vans.html" className="btn btn-outline-light">
          vans
        </a>
      </div>
    </div>
  </div>
  {/* 
<!-- Header */}
  <div className="dashboard-header text-center mt-5">
    <h1>Car Catalogue</h1>
    <p>Explore out cars you might like!</p>
  </div>
  {/* Filters Section */}
  <div className="container filter-section text-center mt-5">
    <div className="row g-4">
      <div className="col-lg-3 col-md-4">
        <input type="text" className="form-control" placeholder="Location" />
      </div>
      <div className="col-lg-3 col-md-4">
        {/* <input type="datetime-local" class="form-control" placeholder="YYYY-MM-DDTHH:MM" /> */}
        {/* <input type="datetime-local" class="form-control" id="date"  placeholder="YYYY-MM-DDTHH:MM"  required> */}
        <input
          type="text"
          className="form-control"
          id="custom-datetime"
          placeholder="DateTime"
        />
      </div>
      <div className="col-lg-3 col-md-4">
        <select className="form-control">
          <option selected="">CARS</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Minivan</option>
        </select>
      </div>
      <div className="col-lg-3 col-md-4">
        <a href="our cars.html" className="btn btn-info w-100">
          SEARCH
        </a>
        {/* <button class="btn btn-info w-100">Search</button> */}
      </div>
    </div>
  </div>
  {/* Car Catalogue Section */}
  <div className="container car-catalogue">
    <div className="row g-4">
      {/* Example Car Card */}
      <div className="col-lg-3 col-md-6">
        <div className="card car-card">
          <img
            src="https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post/original/5a6165e617348.jpg"
            className="card-img-top"
            alt="Car Image"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Honda Jazz RS</h5>
            <p className="car-price">RS 800 / day</p>
            <p className="card-text">Honda | 4.5 Rating</p>
            <button className="btn btn-rent">Rent Now</button>
          </div>
        </div>
      </div>
      {/* Repeat car cards */}
      <div className="col-lg-3 col-md-6">
        <div className="card car-card">
          <img
            src="https://images.carexpert.com.au/crop/1600/1067/app/uploads/2023/02/220909_Toyota-Yaris-SX-Hybrid_Still-36.jpg"
            className="card-img-top"
            alt="Car Image"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Toyota New Yaris</h5>
            <p className="car-price">RS 800 / day</p>
            <p className="card-text">Toyota | 4.3 Rating</p>
            <button className="btn btn-rent">Rent Now</button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card car-card">
          <img
            src="https://www.usnews.com/object/image/0000018b-fa28-dc80-a9ef-ffe9f8290001/01-2024-chevrolet-corvette-angular-front-jmv.JPG?update-time=1700709318771&size=responsiveGallery"
            className="card-img-top"
            alt="Car Image"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Pajero Sport</h5>
            <p className="car-price">RS 800 / day</p>
            <p className="card-text">Sports | 4.6 Rating</p>
            <button className="btn btn-rent">Rent Now</button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card car-card">
          <img
            src="https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/11/2023-honda-civic-type-r-16.jpg"
            className="card-img-top"
            alt="Car Image"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Honda Civic</h5>
            <p className="car-price">RS 800 / day</p>
            <p className="card-text">HOonda | 4.4 Rating</p>
            <button className="btn btn-rent">Rent Now</button>
          </div>
        </div>
      </div>
      {/* End Repeat */}
    </div>
  </div>
  {/* Our Services Section */}
  <section className="services-section text-center p-5">
    <h1>Our Services</h1>
    <div className="row mt-5">
      <div className="col-md-4 mb-2 ">
        <div className="service-card ">
          <div className="icon">
            <i className="fas fa-car" />
          </div>
          <h5>Diverse Vehicle Options</h5>
          <p>
            Choose from a wide range of cars, SUVs, and vans tailored to your
            needs.
          </p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-tags" />
          </div>
          <h5>Competitive Pricing</h5>
          <p>
            We offer the best rates without compromising on quality and service.
          </p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-clock" />
          </div>
          <h5>Flexible Rental Plans</h5>
          <p>
            From daily to monthly rentals, we cater to your travel schedule.
          </p>
        </div>
      </div>
    </div>
  </section>
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
  <footer className="text-center py-4">
    <div className="container">
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















