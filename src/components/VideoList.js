import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //props.videos
  const renderedList = videos.map((el) => {
    return (
      <VideoItem key={el.id.videoId} onVideoSelect={onVideoSelect} video={el} />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
