<script lang="ts">
  import { adaptArtist } from "@/helpers/artist.helpers";
  import TimeIcon from "@/icons/Time.svelte";
  import PlayIcon from "@/icons/Play.svelte";
  import PauseIcon from "@/icons/Pause.svelte";
  import type { IPlaylist, ISong } from "@/interfaces/music.interface";
  import playerStore from "@/stores/playerStore";

  export let songs: ISong[];
  export let playlist: IPlaylist;

  let isHovered = -1;

  const onChangeSong = (song: ISong) => {
    if (
      $playerStore.currentlyPlaying?.playlist.id === playlist.id &&
      $playerStore.currentlyPlaying?.song.id === song.id
    ) {
      return $playerStore.setIsPlaying(!$playerStore.isPlaying);
    } else {
      $playerStore.setCurrentlyPlaying({
        playlist,
        song,
        songs,
      });
      return $playerStore.setIsPlaying(true);
    }
  };
</script>

<table class="table-auto text-left min-w-full divide-y divide-gray-500/20">
  <thead>
    <tr class="text-zinc-400 text-sm">
      <th class="px-4 py-2 font-light">#</th>
      <th class="px-4 py-2 font-light">Título</th>
      <th class="px-4 py-2 font-light">Álbum</th>
      <th class="px-4 py-2 font-light"><TimeIcon /></th>
    </tr>
  </thead>
  <tbody>
    {#each songs as song, index}
      <tr
        class="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300"
      >
        <td
          class="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5"
          on:mouseenter={() => (isHovered = index)}
          on:mouseleave={() => (isHovered = -1)}
        >
          {#if isHovered === index}
            <button
              class="card-play-button rounded-full bg-green-500 p-4"
              on:click={() => onChangeSong(song)}
            >
              {#if $playerStore.currentlyPlaying?.playlist.id === playlist.id && $playerStore.currentlyPlaying?.song.id === song.id && $playerStore.isPlaying}
                <PauseIcon />
              {:else}
                <PlayIcon />
              {/if}
            </button>
          {:else}
            {index + 1}
          {/if}
        </td>
        <td class="px-4 py-2 flex gap-3">
          <picture class="">
            <img src={song.image} alt={song.title} class="w-11 h-11" />
          </picture>
          <div class="flex flex-col">
            <h3
              class={`${
                $playerStore.currentlyPlaying?.playlist.id === playlist.id &&
                $playerStore.currentlyPlaying?.song.id === song.id
                  ? "text-green-500"
                  : "text-white"
              } text-base font-normal`}
            >
              {song.title}
            </h3>
            <span>{adaptArtist(song.artists)}</span>
          </div>
        </td>
        <td class="px-4 py-2">{song.album}</td>
        <td class="px-4 py-2 rounded-tr-lg rounded-br-lg">{song.duration}</td>
      </tr>
    {/each}
  </tbody>
</table>
