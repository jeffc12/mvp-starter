import React from 'react';
import ListItem from './ListItem.jsx';



const List = (props) => (
  <div>

    <h4> What you look like:</h4>
    <img  className="circular--square" src={props.items.length > 0 && props.items[0].profilePicture}></img>
<h4> TOTAL PICTURES: {props.items.length}</h4>
  <table className="table table-striped">
    <thead>
      <tr>
        <th className="text-center">PictureID</th>
        <th className="text-center">Like Count</th>
        <th className="text-center">Filter Used</th>
        </tr>
      </thead>
    <tbody>
    {props.items.map(item => <ListItem item={item}/>)}
    </tbody>
  </table>
  </div>
)

export default List;
