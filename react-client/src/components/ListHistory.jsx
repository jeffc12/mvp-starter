import React from 'react';

const ListHistory = (props) => (
  <div className="Row">
    #{props.item.hashtag}={props.item.count}
    <div style={{width: props.item.count * .0001 +'px'}} className="bar" className='Column1'></div>
</div>
)

export default ListHistory;
