import React from "react";
import useListPost from "../hooks/useListPost";
import AppUi from "./appUi";

//let ID;
//const URL_PRODUCT = `https://jsonplaceholder.typicode.com/posts/${ID}`;
const URL_PRODUCTS = "https://jsonplaceholder.typicode.com/posts/";

function  App () {
  
  return(  
    <AppUi
      url={URL_PRODUCTS}
    />
  );
}
    
export { App };