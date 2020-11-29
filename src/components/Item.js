import React from 'react';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Item = (props) =>{
    return(
        <li className = "item">
            <span className = "item__task">{props.ind + ". " + props.name}</span>
            <button className = "item__dlt" onClick = {() => props.removeItem(props.id)}> <FontAwesomeIcon icon={faTrash} /> </button>
            <button className = "item__edit" onClick = {()=>props.updateItem(props.id)}> <FontAwesomeIcon icon={faEdit} /> </button>
        </li>
    );
}

export default Item;