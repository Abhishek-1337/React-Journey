import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Note from './Component/Note';
import notes from "./notes.js";


function App() {
    console.log(notes);
    return (
        <div>
            <Header />
            <Footer />
            {
                notes.map(item => {
                    return (<Note 
                        key={item.id}
                        title={item.title}
                        content={item.content}
                    />);    
                })
            }
        </div>
    );
}

export default App;