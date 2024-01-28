<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import Fa from 'svelte-fa';
  import {
    faBicycle,
    faCode,
    faMusic
  } from '@fortawesome/free-solid-svg-icons/index.es';

  let showTypewriter = false;
  const positionBycicle = tweened(0, { duration: 1700, easing: cubicInOut });
  const rotationNote = tweened(0, { duration: 2000, easing: cubicInOut });
  const highlightingWords = tweened(0, { duration: 2000 });
</script>

<div
  class="text-text text-4xl p-2 flex flex-col space-y-2"
  style="width: 500px"
>
  <div
    class="w-full cursor-pointer mt-2"
    on:click={() => positionBycicle.set(320)}
  >
    <div
      class="bg-secondary z-30 relative"
      style="left: {$positionBycicle}px; width: {320 - $positionBycicle}px"
    >
      <Fa icon={faBicycle} />
    </div>
    <div class="absolute -mt-8 ml-16 z-20">
      <Text text="Ich fahre gern mit dem Rad" />
    </div>
  </div>
  <div class="flex flex-row">
    <div class="cursor-pointer mt-2" on:click={() => (showTypewriter = true)}>
      <Fa icon={faCode} />
    </div>
    {#if showTypewriter}
      <div class="mt-3 ml-2 z-20">
        <Text
          typewriter={{ enable: true, speed: 0.3 }}
          text="Ich unterstütze openSource Code Projekte"
        />
      </div>
    {/if}
  </div>
  <div
    class="w-full cursor-pointer mt-2"
    on:click={() => rotationNote.set(360)}
  >
    <div
      class="fixed"
      style="transform: rotate({$rotationNote}deg)"
      on:click={() => highlightingWords.set(1000)}
    >
      <Fa icon={faMusic} />
    </div>
    {#if $highlightingWords > 0}
      <div class="absolute flex flex-row  ml-16 z-20">
        <div class="ml-1 mt-1 {$highlightingWords > 100 ? '' : 'opacity-50'}">
          <Text text="Ich " />
        </div>
        <div class="ml-1 -mt-1 {$highlightingWords > 200 ? '' : 'opacity-50'}">
          <Text text="mache " />
        </div>
        <div class="ml-1 mt-1 {$highlightingWords > 400 ? '' : 'opacity-50'}">
          <Text text="Musik" />
        </div>
        <div class="ml-1 -mt-1 {$highlightingWords > 550 ? '' : 'opacity-50'}">
          <Text text="in" />
        </div>
        <div class="ml-1 mt-1 {$highlightingWords > 700 ? '' : 'opacity-50'}">
          <Text text="meiner" />
        </div>
        <div class="ml-1 {$highlightingWords > 900 ? '' : 'opacity-50'}">
          <Text text="Freizeit" />
        </div>
      </div>
    {/if}
  </div>
</div>
