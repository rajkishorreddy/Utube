import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    onSearchSubmit(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setData(response.data.items);
  };
  return [data, onSearchSubmit];
};
export default useVideos;
