import { fetchData } from '../fetch';
import { useEffect } from "react";

function  useListPost(data, setData, url){
  
  useEffect(() => {
    try{
      fetchData(url)
      .then((posts) => setData(posts));
    }catch(err){
      console.error(" | Hubo un error | " + err);
    }
  },[]);
}

export default useListPost;