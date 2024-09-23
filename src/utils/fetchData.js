export const exersiseOptions = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_API_KEY, // Use VITE-prefixed environment variable
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };
  
  export const fetchData = async (url, options) => {
    // Log to check if the API key is being loaded correctly
    console.log('API Key from .env:', import.meta.env.VITE_API_KEY);
  
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  