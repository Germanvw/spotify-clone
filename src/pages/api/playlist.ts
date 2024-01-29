import type { IPlaylistResponse } from "@/interfaces/apiResponse.interface";
import { playlists, songs as allSongs } from "@/lib/data";

export async function GET({ _, request }: any): Promise<Response> {
  const { url } = request;

  const id = new URL(url).searchParams.get("id");

  const playlist = playlists.find((playlist) => playlist.id === id)!;
  const songs = allSongs.filter((song) => song.albumId === playlist.albumId);

  const response: IPlaylistResponse = {
    playlist,
    songs,
  };

  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  });
}
