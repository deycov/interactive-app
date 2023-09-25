import React from "react";
import useListPost from "../hooks/useListPost";
import AppUi from "./appUi";

//let ID;
//const URL_PRODUCT = `https://jsonplaceholder.typicode.com/posts/${ID}`;
const URL_PRODUCTS = "https://jsonplaceholder.typicode.com/posts/";

function App () {
  const [posts, setPosts] = React.useState([]);
  useListPost(posts, setPosts, URL_PRODUCTS);
  return(  
    <AppUi
      posts={posts}
    />
  );
}
    
export { App };