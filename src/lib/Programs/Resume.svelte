<script lang="ts">
  import Text from '$lib/components/Wrapper/Text.svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import MediaQuery from '$lib/components/Wrapper/MediaQuery.svelte';
  import NormalButton from '$lib/components/Input/NormalButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import Window from './unilities/window.svelte';
  import { writable } from 'svelte/store';
  import { openWindows } from '$lib/Stores/OpenWindows';

  const dispatcher = createEventDispatcher();
  let displayHint: boolean = true;
</script>

<div class="bg-secondary">
  <div class="mt-4">
    {#if displayHint}
      <div
        class="absolute -mt-4"
        out:fade={{ duration: 500, easing: cubicInOut }}
      >
        <Text text="Klick mich" size="small" />
      </div>
    {/if}
  </div>
  <div
    on:click={() => {
      if ($openWindows.find((e) => e.title === 'auto dm')) {
        openWindows.update((e) => e.filter((e) => e.title !== 'auto dm'));
      } else {
        openWindows.update((e) => [...e, { title: 'auto dm' }]);
      }
    }}
  >
    <Text text="Anstellung bei der auto dm" />
  </div>

  <div
    on:click={() => {
      if ($openWindows.find((e) => e.title === 'Beresa')) {
        openWindows.update((e) => e.filter((e) => e.title !== 'Beresa'));
      } else {
        openWindows.update((e) => [...e, { title: 'Beresa' }]);
      }
    }}
  >
    <Text text="Ausbildung bei der Beresa" />
  </div>

  <div
    on:click={() => {
      if ($openWindows.find((e) => e.title === 'con terra')) {
        openWindows.update((e) => e.filter((e) => e.title !== 'con terra'));
      } else {
        openWindows.update((e) => [...e, { title: 'con terra' }]);
      }
    }}
  >
    <Text text="Praktikum bei con terra" />
  </div>

  <div
    on:click={() => {
      if ($openWindows.find((e) => e.title === 'studium')) {
        openWindows.update((e) => e.filter((e) => e.title !== 'studium'));
      } else {
        openWindows.update((e) => [...e, { title: 'studium' }]);
      }
    }}
  >
    <Text text="Studium an der WWU" />
  </div>

  <div
    on:click={() => {
      if ($openWindows.find((e) => e.title === 'abitur')) {
        openWindows.update((e) => e.filter((e) => e.title !== 'abitur'));
      } else {
        openWindows.update((e) => [...e, { title: 'abitur' }]);
      }
    }}
  >
    <Text text="Abitur an der JCS" />
  </div>
</div>
