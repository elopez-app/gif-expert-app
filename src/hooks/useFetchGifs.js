import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [gif, setGif] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setGif(newImages);
    setLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gif,
    isLoading,
  };
};

export default useFetchGifs;
