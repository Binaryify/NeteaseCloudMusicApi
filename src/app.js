import { search } from './component/search'
import { song } from './component/song'
import { lrc } from './component/lrc'
import { getArtistAlbums } from './component/getArtistAlbums'
import { getAlbums } from './component/getAlbums'
import { getPlaylists } from './component/getPlaylists'

let api = {
  search: search,
  song: song,
  lrc: lrc,
  getArtistAlbums: getArtistAlbums,
  getAlbums: getAlbums,
  getPlaylists: getPlaylists
}
export {api}
