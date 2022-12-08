const getGifs = async (category) => {
  const API_KEY = "KRugXrbQoK1Lgv8JnXc4JJpMgyxeoii2";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
  const resp = await fetch(url);

  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  
  return gifs;
};

export default getGifs;
