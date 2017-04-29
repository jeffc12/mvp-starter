import React from 'react';

const ListItem = (props) => (
  <div>
  <img src = {props.item.profilePicture.toString()}></img>
  <li>The like Count: {props.item.likeCount}</li>
  <li>Pictureid: {props.item.pictureid}</li>
  <li>The Filter: {props.item.filterid}</li>
  </div>
)

export default ListItem;
