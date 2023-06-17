import React from 'react';
import Track from './Track';
import './css/TrackList.css';

function TrackList({ trackListSongs, playlistSongs, handleTrackButtonClick, setPlaylistSongs }){
  const buttonIcon = "+";
  const tracks = trackListSongs.map((track) => {
    return (
      <li key={track.id}>
        <Track
          id={track.id}
          name={track.name}
          artist={track.artist}
          releaseDate={track.releaseDate}
          buttonIcon={buttonIcon}
          list="track"
          trackListSongs={trackListSongs}
          playlistSongs={playlistSongs}
          handleTrackButtonClick={handleTrackButtonClick}
          setPlaylistSongs={setPlaylistSongs}
        />
      </li>
    );
  });

  return (
    <div className="track_list_container">
      <h1 className="title">Search Results:</h1>
      <ul>{tracks}</ul>
    </div>
  )
}

export default TrackList;