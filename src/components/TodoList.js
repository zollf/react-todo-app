import React , {useState} from 'react';
import Item from './Item';


const TodoList = () =>{
    const [id, setId] = useState(0);
    const [items, setItems] = useState([]);
    
    const removeItem = (id) => {
        const newList = items.filter((item)=>item.id !== id);
        setItems(newList);
    }

    const addItem = () => {
        const input = document.getElementById("input");
        setItems([...items,{id: id, name:input.value}]);
        setId(id + 1);
        input.value = "";
    };

    const updateItem = (id) => {
        const newName = prompt("Please enter the new name of the task");
        const newList = [...items];
        newList.forEach((item)=>{
            if(item.id === id){
                item.name = newName;
            }
        });
        setItems(newList);
    }

    return(
        <div className = "todoapp">
            <h2 className = "todoapp__header">To-Do list in react!</h2>
            <div className = "todoapp__input">
                <input className = "todoapp__input" type = "text" id = "input" />
                <button className = "todoapp__button"onClick = {addItem}>Enter</button>
            </div>
            <ul className = "todoapp__tasklist">
                {items.map((item,ind)=><Item key = {item.id} id={item.id} name={item.name} ind = {ind+1} removeItem={removeItem} updateItem={updateItem}/>)}
            </ul>
        </div>
    )
};

export default TodoList;