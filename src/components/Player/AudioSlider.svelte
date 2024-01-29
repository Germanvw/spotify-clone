<script lang="ts">
  import playerStore from "@/stores/playerStore";

  function onChange(event: any) {
    const newVolume = event.target.value / 100;
    $playerStore.setVolume(newVolume);
  }
</script>

<input
  class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
  type="range"
  min="0"
  max="100"
  step="1"
  on:input={onChange}
  value={$playerStore.volume * 100}
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
