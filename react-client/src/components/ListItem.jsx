import React from 'react';

const ListItem = (props) => (
  <div>
  <ul>{props.item.likeCount}</ul>
  <ul>{props.item.pictureid}</ul>
  <ul>{props.item.filterid}</ul>
  </div>
)

export default ListItem;
