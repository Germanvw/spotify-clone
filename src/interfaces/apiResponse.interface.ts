import type { IPlaylist, ISong } from "./music.interface";

export interface IPlaylistResponse {
  songs: ISong[];
  playlist: IPlaylist;
}
