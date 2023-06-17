import React, { useState } from 'react';


function SearchBar({ search, setTrackListSongs }){
  const [query, setQuery] = useState('');
  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const songs = await search(query);
    setTrackListSongs(songs);
  };

  return (
    <div className='search_bar_container'>
      <form onSubmit={async(event) => await handleSearchSubmit(event)}>
      <input
        type='text'
        value={query}
        placeholder='Search...'
        onChange={e => setQuery(e.target.value)}
      />
      <button className='submit_search_btn' type="submit" value="Go">Go</button>
      </form>
    </div>
  )
}

export default SearchBar;