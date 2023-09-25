import React from "react";


function List({posts}){
  return(
    <div className="">
      <ul>
        { 
          posts.map((item) => 
            <li> 
              {item.title} 
            </li> 
          )
        
        }
      </ul>
    </div>
  );
}

export { List };