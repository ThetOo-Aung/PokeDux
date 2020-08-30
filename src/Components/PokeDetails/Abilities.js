import React from "react";
import "./Abilities.css";

const Abilities = ({ pokeData }) => {
  
  return (
    <div className="Abilities">
      
      
        {pokeData &&
          pokeData.abilities.map((el) => {
            return (
              <p
                key={el.ability.name}
                className="text-success mb-1 mr-1"
                style={{ textTransform: "capitalize", fontWeight: "500" }}
              >
                {el.ability.name}/
              </p>
            );
          })}
    
    </div>
  );
};

export default Abilities;
