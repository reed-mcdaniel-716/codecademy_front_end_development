import React from 'react';
import './css/Track.css';

function Track({ id, name, artist, releaseDate, buttonIcon, list, handleTrackButtonClick, playlistSongs, trackListSongs, setPlaylistSongs }){
  return (
    <div className="track_container" id={`track_${id}`}>
      <div className="track_info">
        <h1>{name}</h1>
        <h2>{artist}</h2>
        <h3>{releaseDate}</h3>
      </div>
      <button id={`track_button_${id}`} onClick={() => setPlaylistSongs(handleTrackButtonClick(playlistSongs, trackListSongs, id, list))}>{buttonIcon}</button>
    </div>
  )
}

export default Track;