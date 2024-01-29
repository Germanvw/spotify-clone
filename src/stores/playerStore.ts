import type {
  ICurrentMusic,
  IPlayerStorage,
  IPlayerStorageValues,
} from "@/interfaces/player.interface";
import { createStore } from "zustand/vanilla";
import zustandToSvelte from "@/lib/zustandToSvelte";

const INITIAL_STORE: IPlayerStorageValues = {
  isPlaying: false,
  volume: 0.5,
  currentlyPlaying: null,
};

export interface CounterState {
  value: number;
  increment: () => void;
}

const playerStore = zustandToSvelte(
  createStore<IPlayerStorage>((set) => ({
    ...INITIAL_STORE,
    setVolume: (volume: number) => set({ volume }),
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setCurrentlyPlaying: (currentlyPlaying: ICurrentMusic) =>
      set({ currentlyPlaying }),
  }))
);

export default playerStore;
