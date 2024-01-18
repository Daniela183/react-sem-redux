import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

export default props => {

  const { min, max } = props;

  return (
    <Card title="Média dos Números" >
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}

/*export default connect(mapStateToProps)(Media);
function Media(props) {
  
  console.log(props)
  function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
  }
}
*/ 