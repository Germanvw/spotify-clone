<script lang="ts">
  import AudioSlider from "@/components/Player/AudioSlider.svelte";
  import playerStore from "@/stores/playerStore";
  import VolumeSilenceIcon from "@/icons/VolumeSilence.svelte";
  import VolumeIcon from "@/icons/Volume.svelte";

  let previusVolumeRef: number | null;

  const onMuteClick = () => {
    if (previusVolumeRef) {
      $playerStore.setVolume(previusVolumeRef);
      previusVolumeRef = null;
    } else {
      previusVolumeRef = $playerStore.volume;
      $playerStore.setVolume(0);
    }
  };
</script>

<div class="flex justify-center items-center gap-x-2 text-white">
  <button on:click={onMuteClick}>
    {#if $playerStore.volume === 0}
      <VolumeSilenceIcon />
    {:else}
      <VolumeIcon />
    {/if}
  </button>
  <AudioSlider />
</div>
