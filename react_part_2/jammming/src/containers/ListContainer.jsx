// Parentcomponent for both TrackList and Playlist
// to share higher level state and setter
// i.e. adding a track from track list to playlist only if it is not already in playlist
import TrackList from '../components/TrackList';
import Playlist from '../components/Playlist';
import SearchBar from '../components/SearchBar';
import React, {useState} from 'react';
import './css/ListContainer.css';
import { find, compact } from 'lodash';
import { search, getRandomLyrics } from '../GenuisApiHelpers';

// tweaking to be state in state out for testing
export const handleTrackButtonClick = (playlistSongState, trackListSongState, trackId, list) => {
  if(list === "play"){
    // remove track from playlist
    const filteredSongs = playlistSongState.filter(song => song.id !== trackId);
    return filteredSongs;
  } else if(list === "track"){
    // check if song exists in playlist, and if not, add
    const selectedSong = find(trackListSongState, { 'id': trackId });
    const songSet = new Set([...playlistSongState, selectedSong]);
    const songList = compact(Array.from(songSet));
    return [...songList];
  }
}

function ListContainer (){
  const [trackListSongs, setTrackListSongs] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('');

  const handlePlaylistNameChange = (name) => {
    setPlaylistTitle(name);
  }

  const handleFinishPlaylist = async () => {
    if(playlistSongs.length > 0){
      const randIdx = Math.floor(Math.random() * playlistSongs.length);
      const selectedSong = playlistSongs[randIdx];
      const selectedSongId = selectedSong.id;
      const randomLyricUrl = await getRandomLyrics(selectedSongId);
      const finishButton = document.getElementById('finish_btn');
      finishButton.innerHTML = `<a href="${randomLyricUrl}" target="_blank" rel="noopener noreferrer">Click here for surprise lyrics!</a>`
      setPlaylistSongs([]);
      setPlaylistTitle('');
    }
  };

  return (
    <div className="list_container">
      <div>
          <SearchBar
            search={search}
            setTrackListSongs={setTrackListSongs}
          />
          <TrackList
            trackListSongs={trackListSongs}
            playlistSongs={playlistSongs}
            handleTrackButtonClick={handleTrackButtonClick}
            setPlaylistSongs={setPlaylistSongs}
          />
        </div>
        <div>
          <Playlist
            playlistSongs={playlistSongs}
            trackListSongs={trackListSongs}
            handleTrackButtonClick={handleTrackButtonClick}
            handleFinishPlaylist={handleFinishPlaylist}
            playlistTitle={playlistTitle}
            setPlaylistTitle={setPlaylistTitle}
            handlePlaylistNameChange={handlePlaylistNameChange}
            setPlaylistSongs={setPlaylistSongs}
          />
        </div>
    </div>
  )
}

export default ListContainer;