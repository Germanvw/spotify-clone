<script lang="ts">
  import AudioTimeSlider from "@/components/Player/AudioTimeSlider.svelte";
  import { adaptSecondsToDuration } from "@/helpers/duration.helpers";
  import { onMount } from "svelte";

  export let audioRef: HTMLAudioElement | null;

  let duration = adaptSecondsToDuration(audioRef?.duration ?? 0);
  let currentTime = audioRef?.currentTime ?? 0;

  const updateCurrentTime = () => {
    if (audioRef) currentTime = audioRef.currentTime;
  };

  onMount(() => {
    if (audioRef) {
      audioRef.addEventListener("timeupdate", updateCurrentTime);
    }
    return () => {
      if (audioRef) {
        audioRef.removeEventListener("timeupdate", updateCurrentTime);
      }
    };
  });
</script>

<div class="flex gap-x-3 text-xs p-t2">
  <span class="opacity-50 w-8"
    >{adaptSecondsToDuration(currentTime) ?? "00:00"}</span
  >
  {#if audioRef !== null}
    <AudioTimeSlider {audioRef} />
  {/if}
  <span class="opacity-50 w-12"> {duration ?? "00:00"}</span>
</div>
