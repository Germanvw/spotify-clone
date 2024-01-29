import type { IPlaylist, ISong } from "@/interfaces/music.interface";

export interface ICurrentMusic {
  playlist: IPlaylist;
  song: ISong;
  songs: ISong[];
}

export interface IPlayerStorageValues {
  isPlaying: boolean;
  volume: number;
  currentlyPlaying: ICurrentMusic | null;
}

export interface IPlayerStorage extends IPlayerStorageValues {
  setIsPlaying: (isPlaying: boolean) => void;
  setVolume: (volume: number) => void;
  setCurrentlyPlaying: (currentlyPlaying: ICurrentMusic) => void;
}
