const fetchData = async (url) => {
  const data = await fetch(url);
  const initialize = await data.json();
  return(initialize); 
}

export {fetchData};