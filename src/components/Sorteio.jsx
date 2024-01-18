import React from "react";
//import { connect } from 'react-redux'

import Card from "./Card";
export default props => {

  const { min, max } = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min;

  return (
      <Card title="Sorteio dos Números" >
          <div>
              <span>
                  <span>Resultado: </span>
                  <strong>{aleatorio}</strong>
              </span>
          </div>
      </Card>
  )
  }
/*function Sorteio(props) {
  ;
  
  return (
    <Card title="Sorteio de um Números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong></strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProp(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProp)(Sorteio);*/
