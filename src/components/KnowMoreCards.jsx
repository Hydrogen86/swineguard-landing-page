function KnowMoreCard({data}){
  return(
    <div className="knowmore-card">
      <img src={data.icon} alt={data.icon} className="icon" />
      <h3 className="label">{data.label}</h3>
      <p className="details">{data.details}</p>
      <a href={`#${data.link}`} className="readmore-btn">Read More</a>
    </div>
  )
};


export default KnowMoreCard