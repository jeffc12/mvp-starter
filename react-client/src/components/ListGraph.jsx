import React from 'react';

const ListGraph = (props) => (
  <div className="Row">
    ID:{props.item.pictureid}
    <div style={{width: props.item.likeCount * 1.1+'px'}} className="bar" className='Column'></div>
</div>
)

export default ListGraph;
