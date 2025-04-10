import PigsImg from "./../assets/images/goal-section-img.png"
import HealthyPigIcon from "./../assets/icons/healthy-pig.png"
import CommunicationIcon from "./../assets/icons/seamless-communication.png"
import ProfitableIcon from "./../assets/icons/profitable.png"
import GoalCard from "../components/GoalsCard"
import "./../styles/sectionsStyle/goalsSection.css"


const goalsCardData = [
  {
    icon: HealthyPigIcon,
    label: "Healthy Swine Farming & Virus-Free Environment",
  },
  {
    icon: CommunicationIcon,
    label: "Seamless Communication & Transparency",
  },
  {
    icon: ProfitableIcon,
    label: "Profitable & Sustainable Farming",
  },
];



function GoalsSection(){
  return(
    <section id="goals-section">
      <div className="green-background"></div>
      <div className="img-info-container d-flex">
        <img className="pig-image" src={PigsImg} alt={PigsImg} />
        <div className="info">
          <h1 className="heading">Our Goal: 
            <span className="sub-heading">Revolutionizing Swine Farming with Modern Technology</span>
          </h1>
          <p className="details">
            &nbsp;&nbsp;We are committed to promoting healthy and sustainable swine farming by fostering transparency between local swine raisers and the provincial veterinary office. Our platform serves as a bridge of information, empowering farmers with real-time insights and expert guidance.
            By harnessing modern technology, we strive to enhance efficiency, productivity, and profitability in the swine industry. Together, we are shaping a smarter, more connected, and more profitable future for swine farming.
          </p>
        </div>
      </div>

      <div className="goals-card-container">
        {goalsCardData.map((data, index) => <GoalCard key={index} data={data}/>)}
      </div>
    </section>
  )
}


export default GoalsSection