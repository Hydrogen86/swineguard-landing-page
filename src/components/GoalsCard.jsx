function GoalCard({data}){
  return(
    <div className="card">
      <div className="icon-container">
        <img src={data.icon} alt="" className="icon" />
      </div>
      <p className="label">{data.label}</p>
    </div>
  )
}


export default GoalCard