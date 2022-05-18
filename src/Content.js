import { useState,useEffect } from "react";

function Content(){
    const [title,setTitle] = useState('')

    useEffect(() => {
        console.log("Mounted");
        document.title = title
    })

    return (
        <div>
            <input type="text" 
            value={title}
            onChange={e => setTitle(e.target.value)} 
            />
            {console.log('render')}
        </div>
    )
}

export default Content