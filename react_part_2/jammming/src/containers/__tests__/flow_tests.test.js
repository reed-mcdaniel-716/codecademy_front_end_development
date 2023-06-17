import { handleTrackButtonClick } from '../ListContainer';
import { isEqual } from 'lodash';

const mockTrackListData = [
  {
    id: 1,
    name: 'We Cry Together',
    artist: 'Kendrick Lamar',
    album: 'Mr. Morale & the Big Steppers'
  },
  {
    id: 2,
    name: 'Hurt Me So Good',
    artist: 'Jazmine Sullivan',
    album: "Heaux Tales Mo' Tales"
  },
  {
    id: 3,
    name: 'Cigarettes And Coffee',
    artist: 'Otis Redding',
    album: 'The Sould Album'
  },
  {
    id: 4,
    name: 'A Sunday Kind of Love',
    artist: 'Etta James',
    album: 'At Last!'
  }
];

const mockPlaylistData = [
  {
    id: 5,
    name: "You Don't Have to Call",
    artist: 'Usher',
    album: '8701'
  },
  {
    id: 6,
    name: 'Used to Love You',
    artist: 'John Legend',
    album: "Get Lifted"
  }
];

it('adds track to playlist', () => {
  let newSong = mockTrackListData[0];
  let expectedState = [...mockPlaylistData, newSong];
  let receivedState = handleTrackButtonClick(mockPlaylistData, mockTrackListData, newSong.id, 'track');
  expect(isEqual(expectedState, receivedState)).toBe(true);
});

it('removes track from playlist', () => {
  let oldSong = mockPlaylistData[0];
  let expectedState = mockPlaylistData.filter((track) => track.id !== oldSong.id);
  let receivedState = handleTrackButtonClick(mockPlaylistData, mockTrackListData, oldSong.id, 'play');
  expect(isEqual(expectedState, receivedState)).toBe(true);
});

it('does not add duplicate trackss to a playlist', () => {
  let newSong = mockPlaylistData[0];
  let expectedState = [...mockPlaylistData];
  let receivedState = handleTrackButtonClick(mockPlaylistData, mockTrackListData, newSong.id, 'track');
  expect(isEqual(expectedState, receivedState)).toBe(true);
});