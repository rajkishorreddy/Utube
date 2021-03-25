import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [SelectedVideo, setSelectedVideo] = useState(null);
  const [data, search] = useVideos("justin bieber");
  useEffect(() => {
    setSelectedVideo(data[0]);
  }, [data]);
  return (
    <div className="ui container">
      <SearchBar whenSubmit={search} />
      <div className="ui grid ">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={SelectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
