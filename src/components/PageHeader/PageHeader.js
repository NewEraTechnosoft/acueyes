import React, { useEffect, useState } from "react";
import "./PageHeader.scss"

// reactstrap components
import { Container } from "reactstrap";

const keyWord = [
  {
    id: 1,
    word: 'Digital Stratagy',
    color: '#F1C40F'
  },
  {
    id: 2,
    word: 'Advertising',
    color: '#5DADE2'
  },
  {
    id: 3,
    word: 'Online Marketing',
    color: '#48C9B0'
  },
  {
    id: 4,
    word: 'Social Media',
    color: '#C39BD3'
  },
]

export default function PageHeader() {

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const tick = () => setIndex(i => i + 1);
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, []);


  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo" data-aos="zoom-in">Start <span
            style={{ color: keyWord[index % keyWord.length].color }}>{keyWord[index % keyWord.length].word}</span> With
            ACUEYES </h1>
          <h4 className="d-none d-sm-block" data-aos="fade-down" data-aos-duration="2000">
            At AcuEyes Solutions Pvt Ltd, we take a collaborative approach to digital marketing, fostering transparent communication for your success. Our data-driven insights drive continuous growth and help you unlock your online potential. Are you ready to get started on your journey to digital success?
          </h4>
        </div>

          <a href="#moreInfo">
              <div className="scroll-downs">
                  <div className="mousey">
                      <div className="scroller"></div>
                  </div>
              </div>
          </a>
      </Container>
    </div>
  );
}
