import React from 'react';
import ListHistory from './ListHistory.jsx';



const hist = (props) => (
  <div>
  <hr></hr>
    {props.last.map(item => <ListHistory item={item}/>)}

    <div style={{fontSize:10+'px'}}>Further right Means Higher</div>
  <hr></hr>
  </div>
)

export default hist;
