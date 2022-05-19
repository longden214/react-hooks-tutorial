import { useState,useEffect } from "react";

const tabs = ["posts", "comments","albums"]

function Content(){
    const [posts,setPosts] = useState([])
    const [type,setType] = useState("posts")
    const [showGoToTop,setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then( posts => {
            setPosts(posts)
            }
        )
    },[type])

    useEffect(() =>{
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            }else{
                setShowGoToTop(false)
            }
        }

        window.addEventListener("scroll",handleScroll)

        // CleanUp func
        return () => {
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

    return (
        <div>
            {
                tabs.map(tab =>(
                    <button
                    key={tab}
                    style={tab === type ? {
                        color:'#fff',
                        backgroundColor:'#333'
                    }:{}}

                    onClick={()=>setType(tab)}
                    >
                        {tab}
                    </button>
                ))
            }
           <ul>
               {
                   posts.map(post =>(
                       <li key={post.id}>{post.title || post.name}</li>
                   ))
               }
           </ul>

           {showGoToTop && (
                <button
                style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px'
                }}
                >
                   Go To Top
                </button> 
           )}
        </div>
    )
}

export default Content