import React, {useState} from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Note from './Component/Note';
import notes from "./notes.js";
import CreateArea from "./Component/CreateArea";


function App() {

   const [arr, setArr] = useState([]);
   function updateArr(inputNote) {
    setArr((prevState)=> {
        return [
            ...prevState,
            inputNote
        ]
    });
   }

   function deleteItem(id) {
        setArr((prevState)=>{
            return prevState.filter((item, index) => {
                return index != id;
            });
        })
   }
    return (
        <div>
            <Header />
            <CreateArea updateArr={updateArr}/>
            {
                arr.map((item, index) => {
                    return (<Note 
                    key={index}
                    id={index}
                    title={item.title} 
                    content={item.content}    
                    deleteItem = {deleteItem}
                    />);
                })
            }
            <Footer />
        </div>
    );
}

export default App;