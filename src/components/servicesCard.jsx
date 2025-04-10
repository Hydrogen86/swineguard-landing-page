import { useState } from "react"


function ServiceCard({data}){
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleCard = () => {
    setDetailsVisible(prev => !prev)
  }

  return(
    <div className="service-card" onClick={toggleCard}>
      <div className="img-and-name">
        <img src={data.img} alt={data.img} className="img" />
        <h4 className="name">{data.name}</h4><br />
      </div>
        <p className={`details ${detailsVisible ? "show" : "hide"}`}>{data.details}</p>
    </div>
  )
}


export default ServiceCard