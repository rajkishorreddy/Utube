import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item VideoItem">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="thumnail"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;