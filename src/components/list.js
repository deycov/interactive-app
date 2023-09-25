import React, { useState } from "react";
import useListPost from "../hooks/useListPost";


function List({url}){
  const [posts, setPosts] = useState([]);
  useListPost(setPosts,url)

  return(
    <div className="grid grid-cols-4 gap-4">
        { posts &&
          posts.map((item) => 
            <div> 
              {item.title} 
            </div> 
          )
        }
    </div>
  );
}

export { List };