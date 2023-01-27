import React, {useState} from "react";

function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function changeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputText((prevState) => {
            return {
                ...prevState,
                [name] : value
            }
        });
    }

    function clickHandler(event) {
        event.preventDefault();
        props.updateArr(inputText);
        setInputText({
            title:"",
            content:""
        })
    }
    return (
        <form>
            <input 
            name="title"
            type="text" 
            placeholder="Title"
            value={inputText.title}
            onChange={changeHandler}    
            />
            <textarea 
            name="content"
            placeholder="Take a note..."
            value={inputText.content}
            onChange={changeHandler}
            rows="3"
            ></textarea>
            <button onClick={clickHandler}>Add</button>
        </form>
    );
}

export default CreateArea;