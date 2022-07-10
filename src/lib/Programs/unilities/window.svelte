<script lang="ts">
  import Text from '$lib/components/Wrapper/Text.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { openWindows, windowZIndex } from '$lib/Stores/OpenWindows';
  import Fa from 'svelte-fa';
  import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';
  import { logDOM } from '@testing-library/svelte';

  export let id: string = '';
  export let title: string = '';
  let left = 100;
  let top = 100;

  let zIndex: Number = 3;

  let moving = false;

  onMount(() => {
    zIndex = $windowZIndex + 1;
    windowZIndex.update((e) => e + 1);
  });

  function onMouseDown(e) {
    zIndex = $windowZIndex + 1;
    windowZIndex.update((e) => e + 1);
  }

  function onMouseDownHeader(e) {
    moving = true;
    //sort array
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

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<div
  on:mousedown={onMouseDown}
  style="left: {left}px; top: {top}px; z-index: {zIndex}; max-width: 50%; min-width: 20%"
  class="absolute border-4 rounded-lg bg-secondary"
>
  <!-- Header -->
  <div
    class="cursor-move bg-primary flex flex-row"
    on:mousedown={onMouseDownHeader}
  >
    <div class="p-1">
      <Text text={title} />
    </div>
    <div
      class="ml-auto cursor-pointer text-4xl text-text bg-error w-10 rounded-tr-md"
      on:click={() => {
        openWindows.update((e) => e.filter((e) => e.title !== id));
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
