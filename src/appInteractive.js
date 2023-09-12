import React from "react";
import { List } from "./components/list";
import useListPost from "./useListPost";

//let ID;
//const URL_PRODUCT = `https://jsonplaceholder.typicode.com/posts/${ID}`;
const URL_PRODUCTS = "https://jsonplaceholder.typicode.com/posts/";

function App () {
  const [posts, setPosts] = React.useState([]);
  useListPost(posts, setPosts, URL_PRODUCTS);
  //console.log(posts);

  return(  
    <List
      posts={posts}
    />
  );
}
    
    //{/*<List className="container"> </List> */}
export { App };