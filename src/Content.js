import { useState,useEffect } from "react";

function Content(){
    const [posts,setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then( posts => {
            setPosts(posts)
            }
        )
    },[])

    return (
        <div>
           <ul>
               {
                   posts.map(post =>(
                       <li key={post.id}>{post.title}</li>
                   ))
               }
           </ul>
        </div>
    )
}

export default Content