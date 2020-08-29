import React from 'react'

const Stats = ({pokeData}) => {
  return (
    <div className="Stats">
      <h3> Stats</h3>
      <hr></hr>
            {pokeData.stats.map(el => {
              return <p key={el.stat.name} className="text-secondary"  style={{textTransform:"capitalize", fontWeight:"600"}}>
                {el.stat.name} - &nbsp;
                {el.base_stat}
              </p>
            })}
    </div>
  )
}

export default Stats
