import axios from 'axios';

// todo: add state=app_state then implement search
const searchUrlBase = "https://api.genius.com/search?";
const songUrlBase = "https://api.genius.com/songs/";

const searchUrl = `${searchUrlBase}&access_token=${process.env.REACT_APP_CLIENT_ACCESS_TOKEN}`;
export const search = async (query) => {
  try {
    const searchUrlQuery = `${searchUrl}&q=${query}`
    const resp = await axios.get(searchUrlQuery);
    const hits = resp.data.response.hits;
    const songs = hits.map((hit) => {
      return {
        id: hit.result.id,
        artist: hit.result.artist_names,
        name: hit.result.title,
        releaseDate: hit.result.release_date_for_display
      }
    });
    return songs;
  } catch (err){
    console.log('ERROR:', err);
  }
};

export const getRandomLyrics = async (song_id) => {
  try {
    const songUrl = `${songUrlBase}${song_id}?access_token=${process.env.REACT_APP_CLIENT_ACCESS_TOKEN}`;
    const songResp = await axios.get(songUrl);
    const lyricUrl = songResp.data.response.song.url;
    return lyricUrl;
  } catch (err){
    console.log('ERROR:', err);
  }
};