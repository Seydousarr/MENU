import React from "react";
import ItemMenu from '../ItemMenu/ItemMenu'; 
import "./UlMenu.css";


// Composant UlMenu
const UlMenu = (props) => {
  console.dir(props.dataMenu);

  return (
    <ul className="UlMenu">
      {props.dataMenu.map((element,index) => (
        <ItemMenu data = {element} key={index} ></ItemMenu>
      ))}
    </ul>
  );
};


export default UlMenu;
