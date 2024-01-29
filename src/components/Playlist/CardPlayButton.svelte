<script lang="ts">
  import PauseIcon from "@/icons/Pause.svelte";
  import PlayIcon from "@/icons/Play.svelte";
  import playerStore from "@/stores/playerStore";

  export let playlistId: string;

  async function changePlaylist() {
    const response = await fetch(`/api/playlist?id=${playlistId}`);
    const { songs, playlist } = await response.json();

    if (songs.length === 0) return alert("Playlist is empty");

    $playerStore.setCurrentlyPlaying({
      playlist,
      song: songs[0],
      songs,
    });
    $playerStore.setIsPlaying(true);
  }

  function onToggle() {
    if ($playerStore.currentlyPlaying?.playlist.id === playlistId) {
      $playerStore.setIsPlaying(!$playerStore.isPlaying);
    } else changePlaylist();
  }
</script>

<button
  class="card-play-button rounded-full bg-green-500 p-4"
  on:click={onToggle}
>
  {#if $playerStore.currentlyPlaying?.playlist.id === playlistId && $playerStore.isPlaying}
    <PauseIcon />
  {:else}
    <PlayIcon />
  {/if}
</button>
