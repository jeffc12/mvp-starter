import React from 'react';
import ListGraph from './ListGraph.jsx';



const Graph = (props) => (
  <div>
  <hr></hr>
    {props.bar.map(item => <ListGraph item={item}/>)}

    <div style={{fontSize:10+'px'}}>Further Left Means Higher</div>
  <hr></hr>
  </div>
)

export default Graph;
