import React from "react";
import { TYPE_COLORS } from "../../utils";

const Types = ({ pokemon }) => {


  return (
    <div className="Types">
    
       {pokemon && pokemon.types.map((index) => (
        <span
          className="badge badge-pill mr-1"
          style={{ backgroundColor: `#${TYPE_COLORS[index]}` }}
          key={index}
        >
          {index}
        </span>
      ))}
    </div>
  );
};

export default Types;
