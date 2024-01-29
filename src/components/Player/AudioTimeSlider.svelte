<script lang="ts">
  export let audioRef: HTMLAudioElement;

  let currentTime = 0;

  function onChangeTime(event: any) {
    audioRef.currentTime = event.target.value;
  }

  $: {
    audioRef.addEventListener("timeupdate", () => {
      currentTime = audioRef.currentTime;
    });
  }
</script>

<input
  class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-[500px]"
  type="range"
  min="0"
  max={audioRef.duration ?? 0}
  step="1"
  on:input={onChangeTime}
  value={audioRef.currentTime ?? 0}
/>

<style>
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="range"]::-webkit-slider-thumb {
      width: 15px;
      -webkit-appearance: none;
      appearance: none;
      height: 15px;
      cursor: ew-resize;
      background: #fff;
      box-shadow: -405px 0 0 400px #605e5c;
      border-radius: 50%;
    }
  }
</style>
