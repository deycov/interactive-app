import { fetchData } from '../fetch';
import { useEffect } from "react";

function useListPost(setData, url){  
  useEffect(() => {
    try{
      fetchData(url).then(async (res) =>{
        await setData(res);
      })
    }catch(err){
      //console.error(" | Hubo un error | " + err);
      console.error(" ERROOOOOOOOOOOOOOOOOOOOOOR ");
    }
  },[]);
}

export default useListPost;