import { useState, useEffect } from 'react'

import VictoriaImg from './../assets/images/doctor3.jpg'
import LaylayImg from './../assets/images/doctor2.jpeg'
import DoeImg from './../assets/images/doctor1.png'
import sliderIcon from "./../assets/icons/slider-icon2.png"
import ExpertCard from "../components/SwineExperts";
import "./../styles/sectionsStyle/swineExpertsSection.css"


const swineExperts = [
  {
    id: 1,
    img: VictoriaImg,
    name: "Doc. Josue M. Victoria",
    role: "Provincial Veterinarian",
    details:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "doctor-image.jpg",
  },
  {
    id: 2,
    img: LaylayImg,
    name: "Mrs. Verona P. Laylay",
    role: "Agriculture Tech II",
    details:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "woman-doctor.jpg",
  },
  {
    id: 3,
    img: DoeImg,
    name: "Mr. John U. Doe",
    role: "Veterinarian Assistant",
    details:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "male-nurse.jpg",
  },
];


function SwineExpertsSection() {
  const [currentIndex, setCurrentIndex] = useState(1); 
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1049);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1049);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const moveRight = () => {
    if (currentIndex < swineExperts.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };



  return (
    <section id="swine-experts-section">
      <h1 className="section-heading">Meet our Swine Experts</h1>
      <div className="expert-cards-container">
        {/* Hide left btn kapag wala ng susunod na slide sa left */}
        {currentIndex > 0 && (
          <img
            className="slider-btn left"
            src={sliderIcon}
            alt="slider-btn"
            onClick={moveLeft}
          />
        )}

        {/*Hide right btn kapag wala ng susunod na slide sa right */}
        {currentIndex < swineExperts.length - 1 && (
          <img
            className="slider-btn right"
            src={sliderIcon}
            alt="slider-btn"
            onClick={moveRight}
          />
        )}

        <div className="scroller" style={{transform: isWideScreen ? "translateX(0px)" : `translateX(-${currentIndex * 100}%)`}}>
          {swineExperts.map((data) => (
            <div key={data.id} className="expert-card-wrapper">
              <ExpertCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



export default SwineExpertsSection