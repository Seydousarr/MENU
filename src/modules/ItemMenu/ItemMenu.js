import React from 'react';

import './ItemMenu.css';

const ItemMenu = (props) => (

  <a className="ItemMenu" href={props.data.url}>
    <li>{props.data.titre}</li>
  </a>
);


export default ItemMenu;