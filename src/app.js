import { search } from './component/search'
import { song } from './component/song'
import { lrc } from './component/lrc'
import { getArtistAlbums } from './component/getArtistAlbums'
import { getAlbums } from './component/getAlbums'

let api = {
  search: search,
  song: song,
  lrc: lrc,
  getArtistAlbums: getArtistAlbums,
  getAlbums: getAlbums

}
export {api}
