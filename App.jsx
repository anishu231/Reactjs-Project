import React, { useState } from "react";
const App= () =>{
    const purple="#8e44ad";
    const [bg,setBg]=useState(purple);
    const [name,setName]=useState("Click Me");
    const bgchange= () =>{
        let newBg="#34495e";
        setBg(newBg);
        setName("anish singh");
    };
    const bgBlack= ()=>{
        setBg(purple);
        setName("singh Rahul");
    
    };
    return (
        <>
        <div style={{backgroundColor: bg}}>
            <button onClick={bgchange} onDoubleClick={bgBlack}>{name}</button>
        </div>
        </>
    );
}
export default App;