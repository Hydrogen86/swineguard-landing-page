import swineExpertIcon from "./../assets/icons/swine-expert-icon.png"
import swineServiceIcon from "./../assets/icons/swine-service-icon.png"
import swineGoalsIcon from "./../assets/icons/swine-goal-icon.png"
import KnowMoreCard from "../components/KnowMoreCards"
import "./../styles/sectionsStyle/getToKnowSection.css"


const knowMoreData = [
  {
    icon: swineExpertIcon,
    label: "Swine Expert",
    details:
      "Our swine experts are highly trained professionals who provide reliable support during swine virus outbreaks. With their expertise, they effectively manage such situations and assist local swine raisers in keeping their pigs safe and healthy.",
    link: "swine-experts-section",
  },
  {
    icon: swineServiceIcon,
    label: "Vet Services",
    details:
      "The Provincial Veterinary Office offers a range of services for swine, including castration, iron dextran administration, deworming, ASF testing, and overall swine healthcare. These services ensure the health and safety of swine while providing swine raisers with reliable support and satisfaction.",
    link: "services-section",
  },
  {
    icon: swineGoalsIcon,
    label: "Vet Goals",
    details:
      "The goal of SwineGuard is to promote a healthy and sustainable swine industry by facilitating seamless communication between local swine raisers and the Provincial Veterinary Office. By ensuring transparency in information, SwineGuard helps create a more productive, responsible, and virus-free swine industry while enhancing the overall well-being of the agricultural sector.",
    link: "goals-section",
  },
];


function GetToKnowSection(){
  return(
    <section id="get-to-know-section">
      <h1 className="section-heading">Get To Know More</h1>
      <div className="cards-container d-flex">
        {knowMoreData.map((data, index) => <KnowMoreCard key={index} data={data} />)}
      </div>
    </section>
  )
}


export default GetToKnowSection