import {playMode} from '../common/js/config'
import {loadPlay, loadSearh, loadFavarite} from '../common/js/cache'

const state = {
  disc: {},
  playlist: [],
  mode: playMode.sequence,
  sequenceList: [],
  currentIndex: -1,
  playing: false,
  fullScreen: false,
  favoriteList: loadFavarite(),
  currentSong: {},
  playHistory: loadPlay(),
  singer: {},
  topList: {},
  searchHistory: loadSearh()
}

export default state
