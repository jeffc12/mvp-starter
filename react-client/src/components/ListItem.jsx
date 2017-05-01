import React from 'react';

const ListItem = (props) => (
  <tr>
  <td>{props.item.pictureid}</td>
  <td>{props.item.likeCount}</td>
  <td>{props.item.filterid}</td>
  </tr>
)

export default ListItem;
