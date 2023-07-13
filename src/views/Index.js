import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import AboutUs from "views/IndexSections/AboutUs";
import Services from "views/IndexSections/Services";
import Signup from "views/IndexSections/Signup.js";
import MoreInfo from "views/IndexSections/MoreInfo";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div id="home">
          <PageHeader />
        </div>
        <div className="main">
          <div id="about">
            <AboutUs />
          </div>
          <div id="moreInfo">
            <MoreInfo />
          </div>
          <div id="service">
            <Services />
          </div>
          {/* <Blogs /> */}
          <div id="contact">
            <Signup />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
