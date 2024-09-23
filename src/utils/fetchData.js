export const exersiseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    
    return data
}