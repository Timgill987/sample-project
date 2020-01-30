import React from "react"
import {SWcard, SWbody, SWname, SWinfo} from "./styles"

const SWChars = props => {
    return (
        <SWcard>
          <SWbody>
            <SWname>
              <h1> {props.name}</h1>
            </SWname>
            
            <SWinfo>
              <p>Birth Year: {props.birth_year}</p>
              <p>Gender: {props.gender}</p>
            </SWinfo>
            
          </SWbody>
        </SWcard>
      
    );
  };
  export default SWChars;
  



/*name , birth_year, gender   */