import React, {useState} from "react";

const Header = (props) =>{
    const origName = props.name
    const [name, setName] = useState(origName);

    const changeName = () => {
        if(name === origName){
            setName("not " + origName);
        }else{
            setName(origName);
        }
    };

    return (
        <h1 onClick = {changeName}>Hello {name}!</h1>
    );
};


export default Header;