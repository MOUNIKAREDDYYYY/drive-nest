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

export default function Home() {
  return (
    <div>
      <Head>
      <>
  <title>DriveNest-Home Page</title>
  <link
    rel="shortcut icon"
    href="https://images.unsplash.com/photo-1517271710308-aa99f1519490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
    type="image/x-icon"
  />
  <link rel="stylesheet" href="src/styles/home.css" />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
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

   
  


{/* 
1st */}
  <div className="container h11 mt-5">
    <div className="row row align-items-center">
      <div className="col-md-6 col-sm-12 text-center">
        <h1 className="mx-2 mt-5 fw-bold" style={{ color: "#020202" }}>
          <span>"</span>Fast Rentals,
          <br />
          Flawless Rides"
        </h1>
        <h6 className="mt-2 mx-2">
          <span style={{ color: "#0dbffa" }}>
            Experience the DriveNest difference!
          </span>
        </h6>
      </div>
      <div className="col-md-6 mt-5">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/get-car-on-rent-illustration-download-in-svg-png-gif-file-formats--rental-a-sharing-dealership-service-pack-services-illustrations-5053355.png"
          alt="img"
          className="img-fluid"
        />
        {/* <img src="https://cdn-icons-gif.flaticon.com/11779/11779612.gif" alt="" class="img-fluid" style="height: 200px; width: 300px;"> */}
        {/* <img src="https://www.shutterstock.com/image-photo/car-driving-on-road-europe-600nw-2306047461.jpg" alt="" class="img-fluid"> */}
      </div>
    </div>
  </div>
  {/* 2nd */}
  <div className="container h13 mt-5">
    <div className="row align-items-center">
      <div className="col-md-6 ">
        <img
          src="https://travelpricedrops.com/_next/image?url=%2Fimages%2Fworld-map.png%3Fv1.0&w=828&q=75"
          alt="img"
          className="img-fluid"
        />
      </div>
      <div className="col-md-6 col-sm-12 text-center">
        <h4 className="mt-5 fw-bold" style={{ color: "#0dcaf0" }}>
          <p className="mx-2">
            We explore car rental <br />
            and travel booking websites <br />
            globally to uncover the best <br />
            prices available...
          </p>
        </h4>
      </div>
    </div>
  </div>
  {/* 3rd */}
  <div className="col-md-12 text-center fw-bolder mt-5">
    <h1>
      The Resonable Price <br />
      You will Pay for Rent
    </h1>
    <p>"Your ride, your way—discover the freedom of travel!"</p>
  </div>
  {/* 4th */}
  <div
    id="carouselExampleAutoplaying"
    className="carousel slide"
    data-ride="carousel"
    data-interval={3000}
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/20-essential-tips-successful-road-trip.jpg"
          className="d-block w-50  mx-auto"
          alt="car image"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.philkotse.com/2018/10/18/3vWWA7rJ/road-trip1-0934.jpg"
          className="d-block w-50  mx-auto"
          alt="vechile image"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://www.travelvivi.com/wp-content/uploads/2010/01/Car-trip.jpg"
          className="d-block w-50  mx-auto"
          alt="car "
        />
      </div>
    </div>
  </div>
  {/* 5th */}
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-12 container1 align-items-center">
        <div>
          <h1 style={{ color: "rgb(255, 255, 255)", fontWeight: "bolder" }}>
            Book Your Adventure
          </h1>
          <p style={{ color: "rgb(253, 251, 251)", fontWeight: "bolder" }}>
            And enjoy comfortable rides now!
          </p>
          <a href="Booking.html" className="btn btn-info">
            Book Now
          </a>
        </div>
      </div>
    </div>
  </div>




<br></br>

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
  
  </div>  
    
  );
};
















