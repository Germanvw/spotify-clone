<script lang="ts">
  import PlayIcon from "@/icons/Play.svelte";
  import PauseIcon from "@/icons/Pause.svelte";
  import playerStore from "@/stores/playerStore";
  import CurrentSongAudioPlayer from "./CurrentSongAudioPlayer.svelte";
  import VolumeControl from "./VolumeControl.svelte";
  import AudioTimeControl from "./AudioTimeControl.svelte";

  let audioRef: HTMLAudioElement | null = null;
  let previusSong: number | null = null;
  let previusPlaylist: string | null = null;
  let isAudioLoaded = false;

  const onMetadataLoaded = () => {
    isAudioLoaded = true;
  };

  $: if (audioRef) {
    if ($playerStore.isPlaying && isAudioLoaded) audioRef.play();
    else audioRef.pause();
  }

  $: if (audioRef) {
    audioRef.volume = $playerStore.volume;
  }

  $: if ($playerStore.currentlyPlaying !== null && audioRef) {
    if (
      previusPlaylist !== $playerStore.currentlyPlaying.playlist.id ||
      previusSong !== $playerStore.currentlyPlaying.song.id
    ) {
      isAudioLoaded = false;
      audioRef.src = `/music/${$playerStore.currentlyPlaying.playlist.id}/0${$playerStore.currentlyPlaying.song.id}.mp3`;
      previusPlaylist = $playerStore.currentlyPlaying.playlist.id;
      previusSong = $playerStore.currentlyPlaying.song.id;
    }
  }
</script>

<div class="flex flex-row justify-between w-full px-4 z-50">
  <div class="w-[350px]">
    {#if $playerStore.currentlyPlaying !== null}
      <CurrentSongAudioPlayer
        currentSong={$playerStore.currentlyPlaying.song}
      />
    {/if}
  </div>
  <div class="grid place-content-center gap-4 flex-1">
    <div class="flex justify-center flex-col items-center">
      {#if isAudioLoaded}
        <button
          class="bg-white rounded-full p-2 mb-2"
          on:click={() => $playerStore.setIsPlaying(!$playerStore.isPlaying)}
        >
          {#if $playerStore.isPlaying}
            <PauseIcon />
          {:else}
            <PlayIcon />
          {/if}
        </button>
        <AudioTimeControl {audioRef} />
      {:else}
        <div>Cargando audio...</div>
      {/if}
    </div>
  </div>
  <VolumeControl />
  <audio bind:this={audioRef} hidden on:loadedmetadata={onMetadataLoaded} />
</div>
