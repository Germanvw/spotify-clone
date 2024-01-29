<script lang="ts">
  import { adaptArtist } from "@/helpers/artist.helpers";
  import type { ISong } from "@/interfaces/music.interface";
  export let currentSong: ISong;
</script>

<div class="flex items-center gap-5 relative overflow-hidden">
  <picture class="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
    <img
      src={currentSong.image}
      alt={currentSong.title}
      class="w-full h-full object-cover"
    />
  </picture>
  <div class="flex flex-col">
    <h3 class="font-semibold text-base block">{currentSong.title}</h3>
    <span class="text-xs opacity-80">
      {adaptArtist(currentSong.artists)}
    </span>
  </div>
</div>
