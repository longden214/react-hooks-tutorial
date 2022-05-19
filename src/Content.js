import { useState,useEffect } from "react";

function Content(){
    const [avatar,setAvatar] = useState()

    useEffect(() => {
        return () => {
            console.log("cleanup")
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)

        console.log("handlePreviewAvatar")
    }

    return (
        <div>
            <input type="file" 
            onChange={handlePreviewAvatar} 
            />
            {console.log('re-render')}
            {avatar && (<img src={avatar.preview} alt="" width="80%" />)}
            
        </div>
    )
}

export default Content