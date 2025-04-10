function ExpertCard({data}){
  return(
    <div className="expert-card">
      <img className="img" src={data.img} alt={data.img} />
      <div className="info">
        <h4 className="name">{data.name}</h4>
        <p className="role">{data.role}</p>
        <p className="details">{data.details}</p>
      </div>
   
    </div>
  )
} 


export default ExpertCard