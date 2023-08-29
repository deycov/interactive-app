import React from "react";
import { List } from "./components/list";
const URL_PRODUCTS = "https://jsonplaceholder.typicode.com/posts/1";


function App () {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async (url,setter) => {
      const data = await fetch(url);
      const initialize = await data.json();
      return(initialize); 
    }
    try{
      const Posts = fetchPosts(URL_PRODUCTS);
      setPosts(Posts);
      console.log(posts);
    }catch(err){
      console.error(" | OCURRIO LO PEOOOOR | " + err);
    }
  },[]);

  return( 
    <div className="container">
      {(posts[0]) && posts.map((data) => {
        <List 
          data={data.title}
        />
      })}
    </div>
  );
}

export { App };