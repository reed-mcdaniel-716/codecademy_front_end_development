import React from 'react';
import Track from './Track';
import './css/Playlist.css';

const handleDownloadClick = (playlistSongs, playlistTitle) => {
  const fileName = playlistTitle ? `${playlistTitle.toLowerCase().replace(" ", "_")}.json` : 'my_playlist.json';
  // modified from https://stackoverflow.com/questions/55613438/reactwrite-to-json-file-or-export-download-no-server
  const json = JSON.stringify(playlistSongs, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const href = URL.createObjectURL(blob);

  // create "a" HTLM element with href to file
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();

  // clean up "a" element & remove ObjectURL
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};

function Playlist({ playlistSongs, trackListSongs, handleTrackButtonClick, handleFinishPlaylist, playlistTitle, handlePlaylistNameChange, setPlaylistSongs }){
  const buttonIcon = "-";
  const songTracks = playlistSongs.map((track) => {
    return (
      <li key={track.id}>
        <Track
          id={track.id}
          name={track.name}
          artist={track.artist}
          releaseDate={track.releaseDate}
          buttonIcon={buttonIcon}
          list="play"
          playlistSongs={playlistSongs}
          trackListSongs={trackListSongs}
          handleTrackButtonClick={handleTrackButtonClick}
          setPlaylistSongs={setPlaylistSongs}
        />
      </li>
    );
  });

  return (
    <div className="playlist_container">
      <div>
        <input
          type='text'
          value={playlistTitle}
          placeholder='Playlist Name Here'
          onChange={e => handlePlaylistNameChange(e.target.value)}
        />
        <ul>{songTracks}</ul>
      </div>
      <div>
        <button id='finish_btn' className='playlist_btn' onClick={handleFinishPlaylist}>Done</button>
        <button id="download_btn" className='playlist_btn' onClick={() => handleDownloadClick(playlistSongs, playlistTitle)}>Download</button>
      </div>
    </div>
  )
}

export default Playlist;