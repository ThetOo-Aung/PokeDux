import React from 'react'

const Abilities = ({pokeData}) => {
  return (
    <div className="Abilities">
      <h3> Abilities </h3>
      <hr></hr>
            {pokeData.abilities.map(el => {
              return <p key={el.ability.name} className="text-secondary" style={{textTransform:"capitalize", fontWeight:"600"}}>
                {el.ability.name}
              </p>
            })}
    </div>
  )
}

export default Abilities
