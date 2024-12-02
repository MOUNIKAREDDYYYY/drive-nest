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

  <title>DriveNest-Booking Page</title>
  <link
    rel="shortcut icon"
    href="https://images.unsplash.com/photo-1517271710308-aa99f1519490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
    type="image/x-icon"
  />
  <link rel="stylesheet" href="src/styles/home.css" />
  <link rel="stylesheet" href="src/styles/booking.css" />
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
  {/* Background Image */}
  <div className="bg-image">
    <div className="overlay">
      {/* Headline */}
      <div className="container ">
        <h1 className="display-4 fw-bolder mt-5  text-left">
          Find Your <br />
          Ideal Car
        </h1>
        <p className="text-white fw-bold mb-5 text-left  ">
          Find cars for rent near you
        </p>
      </div>
    </div>
  </div>
  <div className="container-fluid page-container">
    <div className="header mt-3">
      <h1>Compare Car Rentals </h1>
    </div>
    <div className="search-section">
      <form>
        <div className="row">
          <div className="col-md-6 md-3 mb-3">
            <label htmlFor="pickup-location" className="form-label">
              Pick-Up Location
            </label>
            <input
              type="text"
              className="form-control"
              id="pickup-location"
              defaultValue="India"
            />
          </div>
          <div className="col-md-6 md-3 mb-3">
            <label htmlFor="Drop-Off" className="form-label">
              Drop Location
            </label>
            <input
              type="text"
              className="form-control"
              id="Drop-Off"
              defaultValue="India"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="pickupDate" className="form-label">
              Pick-Up Date &amp; Time
            </label>
            <input
              type="date"
              className="form-control  mb-3 "
              id="pickupDate"
              defaultValue="2024-10-31"
            />
            <input
              type="text"
              className="form-control"
              id="pickupTime"
              placeholder="  (HH:MM AM/PM)"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="dropoffDate" className="form-label">
              Drop-Off Date &amp; Time
            </label>
            <input
              type="date"
              className="form-control  mb-3"
              id="dropoffDate"
              defaultValue="2024-11-07"
            />
            <input
              type="text"
              className="form-control"
              id="dropoffTime"
              placeholder=" (HH:MM AM/PM)"
            />
          </div>
        </div>
        <div className="col-md-6 mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="priceAlert" />
          <label className="form-check-label" htmlFor="priceAlert">
            Alert me when prices drop
          </label>
        </div>
        <div className=" col-md-12 mb-3 text-center">
          <a
            href="our cars.html"
            className=" col-md-6 mb-3 btn btn-warning w-50 text-center"
          >
            Search
          </a>
        </div>
      </form>
    </div>
    <div className="company-logos">
      <img
        src="https://dpogroup.com/wp-content/uploads/2015/01/Kayak-logo.png"
        alt="Kayak Logo"
      />
      <img
        src="https://www.cypruswebsites.com/images/advertisments/416/nd/avis-car-rental-logo.png"
        alt="Avis Logo"
      />
    </div>
    <div className="text-center mt-3">
      <p>The cheapest car rental rates in India are just a click away.</p>
    </div>
  </div>
  <section className="vehicles-section my-5">
    <div className="container">
      <h2 className="mb-4 text-center">VEHICLES</h2>
      {/* Bootstrap Carousel */}
      <div
        id="vehiclesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First slide with 3 vehicles */}
          <div className="carousel-item active">
            <div className="row ">
              <div className="col-4 col-sm-4 col-md-4 mb-3 ">
                <div className="vehicle-box p-3 text-center align-items-center">
                  <img
                    src="https://wandering-around.com/wp-content/uploads/2018/08/van_road_trip.jpg"
                    alt="Station Wagon"
                    className="img-fluid mb-2"
                  />
                  <h5>STATION WAGON</h5>
                  <p> VW Passat</p>
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 mb-3">
                <div className="vehicle-box p-3 text-center">
                  <img
                    src="https://images.pexels.com/photos/12186447/pexels-photo-12186447.jpeg?cs=srgb&dl=pexels-alice-b-222950695-12186447.jpg&fm=jpg"
                    alt="Large Premium"
                    className="img-fluid mb-2"
                  />
                  <h5>LARGE: PREMIUM</h5>
                  <p> BMW 5</p>
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 mb-3">
                <div className="vehicle-box p-3 text-center">
                  <img
                    src="https://images.unsplash.com/photo-1517271710308-aa99f1519490?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                    alt="Vintage Cars"
                    className="img-fluid mb-2"
                  />
                  <h5>VINTAGE CARS</h5>
                  <p> Fiat 500</p>
                </div>
              </div>
            </div>
          </div>
          {/* Second slide with 3 vehicles */}
          <div className="carousel-item">
            <div className="row">
              <div className=" col-4 col-sm-4 col-md-4 mb-3">
                <div className="vehicle-box p-3 text-center">
                  <img
                    src="https://www.usnews.com/object/image/0000018b-fa28-dc80-a9ef-ffe9f8290001/01-2024-chevrolet-corvette-angular-front-jmv.JPG?update-time=1700709318771&size=responsiveGallery"
                    alt="Sports Car"
                    className="img-fluid mb-2"
                  />
                  <h5>SPORTS CAR</h5>
                  <p> Porsche 911</p>
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 mb-3">
                <div className="vehicle-box p-3 text-center">
                  <img
                    src="https://www.usnews.com/object/image/0000018d-3c53-d18f-ab9d-fcf7ea870001/2024-cadillac-escalade-v-series-010.jpg?update-time=1706114148921&size=responsive640"
                    alt="SUV"
                    className="img-fluid mb-2"
                  />
                  <h5>SUV</h5>
                  <p> Range Rover</p>
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 mb-3">
                <div className="vehicle-box p-3 text-center">
                  <img
                    src="https://car-images.bauersecure.com/wp-images/4738/should_i_buy_an_electric_car.jpg"
                    alt="Electric Car"
                    className="img-fluid mb-2"
                  />
                  <h5>ELECTRIC CAR</h5>
                  <p> Tesla Model 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#vehiclesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#vehiclesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
  <div className="marquee">
    <div className="marquee-content mb-5">
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.VPiJlD5DArEiEFm_Y3zn1QHaGV&pid=Api&P=0&h=180"
        alt="Logo 1"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.7zE0FSzeF1sz-8_t_IkQIgHaHa&pid=Api&P=0&h=180"
        alt="Logo 2"
      />
      <img
        src="http://2.bp.blogspot.com/-Esx-YMObglQ/T-7PiuV2SZI/AAAAAAAAAK4/EaF2z4SMvpY/s1600/car+company+logos+17.jpg"
        alt="Logo 3"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.SZudo94IeqatDBOGHN_kPwHaEK&pid=Api&P=0&h=180"
        alt="Logo 4"
      />
      {/* Add more logos as needed */}
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.VPiJlD5DArEiEFm_Y3zn1QHaGV&pid=Api&P=0&h=180"
        alt="Logo 1"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.7zE0FSzeF1sz-8_t_IkQIgHaHa&pid=Api&P=0&h=180"
        alt="Logo 2"
      />
      <img
        src="http://2.bp.blogspot.com/-Esx-YMObglQ/T-7PiuV2SZI/AAAAAAAAAK4/EaF2z4SMvpY/s1600/car+company+logos+17.jpg"
        alt="Logo 3"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.SZudo94IeqatDBOGHN_kPwHaEK&pid=Api&P=0&h=180"
        alt="Logo 4"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.VPiJlD5DArEiEFm_Y3zn1QHaGV&pid=Api&P=0&h=180"
        alt="Logo 1"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.7zE0FSzeF1sz-8_t_IkQIgHaHa&pid=Api&P=0&h=180"
        alt="Logo 2"
      />
      <img
        src="http://2.bp.blogspot.com/-Esx-YMObglQ/T-7PiuV2SZI/AAAAAAAAAK4/EaF2z4SMvpY/s1600/car+company+logos+17.jpg"
        alt="Logo 3"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.SZudo94IeqatDBOGHN_kPwHaEK&pid=Api&P=0&h=180"
        alt="Logo 4"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.VPiJlD5DArEiEFm_Y3zn1QHaGV&pid=Api&P=0&h=180"
        alt="Logo 1"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.7zE0FSzeF1sz-8_t_IkQIgHaHa&pid=Api&P=0&h=180"
        alt="Logo 2"
      />
      <img
        src="http://2.bp.blogspot.com/-Esx-YMObglQ/T-7PiuV2SZI/AAAAAAAAAK4/EaF2z4SMvpY/s1600/car+company+logos+17.jpg"
        alt="Logo 3"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.SZudo94IeqatDBOGHN_kPwHaEK&pid=Api&P=0&h=180"
        alt="Logo 4"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.VPiJlD5DArEiEFm_Y3zn1QHaGV&pid=Api&P=0&h=180"
        alt="Logo 1"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.7zE0FSzeF1sz-8_t_IkQIgHaHa&pid=Api&P=0&h=180"
        alt="Logo 2"
      />
      <img
        src="http://2.bp.blogspot.com/-Esx-YMObglQ/T-7PiuV2SZI/AAAAAAAAAK4/EaF2z4SMvpY/s1600/car+company+logos+17.jpg"
        alt="Logo 3"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.SZudo94IeqatDBOGHN_kPwHaEK&pid=Api&P=0&h=180"
        alt="Logo 4"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.VPiJlD5DArEiEFm_Y3zn1QHaGV&pid=Api&P=0&h=180"
        alt="Logo 1"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.7zE0FSzeF1sz-8_t_IkQIgHaHa&pid=Api&P=0&h=180"
        alt="Logo 2"
      />
      <img
        src="http://2.bp.blogspot.com/-Esx-YMObglQ/T-7PiuV2SZI/AAAAAAAAAK4/EaF2z4SMvpY/s1600/car+company+logos+17.jpg"
        alt="Logo 3"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.SZudo94IeqatDBOGHN_kPwHaEK&pid=Api&P=0&h=180"
        alt="Logo 4"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.VPiJlD5DArEiEFm_Y3zn1QHaGV&pid=Api&P=0&h=180"
        alt="Logo 1"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.7zE0FSzeF1sz-8_t_IkQIgHaHa&pid=Api&P=0&h=180"
        alt="Logo 2"
      />
      <img
        src="http://2.bp.blogspot.com/-Esx-YMObglQ/T-7PiuV2SZI/AAAAAAAAAK4/EaF2z4SMvpY/s1600/car+company+logos+17.jpg"
        alt="Logo 3"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.SZudo94IeqatDBOGHN_kPwHaEK&pid=Api&P=0&h=180"
        alt="Logo 4"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.VPiJlD5DArEiEFm_Y3zn1QHaGV&pid=Api&P=0&h=180"
        alt="Logo 1"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.7zE0FSzeF1sz-8_t_IkQIgHaHa&pid=Api&P=0&h=180"
        alt="Logo 2"
      />
      <img
        src="http://2.bp.blogspot.com/-Esx-YMObglQ/T-7PiuV2SZI/AAAAAAAAAK4/EaF2z4SMvpY/s1600/car+company+logos+17.jpg"
        alt="Logo 3"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.SZudo94IeqatDBOGHN_kPwHaEK&pid=Api&P=0&h=180"
        alt="Logo 4"
      />
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
</>

 








     </div>  
    
  );
};
