import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are {props.items.length} items.
    <h4> Your stuff </h4>
    {props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;
