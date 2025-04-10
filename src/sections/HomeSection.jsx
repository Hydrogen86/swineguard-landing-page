import VeterenaryOfficce from "./../assets/images/veterenary.png"
import Logo from "./../assets/icons/swineGuard-logo.png"
import FloatingPigImg from "./../assets/images/floating-pig.png"
import PigVaccineImg from "./../assets/images/Vaccine-Img-2.jpg"
import arrowSliderImg from "./../assets/icons/arrow-slider.png"
import "./../styles/sectionsStyle/homeSection.css"

function HomeSection(){
  return(
    <section id="home-section">
     <div className="banner">
          <img src={FloatingPigImg} alt="floating-pig" className="floating-pig-img" />
          <div className="overlay-content">
            <div className="swine-logo">
              <img src={Logo} alt="Swine Guard" />
              <h1 className="label">Swine <br/> Guard</h1>
            </div>
            <div className="signup-container">
              <h5 className="signup-heading">Sign up and Login now!</h5>      
              <p  className="signup-body">&nbsp;“Join us to revolutionize swine farming. Monitor your herd's health and boost productivity start now by creating your account!”</p>
              <button className="join-btn">Join Now!</button>
            </div>        
          </div>
      </div>
      
      {/*feature cards slider */}
      <div className="feature-cards-list">
        <img className="arrow-slider-btn left" src={arrowSliderImg} alt="" />
        <img className="arrow-slider-btn right" src={arrowSliderImg} alt="" />
        <div className="scroller d-flex">       
          <div className="feature-card">
            <div className="background-img">
              <img src={PigVaccineImg} alt="Piglet Vaccination" />
            </div>           
            <div className="text-content">
              <h2 className="heading"><span className="number">10</span> Days After Birth: Strengthen Your Piglets' Health!</h2>
              <p className="body">Early-stage care is essential for healthier pigs. Ensure their strong start with Iron Dextran vaccination—prevent anemia, enhance development, and support overall well-being.</p>
            </div>
          </div>
        </div>
      </div>     
    </section>  
  )
}


export default HomeSection