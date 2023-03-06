<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
  import { onMount } from 'svelte';
  import { openWindows, windowZIndex } from '$lib/Stores/OpenWindows';
  import Fa from 'svelte-fa';
  import { faXmark } from '@fortawesome/free-solid-svg-icons/index.es';

  export let id: string = '';
  export let title: string = '';
  let wHight: number;
  let wWidth: number;
  let left = 0;
  let top = 0;

  export let zIndex: Number = 3;

  let moving = false;

  onMount(() => {
    left = Math.floor(Math.random() * (wWidth / 1.3));
    top = Math.floor(Math.random() * (wHight / 2));
    onMouseDown();
  });

  function onMouseDown() {
    zIndex = $windowZIndex + 1;
    windowZIndex.update((e) => e + 1);
  }

  function onMouseDownHeader(e) {
    moving = true;
  }

  function onMouseMove(e) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }

  function onMouseUp() {
    moving = false;
  }
</script>

<svelte:window
  bind:innerHeight={wHight}
  bind:innerWidth={wWidth}
  on:mouseup={onMouseUp}
  on:mousemove={onMouseMove}
/>

<div
  on:mousedown={onMouseDown}
  style="left: {left}px; top: {top}px; z-index: {zIndex}; max-width: 1000px; min-width: 400px; min-height: 200px;"
  class="absolute border-4 rounded-lg bg-secondary"
>
  <!-- Header -->
  <div
    class="cursor-move bg-primary flex flex-row"
    on:mousedown={(e) => {
      onMouseDownHeader(e);
    }}
  >
    <div class="p-1">
      <Text text={title} />
    </div>
    <div
      class="ml-auto cursor-pointer text-4xl text-text bg-error w-10 rounded-tr-md"
      on:click={() => {
        openWindows.update((e) => e.filter((e) => e[1]?.id.indexOf(id) === -1));
      }}
    >
      <div class="flex flex-col text-center">
        <Fa icon={faXmark} />
      </div>
    </div>
  </div>

  <!-- Content -->
  <div class="">
    <slot />
  </div>
</div>
